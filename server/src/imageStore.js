import { images, imageFiles } from './db.js';

/*
 * Replaced images, keyed by slot id ("s0", "s1", …) — the same ids the
 * <Img slot> components carry. A slot holds an optional replacement file
 * (in GridFS) plus the fit/position/zoom chosen in the editor.
 */

export const SLOT_RE = /^s\d+$/;
const FITS = new Set(['cover', 'contain', 'fill']);
const IMAGE_MIMES = new Set([
  'image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif', 'image/svg+xml', 'image/bmp',
]);

const clamp = (v, lo, hi, dflt) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : dflt;
};

export function normalizeFit({ fit, px, py, zoom } = {}) {
  return {
    fit: FITS.has(fit) ? fit : 'cover',
    px: clamp(px, 0, 100, 50),
    py: clamp(py, 0, 100, 50),
    zoom: clamp(zoom, 100, 300, 100),
  };
}

/** Trust the file's magic bytes over the declared type (a .jpg can really be a PNG). */
function sniffMime(buffer, declared) {
  const hex = buffer.subarray(0, 12).toString('hex');
  if (hex.startsWith('ffd8ff')) return 'image/jpeg';
  if (hex.startsWith('89504e47')) return 'image/png';
  if (hex.startsWith('47494638')) return 'image/gif';
  if (hex.startsWith('52494646') && hex.slice(16, 24) === '57454250') return 'image/webp';
  return declared;
}

const publicEntry = (doc) => ({
  // The file id in the URL makes it change with every replacement, so it can be cached forever.
  url: doc.fileId ? `/api/images/${doc._id}/file?v=${doc.fileId}` : null,
  fit: doc.fit, px: doc.px, py: doc.py, zoom: doc.zoom,
});

export async function listImages() {
  const docs = await images.find().toArray();
  return Object.fromEntries(docs.map((d) => [d._id, publicEntry(d)]));
}

export function allImageDocs() {
  return images.find().sort({ _id: 1 });
}

function uploadFile(slot, buffer, mime) {
  return new Promise((resolve, reject) => {
    const stream = imageFiles.openUploadStream(slot, { metadata: { slot, mime } });
    stream.once('finish', () => resolve(stream.id));
    stream.once('error', reject);
    stream.end(buffer);
  });
}

async function deleteFile(fileId) {
  if (!fileId) return;
  try {
    await imageFiles.delete(fileId);
  } catch (err) {
    if (!/not found/i.test(err.message)) throw err;
  }
}

/**
 * Save a slot. `image` is { buffer, mime } for a new replacement image, or
 * null to keep the current image and only change fit/position/zoom.
 * `{ clearFile: true }` drops any replacement (fit-only adjustment of the original).
 */
export async function saveImage(slot, image, fitInput, { clearFile = false } = {}) {
  const prev = await images.findOne({ _id: slot });
  const set = { ...normalizeFit(fitInput), updatedAt: new Date() };

  if (image) {
    const mime = sniffMime(image.buffer, image.mime);
    if (!IMAGE_MIMES.has(mime)) throw Object.assign(new Error(`Unsupported image type: ${mime}`), { status: 415 });
    set.fileId = await uploadFile(slot, image.buffer, mime);
    set.mime = mime;
  } else if (clearFile || !prev) {
    set.fileId = null;
    set.mime = null;
  }

  const doc = await images.findOneAndUpdate({ _id: slot }, { $set: set }, { upsert: true, returnDocument: 'after' });
  if (prev?.fileId && !prev.fileId.equals(doc.fileId)) await deleteFile(prev.fileId);
  return publicEntry(doc);
}

export async function resetImage(slot) {
  const prev = await images.findOneAndDelete({ _id: slot });
  if (prev?.fileId) await deleteFile(prev.fileId);
}

/** The replacement file for a slot, or null: { stream, mime, length }. */
export async function openImageFile(slot) {
  const doc = await images.findOne({ _id: slot });
  if (!doc?.fileId) return null;
  const [file] = await imageFiles.find({ _id: doc.fileId }).toArray();
  if (!file) return null;
  return { stream: imageFiles.openDownloadStream(doc.fileId), mime: doc.mime, length: file.length };
}

export async function readImageFile(fileId) {
  const chunks = [];
  for await (const chunk of imageFiles.openDownloadStream(fileId)) chunks.push(chunk);
  return Buffer.concat(chunks);
}

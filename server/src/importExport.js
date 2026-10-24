import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { SLOT_RE, saveImage, resetImage, allImageDocs, readImageFile } from './imageStore.js';
import { openZip } from './zip.js';

/*
 * Two kinds of files come in:
 *
 * Image bundles ("↑ Import / ↓ Export") — merged into what is stored:
 *   NDJSON  — one {"id":"s0","url":"data:…","fit":"cover","px":50,"py":50,"zoom":100} per line
 *   legacy  — {"s0":{"url":"data:…","fit":…}, …}  or  {"s24":"data:…", …}
 *   Files can be hundreds of MB, so both formats are stream-parsed.
 *
 * Book data exports ("↓ Data") — a full snapshot, replacing what is stored:
 *   nepal-book-data/nepal-book-data.json + nepal-book-data/image_assets/replaced/*,
 *   as a .zip or as an extracted folder.
 */

const DATA_JSON = 'nepal-book-data.json';

function parseDataURL(url) {
  const m = /^data:([^;,]+)(;base64)?,/.exec(url || '');
  if (!m) return null;
  const payload = url.slice(m[0].length);
  return {
    mime: m[1],
    buffer: m[2] ? Buffer.from(payload, 'base64') : Buffer.from(decodeURIComponent(payload)),
  };
}

async function* ndjsonEntries(file) {
  const rl = readline.createInterface({ input: fs.createReadStream(file, 'utf8'), crlfDelay: Infinity });
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const v = JSON.parse(line);
      if (v && v.id) yield v;
    } catch { /* skip malformed line */ }
  }
}

/**
 * Legacy object format. Base64 contains no quotes or braces, so a value ends
 * at the first `}` (object value) or the next `"` (string value).
 */
async function* legacyEntries(file) {
  let buf = '';
  for await (const chunk of fs.createReadStream(file, { encoding: 'utf8', highWaterMark: 8 << 20 })) {
    buf += chunk;
    let i = 0;
    for (;;) {
      const qs = buf.indexOf('"', i); if (qs < 0) { i = buf.length; break; }
      const qe = buf.indexOf('"', qs + 1); if (qe < 0) { i = qs; break; }
      const key = buf.slice(qs + 1, qe);
      if (!SLOT_RE.test(key)) { i = qe + 1; continue; }
      const colon = buf.indexOf(':', qe + 1); if (colon < 0) { i = qs; break; }
      const vs = buf.slice(colon + 1).search(/\S/); if (vs < 0) { i = qs; break; }
      const start = colon + 1 + vs;
      const close = buf[start] === '{' ? '}' : '"';
      const end = buf.indexOf(close, start + 1); if (end < 0) { i = qs; break; }
      const raw = buf.slice(start, end + 1);
      i = end + 1;
      try {
        const v = JSON.parse(raw);
        yield typeof v === 'string' ? { id: key, url: v } : { id: key, ...v };
      } catch { /* skip malformed entry */ }
    }
    buf = buf.slice(i);
  }
}

async function readHead(file, len) {
  const fh = await fs.promises.open(file, 'r');
  try {
    const { buffer, bytesRead } = await fh.read(Buffer.alloc(len), 0, len, 0);
    return buffer.subarray(0, bytesRead);
  } finally {
    await fh.close();
  }
}

/** Merge an image bundle into the store. Returns the number of slots updated. */
async function importBundle(file, onProgress) {
  const ndjson = /^\s*\{\s*"id"\s*:/.test((await readHead(file, 200)).toString('utf8'));
  let count = 0;
  for await (const v of ndjson ? ndjsonEntries(file) : legacyEntries(file)) {
    if (!SLOT_RE.test(v.id)) continue;
    const image = v.url ? parseDataURL(v.url) : null;
    if (v.url && !image) continue;
    try {
      await saveImage(v.id, image, v);
      onProgress?.(++count, v.id);
    } catch (err) {
      console.warn(`Skipped ${v.id}: ${err.message}`);
    }
  }
  return count;
}

/**
 * Apply a book data snapshot. `read(relPath)` returns a file's bytes, relative
 * to the folder holding nepal-book-data.json. Every slot ends up exactly as
 * the export describes it: replaced, fit-adjusted, or back to the original.
 */
async function importBookData(json, read, onProgress) {
  const data = JSON.parse(json);
  if (!Array.isArray(data.spreads)) throw new Error(`${DATA_JSON} has no spreads`);
  let count = 0;
  for (const spread of data.spreads) {
    for (const img of spread.images || []) {
      if (!SLOT_RE.test(img.slot)) continue;
      const isDefault = img.fit === 'cover' && img.px === 50 && img.py === 50 && img.zoom === 100;
      if (img.replaced) {
        await saveImage(img.slot, { buffer: await read(img.src), mime: img.mime }, img);
      } else if (!isDefault) {
        await saveImage(img.slot, null, img, { clearFile: true });
      } else {
        await resetImage(img.slot);
        continue;
      }
      onProgress?.(++count, img.slot);
    }
  }
  return count;
}

async function importDataZip(file, onProgress) {
  const zip = await openZip(file);
  try {
    const jsonName = [...zip.entries.keys()].find((n) => n === DATA_JSON || n.endsWith('/' + DATA_JSON));
    if (!jsonName) throw new Error(`ZIP does not contain ${DATA_JSON}`);
    const base = jsonName.slice(0, -DATA_JSON.length);
    const read = async (rel) => {
      const entry = zip.entries.get(base + rel);
      if (!entry) throw new Error(`ZIP is missing ${base + rel}`);
      return entry();
    };
    return await importBookData((await zip.entries.get(jsonName)()).toString('utf8'), read, onProgress);
  } finally {
    await zip.close();
  }
}

/** Finds nepal-book-data.json in `dir` or up to two folders below it. */
function findDataJson(dir, depth = 0) {
  const direct = path.join(dir, DATA_JSON);
  if (fs.existsSync(direct)) return direct;
  if (depth >= 2) return null;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      const found = findDataJson(path.join(dir, e.name), depth + 1);
      if (found) return found;
    }
  }
  return null;
}

async function importDataFolder(dir, onProgress) {
  const jsonPath = findDataJson(dir);
  if (!jsonPath) throw new Error(`No ${DATA_JSON} found in ${dir}`);
  const base = path.dirname(jsonPath);
  return importBookData(fs.readFileSync(jsonPath, 'utf8'), (rel) => fs.promises.readFile(path.join(base, rel)), onProgress);
}

/**
 * Import anything the app understands: a data-export folder or .zip, or an
 * image bundle. Returns { kind, imported }.
 */
export async function importAny(file, { onProgress } = {}) {
  if (fs.statSync(file).isDirectory()) {
    return { kind: 'book data', imported: await importDataFolder(file, onProgress) };
  }
  const head = await readHead(file, 4);
  if (head.toString('hex') === '504b0304') {
    return { kind: 'book data', imported: await importDataZip(file, onProgress) };
  }
  return { kind: 'image bundle', imported: await importBundle(file, onProgress) };
}

/** Stream the current images as an NDJSON bundle. */
export async function exportBundle(res) {
  res.setHeader('Content-Type', 'application/x-ndjson');
  res.setHeader('Content-Disposition', 'attachment; filename="nepal-book-images.json"');
  for await (const doc of allImageDocs()) {
    const line = { id: doc._id, fit: doc.fit, px: doc.px, py: doc.py, zoom: doc.zoom };
    if (doc.fileId) line.url = `data:${doc.mime};base64,` + (await readImageFile(doc.fileId)).toString('base64');
    if (!res.write(JSON.stringify(line) + '\n')) await new Promise((r) => res.once('drain', r));
  }
  res.end();
}

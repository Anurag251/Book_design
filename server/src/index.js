import fs from 'node:fs';
import os from 'node:os';
import express from 'express';
import multer from 'multer';
import { PORT, ASSETS_DIR, CLIENT_DIST, MONGODB_DB } from './config.js';
import { SLOT_RE, listImages, saveImage, resetImage, openImageFile } from './imageStore.js';
import { importAny, exportBundle } from './importExport.js';
import { getDeck, setSkipped } from './deckStore.js';

const app = express();
app.use(express.json());

const imageUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 60 * 1024 * 1024 },
  fileFilter: (req, file, cb) => cb(null, file.mimetype.startsWith('image/')),
});
const bundleUpload = multer({ dest: os.tmpdir(), limits: { fileSize: 2 * 1024 * 1024 * 1024 } });

const asyncRoute = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

function requireSlot(req, res, next) {
  if (!SLOT_RE.test(req.params.slot)) return res.status(400).json({ error: 'Invalid slot id' });
  next();
}

/* ── Images ── */
app.get('/api/images', asyncRoute(async (req, res) => {
  res.json(await listImages());
}));

app.get('/api/images/export', asyncRoute(async (req, res) => {
  await exportBundle(res);
}));

// Image bundle (.json) or book data export (.zip)
app.post('/api/images/import', bundleUpload.single('file'), asyncRoute(async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    res.json(await importAny(req.file.path));
  } finally {
    fs.rm(req.file.path, { force: true }, () => {});
  }
}));

app.get('/api/images/:slot/file', requireSlot, asyncRoute(async (req, res) => {
  const file = await openImageFile(req.params.slot);
  if (!file) return res.status(404).end();
  res.setHeader('Content-Type', file.mime);
  res.setHeader('Content-Length', file.length);
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  file.stream.on('error', (err) => res.destroy(err)).pipe(res);
}));

// multipart: optional "file" + fit, px, py, zoom fields
app.put('/api/images/:slot', requireSlot, imageUpload.single('file'), asyncRoute(async (req, res) => {
  const image = req.file ? { buffer: req.file.buffer, mime: req.file.mimetype } : null;
  res.json(await saveImage(req.params.slot, image, req.body));
}));

app.delete('/api/images/:slot', requireSlot, asyncRoute(async (req, res) => {
  await resetImage(req.params.slot);
  res.status(204).end();
}));

/* ── Deck ── */
app.get('/api/deck', asyncRoute(async (req, res) => {
  res.json(await getDeck());
}));

app.put('/api/deck/skip', asyncRoute(async (req, res) => {
  const { label, skipped } = req.body || {};
  if (typeof label !== 'string') return res.status(400).json({ error: 'label is required' });
  res.json(await setSkipped(label, !!skipped));
}));

/* ── Static files ── */
app.use('/photos', express.static(`${ASSETS_DIR}/photos`, { maxAge: '7d' }));
app.use('/image_assets', express.static(`${ASSETS_DIR}/image_assets`, { maxAge: '7d' }));

if (fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    res.sendFile(`${CLIENT_DIST}/index.html`);
  });
}

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Book server on http://localhost:${PORT} (MongoDB database "${MONGODB_DB}")`);
  if (!fs.existsSync(`${ASSETS_DIR}/photos`)) console.warn(`! Missing ${ASSETS_DIR}/photos — copy the book's photos/ and image_assets/ folders there.`);
});

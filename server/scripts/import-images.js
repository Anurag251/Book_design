#!/usr/bin/env node
/**
 * Import into MongoDB straight from disk — handy for multi-hundred-MB files.
 * Accepts a book data export (folder or .zip from "↓ Data") or an image
 * bundle (.json from "↓ Export", including the HTML version's).
 *
 *   npm run import -- nepal-book-data
 *   npm run import -- "../Book_design/nepal-book-images (3).json"
 */
import path from 'node:path';
import { importAny } from '../src/importExport.js';
import { client } from '../src/db.js';

const target = process.argv[2];
if (!target) {
  console.error('Usage: npm run import -- <data folder | data .zip | bundle .json>');
  process.exit(1);
}

try {
  const { kind, imported } = await importAny(path.resolve(target), {
    onProgress: (n, id) => process.stdout.write(`\r  ${n} saved (last: ${id})   `),
  });
  console.log(`\nDone — ${imported} slot(s) imported from ${kind}.`);
} finally {
  await client.close();
}

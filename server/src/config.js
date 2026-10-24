import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

export const PORT = Number(process.env.PORT) || 4000;
/** Original book photography: photos/ and image_assets/ live here. */
export const ASSETS_DIR = path.resolve(ROOT, process.env.ASSETS_DIR || 'assets');
export const CLIENT_DIST = path.join(ROOT, 'client/dist');

// 127.0.0.1 rather than localhost: mongod listens on IPv4 only by default on Windows.
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
export const MONGODB_DB = process.env.MONGODB_DB || 'nepal_book';

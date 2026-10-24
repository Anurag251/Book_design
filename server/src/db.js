import { MongoClient, GridFSBucket } from 'mongodb';
import { MONGODB_URI, MONGODB_DB } from './config.js';

/*
 * MongoDB layout (database "nepal_book"):
 *   images            { _id: "s12", fileId: ObjectId | null, mime, fit, px, py, zoom, updatedAt }
 *   imageFiles.*      GridFS bucket holding the replacement image bytes
 *   deck              { _id: "settings", skipped: ["00 Cover", …] }
 */
export const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });

try {
  await client.connect();
} catch (err) {
  console.error(`Could not connect to MongoDB at ${MONGODB_URI} — is the MongoDB service running?\n${err.message}`);
  process.exit(1);
}

export const db = client.db(MONGODB_DB);
export const images = db.collection('images');
export const deck = db.collection('deck');
export const imageFiles = new GridFSBucket(db, { bucketName: 'imageFiles' });

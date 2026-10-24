import { deck } from './db.js';

/** Deck settings shared by everyone viewing the book: which spreads are skipped. */
const ID = 'settings';

export async function getDeck() {
  const doc = await deck.findOne({ _id: ID });
  return { skipped: doc?.skipped || [] };
}

export async function setSkipped(label, skipped) {
  const update = skipped ? { $addToSet: { skipped: label } } : { $pull: { skipped: label } };
  const doc = await deck.findOneAndUpdate({ _id: ID }, update, { upsert: true, returnDocument: 'after' });
  return { skipped: doc.skipped || [] };
}

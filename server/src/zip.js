import fs from 'node:fs/promises';
import zlib from 'node:zlib';

/**
 * Minimal ZIP reader for the book's "↓ Data" exports (stored or deflated
 * entries, no ZIP64). Returns a Map of entry name → () => Promise<Buffer>,
 * reading each entry from disk only when asked.
 */
export async function openZip(file) {
  const fh = await fs.open(file, 'r');
  const { size } = await fh.stat();

  const read = async (pos, len) => {
    const buf = Buffer.alloc(len);
    await fh.read(buf, 0, len, pos);
    return buf;
  };

  // End of central directory: last 22 bytes + up to 64 KB of comment.
  const tailLen = Math.min(size, 22 + 0xffff);
  const tail = await read(size - tailLen, tailLen);
  const eocd = tail.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (eocd < 0) {
    await fh.close();
    throw new Error('Not a ZIP file');
  }
  const count = tail.readUInt16LE(eocd + 10);
  const cdSize = tail.readUInt32LE(eocd + 12);
  const cdOffset = tail.readUInt32LE(eocd + 16);
  const cd = await read(cdOffset, cdSize);

  const entries = new Map();
  for (let i = 0, p = 0; i < count; i++) {
    if (cd.readUInt32LE(p) !== 0x02014b50) throw new Error('Corrupt ZIP central directory');
    const method = cd.readUInt16LE(p + 10);
    const compSize = cd.readUInt32LE(p + 20);
    const nameLen = cd.readUInt16LE(p + 28);
    const extraLen = cd.readUInt16LE(p + 30);
    const commentLen = cd.readUInt16LE(p + 32);
    const localOffset = cd.readUInt32LE(p + 42);
    const name = cd.toString('utf8', p + 46, p + 46 + nameLen);
    p += 46 + nameLen + extraLen + commentLen;

    entries.set(name, async () => {
      const local = await read(localOffset, 30);
      const dataStart = localOffset + 30 + local.readUInt16LE(26) + local.readUInt16LE(28);
      const data = await read(dataStart, compSize);
      if (method === 0) return data;
      if (method === 8) return zlib.inflateRawSync(data);
      throw new Error(`Unsupported ZIP compression method ${method} for ${name}`);
    });
  }
  return { entries, close: () => fh.close() };
}

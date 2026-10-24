import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DESIGN_W, DESIGN_H } from './deck/Deck.jsx';
import { makeZip } from './zip.js';

/*
 * "↓ Data" export: the whole book as a ZIP, same layout as the HTML version's:
 *   nepal-book-data/nepal-book-data.json         all spreads, text, image entries
 *   nepal-book-data/image_assets/replaced/*      images replaced in the app
 * Each image entry's `src` is relative to that folder. The ZIP imports back
 * through "↑ Import" or `npm run import`.
 */

/** Text of every element that directly holds text; only <br> counts as a line break. */
function textBlocks(root) {
  const out = [];
  (function walk(el) {
    const own = [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim());
    if (own) {
      const c = el.cloneNode(true);
      c.querySelectorAll('br').forEach((b) => b.replaceWith('\u0001'));
      out.push({
        tag: el.tagName.toLowerCase(),
        class: el.getAttribute('class') || '',
        text: c.textContent.replace(/\s+/g, ' ').replace(/ ?\u0001 ?/g, '\n').trim(),
      });
      return;
    }
    [...el.children].forEach((c) => { if (c.tagName !== 'SCRIPT' && c.tagName !== 'STYLE') walk(c); });
  })(root);
  return out;
}

const sideOf = (el) => (el.classList.contains('left') || el.classList.contains('l') ? 'left' : 'right');
const relative = (src) => (src || '').replace(/^\//, '');
const pad3 = (n) => String(n).padStart(3, '0');
const classList = (el) => (el.getAttribute('class') || '').split(/\s+/).filter(Boolean);

export async function exportBookData(spreads, savedImages, onProgress) {
  const files = [], out = [];
  const parser = new DOMParser();

  for (const [si, { label, Component }] of spreads.entries()) {
    const doc = parser.parseFromString(renderToStaticMarkup(createElement(Component)), 'text/html');
    const section = doc.body.firstElementChild;
    section.querySelectorAll('.book-img-hoverable').forEach((el) => {
      el.classList.remove('book-img-hoverable');
      if (!el.getAttribute('class')) el.removeAttribute('class');
    });
    const pages = [...section.querySelectorAll(':scope > .page')];

    const images = await Promise.all([...section.querySelectorAll('[data-bslot]')].map(async (el) => {
      const slot = el.dataset.bslot;
      const saved = savedImages[slot];
      const page = el.closest('.page');
      const original = relative(el.getAttribute('src'));
      const img = {
        slot,
        page: page ? sideOf(page) : 'spread',
        container: el.parentElement?.getAttribute('class') || '',
        kind: 'image',
        alt: el.getAttribute('alt') || '',
        original,
        replaced: !!saved?.url,
        src: original,
        fit: saved?.fit ?? 'cover', px: saved?.px ?? 50, py: saved?.py ?? 50, zoom: saved?.zoom ?? 100,
      };
      if (!saved?.url) return img;
      const blob = await (await fetch(saved.url)).blob();
      const mime = blob.type || 'image/jpeg';
      const ext = (mime.split('/')[1] || 'jpg').replace('jpeg', 'jpg').replace('+xml', '');
      img.src = `image_assets/replaced/spread-${pad3(si + 1)}-${img.page}-${slot}.${ext}`;
      img.mime = mime;
      files.push({ name: `nepal-book-data/${img.src}`, data: new Uint8Array(await blob.arrayBuffer()) });
      return img;
    }));

    out.push({
      index: si + 1,
      label,
      classes: classList(section),
      pages: pages.map((p) => ({ side: sideOf(p), classes: classList(p), text: textBlocks(p) })),
      text: pages.length ? [] : textBlocks(section),
      images,
      html: section.outerHTML,
    });
    onProgress?.(si + 1, spreads.length);
  }

  const book = {
    title: document.title,
    exportedAt: new Date().toISOString(),
    spreadSize: { width: DESIGN_W, height: DESIGN_H },
    pageSize: { width: DESIGN_W / 2, height: DESIGN_H },
    spreadCount: spreads.length,
    replacedImageCount: Object.values(savedImages).filter((e) => e.url).length,
  };
  files.unshift({
    name: 'nepal-book-data/nepal-book-data.json',
    data: new TextEncoder().encode(JSON.stringify({ book, spreads: out }, null, 2)),
  });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(makeZip(files));
  a.download = 'nepal-book-data.zip';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 60000);
}

#!/usr/bin/env node
/**
 * One-time converter: "Nepal Wildlife Book.html" → React components.
 *
 * Produces:
 *   client/src/styles/book.css         the book's main <style> block
 *   client/src/spreads/NNN-*.jsx       one component per <section class="spread">
 *   client/src/spreads/index.js        ordered list of { label, Component }
 *
 * Every <img> becomes <Img slot="sN">, numbered in document order exactly like
 * the old image-replacement script did, so image exports from the HTML version
 * (nepal-book-images*.json) import into the React app unchanged.
 *
 * Page numbers are stamped at conversion time using the same rules as the old
 * auto page-numbering script.
 *
 * Usage: node scripts/convert-html.mjs "Nepal Wildlife Book.html"
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(process.argv[2] || 'Nepal Wildlife Book.html');
const SPREADS_DIR = path.join(ROOT, 'client/src/spreads');
const STYLES_DIR = path.join(ROOT, 'client/src/styles');

const html = fs.readFileSync(SRC, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
const { document } = parseHTML(html);

/* ── 1. Main stylesheet ─────────────────────────────────────────────── */
const mainStyle = document.querySelector('head style');
let css = mainStyle.textContent
  // deck-stage is replaced by the React <Deck>; its styling lives in app.css
  .replace(/^\s*deck-stage\{[^}]*\}\s*$/m, '')
  // mojibake'd box-drawing characters in one comment
  .replace(/\/\*\s*â[^*]*Replaced image-slot CSS[^*]*\*\//, '/* Replaced image-slot CSS */')
  .replace(/^\n+/, '')
  .replace(/^ {2}/gm, '');
fs.mkdirSync(STYLES_DIR, { recursive: true });
fs.writeFileSync(path.join(STYLES_DIR, 'book.css'),
  '/* Book styles — extracted from "Nepal Wildlife Book.html" by scripts/convert-html.mjs */\n\n' + css.trimEnd() + '\n');

/* ── 2. Page numbering (port of the original inline script) ─────────── */
const spreads = [...document.querySelectorAll('section.spread')];
{
  const IMG_SELECTORS = '.fig,.overlay-cap,.gfig,.gmosaic,.gtri,.ggrid,.gfeat,.gstack,.gv4,.mo-photo-col,.bio-hero,.bkc-photo';
  const FRONT_MATTER = /^0[0124]/;
  const isImg = (el) => el.classList.contains('dark') || !!el.querySelector(IMG_SELECTORS);
  const stamp = (container, side, num, imgStyle) => {
    let pn = container.querySelector('.pagenum.' + side);
    if (!pn) {
      pn = document.createElement('div');
      pn.className = 'pagenum ' + side;
      container.appendChild(pn);
    }
    pn.textContent = String(num);
    pn.classList.toggle('img-pn', imgStyle);
  };
  let page = 1;
  for (const spread of spreads) {
    if (FRONT_MATTER.test(spread.getAttribute('data-screen-label') || '')) continue;
    const L = spread.querySelector('.page.left, .page.l');
    const R = spread.querySelector('.page.right, .page.r');
    if (L || R) {
      if (L) stamp(L, 'l', page++, isImg(L));
      if (R) stamp(R, 'r', page++, isImg(R));
    } else {
      spread.style.position = 'relative';
      stamp(spread, 'l', page++, true);
      stamp(spread, 'r', page++, true);
    }
  }
}

/* ── 3. HTML → JSX ──────────────────────────────────────────────────── */
const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'wbr']);
const INLINE = new Set(['span', 'em', 'strong', 'b', 'i', 'small', 'a', 'br', 'sup', 'sub', 'u', 'mark', 'abbr', 'code']);
const ATTR_RENAME = { class: 'className', for: 'htmlFor', crossorigin: 'crossOrigin', tabindex: 'tabIndex', colspan: 'colSpan', rowspan: 'rowSpan', srcset: 'srcSet' };
const TEXT = 3, COMMENT = 8, ELEMENT = 1;

let slotCounter = 0;

const escText = (s) => s
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/\{/g, '&#123;').replace(/\}/g, '&#125;').replace(/ /g, '&nbsp;');
const escAttr = (s) => s
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/ /g, '&nbsp;');
const jsxComment = (s) => `{/* ${s.trim().replace(/\*\//g, '* /')} */}`;

function splitDeclarations(style) {
  const out = []; let depth = 0, quote = null, cur = '';
  for (const ch of style) {
    if (quote) { if (ch === quote) quote = null; }
    else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(') depth++;
    else if (ch === ')') depth--;
    else if (ch === ';' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out.map((d) => d.trim()).filter(Boolean);
}

function styleToJsx(style) {
  const props = splitDeclarations(style).map((decl) => {
    const i = decl.indexOf(':');
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim().replace(/\s+/g, ' ');
    let key;
    if (prop.startsWith('--')) key = JSON.stringify(prop);
    else {
      key = prop.toLowerCase().replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    return `${key}: ${JSON.stringify(value)}`;
  });
  return `{{ ${props.join(', ')} }}`;
}

function attrsToJsx(el) {
  const parts = [];
  for (const { name, value } of [...el.attributes]) {
    if (name === 'style') { parts.push(`style=${styleToJsx(value)}`); continue; }
    let v = value;
    if (name === 'src' && el.tagName.toLowerCase() === 'img' && !/^(\/|https?:|data:)/.test(v)) v = '/' + v;
    parts.push(`${ATTR_RENAME[name] || name}="${escAttr(v)}"`);
  }
  return parts;
}

function openTag(el) {
  let tag = el.tagName.toLowerCase();
  const attrs = attrsToJsx(el);
  if (tag === 'img') { tag = 'Img'; attrs.unshift(`slot="s${slotCounter++}"`); }
  return { tag, attrs: attrs.length ? ' ' + attrs.join(' ') : '' };
}

const isBlank = (n) => n.nodeType === TEXT && !n.textContent.trim();

function isMixed(el) {
  return [...el.childNodes].some((n) =>
    (n.nodeType === TEXT && n.textContent.trim()) ||
    (n.nodeType === ELEMENT && INLINE.has(n.tagName.toLowerCase())));
}

/** Wrap a text node between words only, so JSX whitespace rules keep the spacing intact. */
function wrapText(text, indent) {
  const collapsed = text.replace(/\s+/g, ' ');
  if (collapsed.length <= 100) return escText(collapsed);
  const lead = collapsed.startsWith(' ') ? ' ' : '';
  const trail = collapsed.endsWith(' ') && collapsed.trim() ? ' ' : '';
  const words = collapsed.trim().split(' ');
  const lines = []; let line = '';
  for (const w of words) {
    if (line && line.length + w.length + 1 > 90) { lines.push(line); line = w; }
    else line = line ? line + ' ' + w : w;
  }
  lines.push(line);
  return lead + lines.map(escText).join('\n' + indent) + trail;
}

/** Inline rendering: everything stays adjacent so spaces between inline nodes survive. */
function renderInline(node, indent) {
  if (node.nodeType === TEXT) return wrapText(node.textContent, indent);
  if (node.nodeType === COMMENT) return jsxComment(node.textContent);
  if (node.nodeType !== ELEMENT) return '';
  const { tag, attrs } = openTag(node);
  if (VOID.has(node.tagName.toLowerCase()) || !node.childNodes.length) return `<${tag}${attrs} />`;
  return `<${tag}${attrs}>${[...node.childNodes].map((c) => renderInline(c, indent)).join('')}</${tag}>`;
}

function render(node, indent) {
  if (node.nodeType === COMMENT) return indent + jsxComment(node.textContent);
  const children = [...node.childNodes];
  if (isMixed(node)) return indent + renderInline(node, indent + '  ');
  const { tag, attrs } = openTag(node);
  const kids = children.filter((c) => !isBlank(c));
  if (VOID.has(node.tagName.toLowerCase()) || !kids.length) return `${indent}<${tag}${attrs} />`;
  return `${indent}<${tag}${attrs}>\n${kids.map((c) => render(c, indent + '  ')).join('\n')}\n${indent}</${tag}>`;
}

/* ── 4. Emit one component per spread ───────────────────────────────── */
function pascal(label) {
  return label.replace(/^\d+\s+/, '').replace(/&/g, ' and ').replace(/[^A-Za-z0-9 ]+/g, ' ').trim().split(/\s+/)
    .slice(0, 5).map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');
}
function slug(label) {
  return label.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
}
/** The banner comments that precede each section in the source. */
function leadingComments(section) {
  const out = []; let n = section.previousSibling;
  while (n && (n.nodeType === COMMENT || isBlank(n))) {
    if (n.nodeType === COMMENT) {
      const t = n.textContent.replace(/[=\s]+$/, '').replace(/^[=\s]+/, '').trim();
      if (t) out.unshift(t);
    }
    n = n.previousSibling;
  }
  return out;
}

fs.rmSync(SPREADS_DIR, { recursive: true, force: true });
fs.mkdirSync(SPREADS_DIR, { recursive: true });

const index = [];
spreads.forEach((section, i) => {
  const label = section.getAttribute('data-screen-label') || `Spread ${i + 1}`;
  const num = String(i + 1).padStart(3, '0');
  const name = `Spread${num}${pascal(label)}`;
  const file = `${num}-${slug(label)}.jsx`;
  const startSlot = slotCounter;
  const body = render(section, '    ');
  const usesImg = slotCounter > startSlot;
  const notes = leadingComments(section);
  const src =
    (usesImg ? `import Img from '../images/Img.jsx';\n\n` : '') +
    (notes.length ? `/* ${notes.join(' — ').replace(/\*\//g, '* /')} */\n` : '') +
    `export default function ${name}() {\n  return (\n${body}\n  );\n}\n`;
  fs.writeFileSync(path.join(SPREADS_DIR, file), src);
  index.push({ name, file, label });
});

fs.writeFileSync(path.join(SPREADS_DIR, 'index.js'),
  '// Spread order for the book. Generated by scripts/convert-html.mjs — reorder or add entries here.\n' +
  index.map((s) => `import ${s.name} from './${s.file}';`).join('\n') +
  '\n\nexport default [\n' +
  index.map((s) => `  { label: ${JSON.stringify(s.label)}, Component: ${s.name} },`).join('\n') +
  '\n];\n');

console.log(`Converted ${spreads.length} spreads, ${slotCounter} image slots → ${path.relative(ROOT, SPREADS_DIR)}`);

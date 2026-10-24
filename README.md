# Addressing Nepal's Wildlife Dilemma — React + Node.js

The coffee table book from `Nepal Wildlife Book.html`, rebuilt as a React app
(Vite) with an Express server and MongoDB.

```
client/            React app
  src/spreads/     one component per spread (NNN-label.jsx) + index.js (order)
  src/deck/        Deck viewer — replaces deck-stage.js
  src/images/      <Img> + image editor — replaces the IndexedDB image script
  src/styles/      book.css (the book's design) + app.css (viewer chrome, print)
server/            Express API: replaced images, import/export, skipped spreads
scripts/           convert-html.mjs — the one-time HTML → JSX converter
assets/            original photos/ and image_assets/ (served at /photos, /image_assets)
```

## Run

Needs MongoDB running locally (the Windows "MongoDB" service).

```bash
npm install
npm run dev        # server :4000 + Vite :5173 → open http://localhost:5173
```

Production: `npm run build && npm start` → http://localhost:4000.

Environment: `PORT`, `ASSETS_DIR` (default `assets`),
`MONGODB_URI` (default `mongodb://127.0.0.1:27017`), `MONGODB_DB` (default `nepal_book`).

## Database

| Collection     | Holds                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| `images`       | one document per changed slot: `{ _id: "s12", fileId, mime, fit, px, py, zoom, updatedAt }` |
| `imageFiles.*` | GridFS bucket with the replacement image bytes                         |
| `deck`         | `{ _id: "settings", skipped: [spread labels] }`                        |

Original photos stay on disk in `assets/`; only replacements live in the database.
Back up with `mongodump --db nepal_book`, or use the **↓ Data** button.

## Using the book

- **Navigate**: ←/→, PgUp/PgDn, Space, Home/End, `R` to restart, or the rail.
  The URL hash (`#30`) keeps your place.
- **Rail**: click a thumbnail to jump; right-click to skip/unskip a spread
  (skipped spreads are left out of navigation and print); drag the edge to resize.
- **Images**: click any photo to replace it, or adjust fit / zoom / position.
  Changes are saved in MongoDB, so every browser sees them. *Reset* restores
  the original.
- **↑ Import**: an image bundle (`.json`, merged in) or a book data `.zip`
  (replaces every image with the versions it contains).
- **↓ Export**: image bundle, same format as the HTML version's export.
- **↓ Data**: the whole book (text, layout, every image) as `nepal-book-data.zip`,
  same layout as the HTML version's.
- **PDF**: choose a spread range; prints each page as a 1152×1728 sheet.
  Ctrl+P prints whole spreads at 2304×1728.

## Importing from disk

Slot ids (`s0`…`s267`) match the HTML version, so its exports import as-is.
For big files, import from disk instead of uploading:

```bash
npm run import -- nepal-book-data                              # extracted ↓ Data folder
npm run import -- nepal-book-data.zip                          # ↓ Data zip
npm run import -- "../Book_design/nepal-book-images (3).json"  # image bundle
```

## Editing content

Edit the spread components in `client/src/spreads/` directly; reorder or add
spreads in `client/src/spreads/index.js`. New images: `<Img slot="s268" src="/image_assets/…" />`
with an unused slot id.

`npm run convert` regenerates every spread from `../Book_design/Nepal Wildlife Book.html`
— it **overwrites** `client/src/spreads/` and `client/src/styles/book.css`, so
only use it if you keep editing the HTML instead of the JSX. Page numbers are
stamped during conversion; if you reorder spreads, update the `pagenum` divs.

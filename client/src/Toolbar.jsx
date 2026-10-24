import { useRef, useState } from 'react';
import { api } from './api.js';
import { useImageStore } from './images/ImageStore.jsx';
import { exportBookData } from './bookData.js';

function parseRange(answer, total) {
  const trimmed = answer.trim();
  if (!trimmed) return { from: 0, to: total - 1 };
  const m = trimmed.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
  if (!m) throw new Error('Invalid range — use "1-20" or a single number like "5".');
  const from = Math.max(0, parseInt(m[1], 10) - 1);
  const to = m[2] ? Math.min(total - 1, parseInt(m[2], 10) - 1) : from;
  if (from > to) throw new Error('Start must be ≤ end.');
  return { from, to };
}

/** Bottom-right controls: import / export replaced images, whole-book data export, PDF. */
export default function Toolbar({ spreads, onPrint }) {
  const total = spreads.length;
  const { images, reload } = useImageStore();
  const fileInput = useRef(null);
  const [importing, setImporting] = useState(false);
  const [dataProgress, setDataProgress] = useState(null);

  async function handleData() {
    setDataProgress('');
    try {
      await exportBookData(spreads, images, (n, of) => setDataProgress(` ${n}/${of}`));
    } catch (err) {
      alert(`Data export failed: ${err.message}`);
    } finally {
      setDataProgress(null);
    }
  }

  async function handleImport(e) {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    const isDataZip = /\.zip$/i.test(file.name);
    if (isDataZip && !confirm('This book data ZIP replaces every image in the book with the versions it contains. Continue?')) return;
    setImporting(true);
    try {
      const { imported } = await api.importBundle(file);
      await reload();
      alert(imported ? `Done! ${imported} image slot(s) imported.` : 'No images found in file.');
    } catch (err) {
      alert(`Could not import the file.\n${err.message}`);
    } finally {
      setImporting(false);
    }
  }

  function handlePdf() {
    const answer = prompt(
      `PDF Export — ${total} spreads = ${total * 2} individual pages\n\n` +
      'Enter a spread range (e.g. "1-20"), or leave blank for all.\n' +
      'Tip: export 15–20 spreads at a time to keep files manageable.',
      '1-20',
    );
    if (answer === null) return;
    try {
      onPrint({ ...parseRange(answer, total), mode: 'pages' });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div id="book-img-toolbar">
      <span className="tb-label">Images</span>
      <input ref={fileInput} type="file" accept=".json,.ndjson,.zip" hidden onChange={handleImport} />
      <button disabled={importing} onClick={() => fileInput.current.click()}>
        {importing ? 'Importing…' : <>&#8593; Import</>}
      </button>
      <a className="tb-btn" href={api.exportUrl} download>&#8595; Export</a>
      <button disabled={dataProgress !== null} onClick={handleData} title="Export all text, layout and images (incl. replaced ones) as a ZIP: JSON + image files">
        {dataProgress !== null ? `Exporting…${dataProgress}` : <>&#8595; Data</>}
      </button>
      <button className="tb-pdf" onClick={handlePdf}>&#128438; PDF</button>
    </div>
  );
}

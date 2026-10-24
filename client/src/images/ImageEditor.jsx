import { useEffect, useRef, useState } from 'react';
import { useImageStore } from './ImageStore.jsx';
import { DEFAULT_FIT, directStyle } from './imageStyle.js';

const FITS = ['cover', 'contain', 'fill'];

function dropZoneSize(aspect) {
  const maxW = 436, maxH = 300;
  return aspect >= maxW / maxH
    ? { width: maxW, height: Math.round(maxW / aspect) }
    : { width: Math.round(maxH * aspect), height: maxH };
}

/** Modal for replacing an image or adjusting its fit, position and zoom. */
export default function ImageEditor() {
  const { editing, images, closeEditor, save, reset } = useImageStore();
  if (!editing) return null;
  // Keyed so every open starts from fresh state.
  return <EditorDialog key={editing.slot} editing={editing} saved={images[editing.slot]} onClose={closeEditor} save={save} reset={reset} />;
}

function EditorDialog({ editing, saved, onClose, save, reset }) {
  const { slot, src, aspect } = editing;
  const [fit, setFit] = useState(saved || DEFAULT_FIT);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(src || null);
  const [dragOver, setDragOver] = useState(false);
  const [busy, setBusy] = useState(false);
  const fileInput = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => () => { if (file) URL.revokeObjectURL(previewUrl); }, [file, previewUrl]);

  function pickFile(f) {
    if (!f || !f.type.startsWith('image/')) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  }

  async function run(action) {
    setBusy(true);
    try {
      await action();
      onClose();
    } catch (err) {
      alert(`Could not save image: ${err.message}`);
      setBusy(false);
    }
  }

  const title = file ? 'Replace Image' : previewUrl ? 'Adjust Image' : 'Place Image';
  const showPosition = fit.fit === 'cover' || fit.zoom > 100;
  const update = (patch) => setFit((f) => ({ ...f, ...patch }));

  return (
    <div id="book-img-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div id="book-img-popup" role="dialog" aria-modal="true" aria-label={title}>
        <div id="book-img-popup-title">{title} <span className="slot-id">{slot}</span></div>

        <div
          id="book-img-drop-zone"
          className={dragOver ? 'drag-over' : undefined}
          style={dropZoneSize(aspect)}
          onClick={() => fileInput.current.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); pickFile(e.dataTransfer.files[0]); }}
        >
          {previewUrl ? (
            // Same styling as the book's <Img>, so the preview matches the page exactly.
            <img id="book-img-preview" src={previewUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', ...directStyle(fit) }} />
          ) : (
            <div id="book-img-drop-hint">
              <span className="drop-icon">&#8682;</span>
              Drop an image here<br />or click to browse
            </div>
          )}
          <input ref={fileInput} type="file" accept="image/*" hidden onChange={(e) => pickFile(e.target.files[0])} />
        </div>

        <div id="book-img-fit-row">
          <span className="fit-lbl">Fit</span>
          <div id="book-fit-btns">
            {FITS.map((f) => (
              <button key={f} className={`fit-btn${fit.fit === f ? ' active' : ''}`} onClick={() => update({ fit: f })}>{f}</button>
            ))}
          </div>
        </div>

        <Slider label="Z" min={100} max={300} step={5} value={fit.zoom} format={(v) => `${(v / 100).toFixed(1)}×`} onChange={(zoom) => update({ zoom })} />
        {showPosition && (
          <div id="book-img-pos-row">
            <Slider label="X" min={0} max={100} value={fit.px} format={(v) => `${v}%`} onChange={(px) => update({ px })} />
            <Slider label="Y" min={0} max={100} value={fit.py} format={(v) => `${v}%`} onChange={(py) => update({ py })} />
          </div>
        )}

        <div id="book-img-popup-btns">
          {saved && (
            <button id="book-btn-reset" disabled={busy} onClick={() => run(() => reset(slot))}>Reset</button>
          )}
          <button id="book-btn-cancel" onClick={onClose}>Cancel</button>
          <button id="book-btn-apply" disabled={!previewUrl || busy} onClick={() => run(() => save(slot, { file, ...fit }))}>
            {busy ? 'Saving…' : 'Apply Image'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, min, max, step = 1, value, format, onChange }) {
  return (
    <div className="pos-row">
      <span className="pos-lbl">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <span className="pos-val">{format(value)}</span>
    </div>
  );
}

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Thumbnail from './Thumbnail.jsx';

export const DESIGN_W = 2304;
export const DESIGN_H = 1728;
const RAIL_KEY = 'deck-rail-w';
const RAIL_MIN = 120, RAIL_MAX = 420;

function readRailWidth() {
  try {
    const v = Number(localStorage.getItem(RAIL_KEY));
    if (v >= RAIL_MIN && v <= RAIL_MAX) return v;
  } catch { /* storage unavailable */ }
  return 188;
}

function indexFromHash(total) {
  const n = parseInt(location.hash.slice(1), 10);
  return n >= 1 && n <= total ? n - 1 : 0;
}

/**
 * The book viewer (React replacement for <deck-stage>).
 *
 * Spreads are stacked on a fixed 2304×1728 canvas scaled to the window. Only
 * the current spread, its neighbours and spreads already visited are mounted,
 * so the photography loads on demand; everything in range mounts for print.
 *
 * printJob: null | { from, to, mode: 'pages' | 'spreads' } — 0-based inclusive range.
 */
export default function Deck({ spreads, skipped, onToggleSkip, printJob, onPrintDone }) {
  const total = spreads.length;
  const [index, setIndex] = useState(() => indexFromHash(total));
  const [visited, setVisited] = useState(() => new Set());
  const [railW, setRailW] = useState(readRailWidth);
  const [viewport, setViewport] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [printAll, setPrintAll] = useState(false);
  const canvasRef = useRef(null);
  const railRef = useRef(null);

  const isSkipped = useCallback(
    (i) => skipped.has(spreads[i].label) || (printJob != null && (i < printJob.from || i > printJob.to)),
    [skipped, spreads, printJob],
  );

  /* ── Navigation ── */
  const goTo = useCallback((i) => setIndex(Math.max(0, Math.min(total - 1, i))), [total]);
  const step = useCallback((dir) => {
    setIndex((cur) => {
      for (let i = cur + dir; i >= 0 && i < total; i += dir) {
        if (!skipped.has(spreads[i].label)) return i;
      }
      return cur;
    });
  }, [total, skipped, spreads]);

  useEffect(() => {
    setVisited((v) => (v.has(index) ? v : new Set(v).add(index)));
    history.replaceState(null, '', `#${index + 1}`);
    railRef.current?.querySelector(`[data-thumb="${index}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  useEffect(() => {
    const onHash = () => setIndex(indexFromHash(total));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [total]);

  useEffect(() => {
    function onKey(e) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target.closest?.('input, textarea, select, [contenteditable]') || document.getElementById('book-img-overlay')) return;
      const actions = {
        ArrowRight: () => step(1), ArrowDown: () => step(1), PageDown: () => step(1),
        ArrowLeft: () => step(-1), ArrowUp: () => step(-1), PageUp: () => step(-1),
        ' ': () => step(e.shiftKey ? -1 : 1),
        Home: () => goTo(0), End: () => goTo(total - 1),
        r: () => goTo(0), R: () => goTo(0),
      };
      if (actions[e.key]) { e.preventDefault(); actions[e.key](); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, goTo, total]);

  /* ── Layout ── */
  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const showRail = viewport.w >= 720;
  const stageLeft = showRail ? railW : 0;
  const scale = Math.min((viewport.w - stageLeft) / DESIGN_W, viewport.h / DESIGN_H);

  function startRailResize(e) {
    e.preventDefault();
    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);
    target.dataset.dragging = '';
    let width = railW;
    const move = (ev) => { width = Math.max(RAIL_MIN, Math.min(RAIL_MAX, ev.clientX)); setRailW(width); };
    const up = () => {
      delete target.dataset.dragging;
      target.removeEventListener('pointermove', move);
      target.removeEventListener('pointerup', up);
      try { localStorage.setItem(RAIL_KEY, String(width)); } catch { /* storage unavailable */ }
    };
    target.addEventListener('pointermove', move);
    target.addEventListener('pointerup', up);
  }

  /* ── Idle-fading counter overlay ── */
  useEffect(() => {
    let timer = setTimeout(() => setOverlayVisible(false), 2500);
    const onMove = () => {
      setOverlayVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setOverlayVisible(false), 2500);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('mousemove', onMove); };
  }, []);

  /* ── Print ── */
  // Plain Ctrl+P: mount every spread synchronously before the browser paginates.
  useEffect(() => {
    const before = () => flushSync(() => setPrintAll(true));
    window.addEventListener('beforeprint', before);
    return () => window.removeEventListener('beforeprint', before);
  }, []);

  // PDF export: mount the range, wait for its photos, then open the print dialog.
  useLayoutEffect(() => {
    if (!printJob) return;
    document.body.classList.toggle('print-pages', printJob.mode === 'pages');
    const imgs = [...canvasRef.current.querySelectorAll('.deck-slide:not([data-deck-skip]) img')];
    imgs.forEach((img) => { img.loading = 'eager'; });
    const pending = imgs.filter((img) => !img.complete);
    let cancelled = false;

    const done = () => {
      document.body.classList.remove('print-pages');
      window.removeEventListener('afterprint', done);
      onPrintDone();
    };
    const print = () => {
      if (cancelled) return;
      window.addEventListener('afterprint', done);
      window.print();
    };
    Promise.race([
      Promise.all(pending.map((img) => new Promise((res) => {
        img.addEventListener('load', res, { once: true });
        img.addEventListener('error', res, { once: true });
      }))),
      new Promise((res) => setTimeout(res, 10000)),
    ]).then(print);

    return () => { cancelled = true; };
  }, [printJob, onPrintDone]);

  const lastVisible = useMemo(() => {
    for (let i = total - 1; i >= 0; i--) if (!isSkipped(i)) return i;
    return -1;
  }, [total, isSkipped]);

  const shouldMount = (i) =>
    printAll || Math.abs(i - index) <= 1 || visited.has(i) ||
    (printJob != null && i >= printJob.from && i <= printJob.to);

  const pageSize = printJob?.mode === 'pages' ? `${DESIGN_W / 2}px ${DESIGN_H}px` : `${DESIGN_W}px ${DESIGN_H}px`;

  return (
    <div className="deck" style={{ '--deck-rail-w': `${railW}px`, '--deck-design-w': `${DESIGN_W}px`, '--deck-design-h': `${DESIGN_H}px` }}>
      <style>{`@page { size: ${pageSize}; margin: 0; }`}</style>

      {showRail && (
        <>
          <nav className="deck-rail" ref={railRef} aria-label="Spreads">
            {spreads.map((s, i) => (
              <Thumbnail
                key={s.label}
                index={i}
                spread={s}
                railRef={railRef}
                width={railW - 50}
                current={i === index}
                skipped={skipped.has(s.label)}
                onSelect={() => goTo(i)}
                onToggleSkip={() => onToggleSkip(s.label)}
              />
            ))}
          </nav>
          <div className="deck-rail-resize" onPointerDown={startRailResize} />
        </>
      )}

      <div className="deck-stage" style={{ left: stageLeft }}>
        <div
          className="deck-canvas"
          ref={canvasRef}
          style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})` }}
        >
          {spreads.map(({ label, Component }, i) => (
            <div
              key={label}
              className="deck-slide"
              data-deck-active={i === index ? '' : undefined}
              data-deck-skip={isSkipped(i) ? '' : undefined}
              data-deck-last-visible={i === lastVisible ? '' : undefined}
            >
              {shouldMount(i) && <Component />}
            </div>
          ))}
        </div>
      </div>

      <div className="deck-overlay" data-visible={overlayVisible ? '' : undefined}>
        <button className="deck-btn" onClick={() => step(-1)} aria-label="Previous spread">
          <svg viewBox="0 0 16 16"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
        </button>
        <span className="deck-count">{index + 1}<span className="sep">/</span><span className="total">{total}</span></span>
        <button className="deck-btn" onClick={() => step(1)} aria-label="Next spread">
          <svg viewBox="0 0 16 16"><path d="m6 3 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
        </button>
        <span className="deck-divider" />
        <button className="deck-btn reset" onClick={() => goTo(0)}>Reset <span className="kbd">R</span></button>
      </div>
    </div>
  );
}

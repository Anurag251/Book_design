import { useEffect, useRef, useState } from 'react';

const DESIGN_W = 2304, DESIGN_H = 1728;

/**
 * A live, scaled-down render of a spread in the rail. Mounted only once it
 * scrolls near view. Click to navigate; right-click to skip / unskip.
 */
export default function Thumbnail({ index, spread, railRef, width, current, skipped, onSelect, onToggleSkip }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { Component, label } = spread;
  const scale = width / DESIGN_W;

  useEffect(() => {
    if (visible) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { root: railRef.current, rootMargin: '400px 0px' },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [visible, railRef]);

  return (
    <button
      ref={ref}
      className="deck-thumb"
      data-thumb={index}
      data-current={current ? '' : undefined}
      data-skip={skipped ? '' : undefined}
      title={`${label}${skipped ? ' (skipped)' : ''} — right-click to ${skipped ? 'unskip' : 'skip'}`}
      onClick={onSelect}
      onContextMenu={(e) => { e.preventDefault(); onToggleSkip(); }}
    >
      <span className="num">{index + 1}</span>
      <span className="frame" style={{ width, height: DESIGN_H * scale }}>
        {visible && (
          <span className="thumb-canvas" style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})` }} inert="">
            <Component />
          </span>
        )}
      </span>
    </button>
  );
}

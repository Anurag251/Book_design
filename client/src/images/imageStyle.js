/*
 * Fit / position / zoom → inline styles. Ported from the HTML version's
 * image-replacement script so saved settings render identically.
 */

export const DEFAULT_FIT = { fit: 'cover', px: 50, py: 50, zoom: 100 };

/**
 * For an <img> in the book's own layout (grids, figures…) and the editor preview.
 * Zoom uses a transform + compensating clip-path so the layout box never
 * changes and grids keep their shape.
 */
export function directStyle({ fit, px, py, zoom } = DEFAULT_FIT) {
  const s = zoom / 100;
  if (s <= 1) {
    return { objectFit: fit, objectPosition: `${px}% ${py}%` };
  }
  // The local point that lands on the parent's edge after scale(s) around
  // (px%, py%) is px × (1 − 1/s); clip there so the result fills the box exactly.
  const f = 1 - 1 / s;
  return {
    objectFit: 'cover',
    objectPosition: `${px}% ${py}%`,
    transformOrigin: `${px}% ${py}%`,
    transform: `scale(${s})`,
    clipPath: `inset(${(py * f).toFixed(3)}% ${((100 - px) * f).toFixed(3)}% ${((100 - py) * f).toFixed(3)}% ${(px * f).toFixed(3)}%)`,
  };
}

import { useImageStore } from './ImageStore.jsx';
import { directStyle } from './imageStyle.js';

/**
 * A replaceable book image. `slot` is its persistence key; clicking opens the
 * image editor. Saved replacements and fit/position/zoom come from the server.
 */
const NO_STORE = { images: {}, openEditor: () => {} };

export default function Img({ slot, src, className, style, ...rest }) {
  // Outside the provider (e.g. static rendering for the data export) show the original image.
  const { images, openEditor } = useImageStore() || NO_STORE;
  const saved = images[slot];
  const currentSrc = saved?.url || src;

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    openEditor({ slot, src: currentSrc, aspect: rect.width > 0 && rect.height > 0 ? rect.width / rect.height : 4 / 3 });
  }

  return (
    <img
      {...rest}
      src={currentSrc}
      data-bslot={slot}
      className={className ? `${className} book-img-hoverable` : 'book-img-hoverable'}
      style={saved ? { ...style, ...directStyle(saved) } : style}
      onClick={handleClick}
    />
  );
}

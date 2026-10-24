import { useCallback, useEffect, useState } from 'react';
import Deck from './deck/Deck.jsx';
import Toolbar from './Toolbar.jsx';
import ImageEditor from './images/ImageEditor.jsx';
import { ImageStoreProvider } from './images/ImageStore.jsx';
import { api } from './api.js';
import spreads from './spreads/index.js';

export default function App() {
  const [skipped, setSkipped] = useState(() => new Set());
  const [printJob, setPrintJob] = useState(null);

  useEffect(() => {
    api.getDeck()
      .then((deck) => setSkipped(new Set(deck.skipped)))
      .catch((err) => console.error('Could not load deck settings:', err));
  }, []);

  const toggleSkip = useCallback((label) => {
    const next = !skipped.has(label);
    setSkipped((prev) => {
      const s = new Set(prev);
      if (next) s.add(label); else s.delete(label);
      return s;
    });
    api.setSkipped(label, next).catch((err) => console.error('Could not save skip:', err));
  }, [skipped]);

  const endPrint = useCallback(() => setPrintJob(null), []);

  return (
    <ImageStoreProvider>
      <Deck spreads={spreads} skipped={skipped} onToggleSkip={toggleSkip} printJob={printJob} onPrintDone={endPrint} />
      <Toolbar spreads={spreads} onPrint={setPrintJob} />
      <ImageEditor />
    </ImageStoreProvider>
  );
}

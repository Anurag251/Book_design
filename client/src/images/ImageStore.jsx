import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../api.js';

/*
 * Replaced images, loaded from the server: { [slot]: { url, fit, px, py, zoom } }.
 * `url` is null when only the fit/position of the original photo was adjusted.
 * Also tracks which slot the editor is open on.
 */
const ImageStoreContext = createContext(null);

export function ImageStoreProvider({ children }) {
  const [images, setImages] = useState({});
  const [editing, setEditing] = useState(null); // { slot, src, aspect }

  const reload = useCallback(() => api.listImages().then(setImages), []);

  useEffect(() => {
    reload().catch((err) => console.error('Could not load saved images:', err));
  }, [reload]);

  const save = useCallback(async (slot, data) => {
    const entry = await api.saveImage(slot, data);
    setImages((prev) => ({ ...prev, [slot]: entry }));
  }, []);

  const reset = useCallback(async (slot) => {
    await api.resetImage(slot);
    setImages(({ [slot]: _removed, ...rest }) => rest);
  }, []);

  const value = useMemo(
    () => ({ images, editing, openEditor: setEditing, closeEditor: () => setEditing(null), save, reset, reload }),
    [images, editing, save, reset, reload],
  );
  return <ImageStoreContext.Provider value={value}>{children}</ImageStoreContext.Provider>;
}

export function useImageStore() {
  return useContext(ImageStoreContext);
}

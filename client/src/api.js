async function request(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    let message = `${res.status} ${res.statusText}`;
    try { message = (await res.json()).error || message; } catch { /* not JSON */ }
    throw new Error(message);
  }
  return res.status === 204 ? null : res.json();
}

export const api = {
  listImages: () => request('/api/images'),

  saveImage(slot, { file, fit, px, py, zoom }) {
    const body = new FormData();
    if (file) body.append('file', file);
    body.append('fit', fit);
    body.append('px', px);
    body.append('py', py);
    body.append('zoom', zoom);
    return request(`/api/images/${slot}`, { method: 'PUT', body });
  },

  resetImage: (slot) => request(`/api/images/${slot}`, { method: 'DELETE' }),

  importBundle(file) {
    const body = new FormData();
    body.append('file', file);
    return request('/api/images/import', { method: 'POST', body });
  },

  exportUrl: '/api/images/export',

  getDeck: () => request('/api/deck'),

  setSkipped: (label, skipped) => request('/api/deck/skip', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ label, skipped }),
  }),
};

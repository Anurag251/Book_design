import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const server = 'http://localhost:4000';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': server,
      '/photos': server,
      '/image_assets': server,
    },
  },
});

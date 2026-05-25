import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths so the build works on any host (subfolders, static hosts, etc.)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
    // Inline anything under 4kb so we have fewer tiny requests
    assetsInlineLimit: 4096,
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
});

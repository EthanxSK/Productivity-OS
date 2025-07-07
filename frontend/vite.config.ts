import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // ✅ only if needed
  },
  build: {
    outDir: 'dist', // ✅ required for Vercel
  },
  server: {
    port: 5173,
    open: true,
  },
});

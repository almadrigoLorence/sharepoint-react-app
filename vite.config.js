import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteSingleFile() // Bundles all JS and CSS directly inline in index.html
  ],
  build: {
    // Disable asset size limit checks since we are deliberately inlining everything
    assetsInlineLimit: 100000000, 
    chunkSizeWarningLimit: 10000000,
    rollupOptions: {
      output: {
        // Ensure index.html doesn't contain reference links to script chunks
        manualChunks: undefined
      }
    }
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Data chunks — lazy-loaded sentence datasets
          if (id.includes('data/sentences') && !id.includes('classical') && !id.includes('sentenceLoader')) {
            return 'data-modern';
          }
          if (id.includes('data/classicalSentences')) {
            return 'data-classical';
          }
          // Vendor chunks — cached separately, change infrequently
          if (id.includes('node_modules/@xyflow') || id.includes('node_modules\\\\@xyflow')) {
            return 'vendor-xyflow';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules\\\\framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/react-dom') || id.includes('node_modules\\\\react-dom')) {
            return 'vendor-react';
          }
        },
      },
    },
  },
})

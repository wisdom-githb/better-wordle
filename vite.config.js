import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),vitePrerenderPlugin({
      renderTarget: '#root',
      additionalPrerenderRoutes: ['/', '/game', '/leaderboard', '/faq', '/profile'],
    }),],
  base: '/better-wordle/',
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    // Increase the limit at which Vite shows "chunk too large" warnings (in kB).
    // This only affects warnings, not the actual bundle or runtime behavior.
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Put large libraries into a separate "vendor" chunk so that your app code
        // and third‑party code are split. This does not change your React code;
        // it only affects how the final JS files are grouped.
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        },
        assetFileNames: (assetInfo) => {
          return assetInfo.name || 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})

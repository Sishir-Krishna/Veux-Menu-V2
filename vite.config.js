import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import photoManifest from './plugins/photo-manifest.js'

export default defineConfig({
  plugins: [react(), photoManifest()],
  build: {
    // Keep the bundle small and cacheable for Indian 4G/5G.
    target: 'es2020',
    assetsInlineLimit: 2048,
  },
})

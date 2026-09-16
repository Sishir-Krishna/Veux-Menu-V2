import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the bundle small and cacheable for Indian 4G/5G.
    target: 'es2020',
    assetsInlineLimit: 2048,
  },
})

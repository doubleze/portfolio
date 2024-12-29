// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // This matches your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
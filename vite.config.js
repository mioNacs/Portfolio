import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Base path for GitHub Pages
  css: {
    postcss: './postcss.config.js',
  },
})

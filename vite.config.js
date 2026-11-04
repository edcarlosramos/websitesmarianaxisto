import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site from /websitesmarianaxisto/, so built asset URLs need that prefix.
  base: command === 'build' ? '/websitesmarianaxisto/' : '/',
  build: {
    rollupOptions: {
      // 404.html: GitHub Pages serves it for any address that doesn't exist.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
      },
    },
  },
}))

import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Served from the domain root (marianaxisto.com.br on Hostinger).
  base: '/',
  build: {
    rollupOptions: {
      // 404.html: Hostinger serves it for any address that doesn't exist (see public/.htaccess).
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        notFound: fileURLToPath(new URL('./404.html', import.meta.url)),
        // Sales page for the 14-day challenge, served at /desafio14d/.
        desafio: fileURLToPath(new URL('./desafio14d/index.html', import.meta.url)),
      },
    },
  },
})

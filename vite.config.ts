import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/', // GitHub Pages + use http://localhost:5173/portfolio/ locally
  plugins: [react(), tailwindcss()],
})

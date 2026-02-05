import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/portfolio/', // required for GitHub Pages: https://tariq-sekhri.github.io/portfolio/
  plugins: [react(), tailwindcss()],
})

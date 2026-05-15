import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// NOTE: Set `base` to your GitHub repo name when deploying to GitHub Pages
// e.g. base: '/OjalaTechSolutions/'
export default defineConfig({
  plugins: [react()],
  base: '/OjalaTechSolutions/',
})

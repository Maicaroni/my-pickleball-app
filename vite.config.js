// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-pickleball-app/', // for local dev. change to '/my-pickleball-app/' when deploying
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000', // ✅ PROXY to backend
    },
  },
})

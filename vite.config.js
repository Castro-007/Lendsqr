import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    allowedHosts: ['https://lendsqr-1ovd.onrender.com'],
    port: process.env.PORT || 5173,
  },
})

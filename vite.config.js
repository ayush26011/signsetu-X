import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/video': 'http://127.0.0.1:5001',
      '/sentence': 'http://127.0.0.1:5001',
      '/clear': 'http://127.0.0.1:5001',
      '/predict': 'http://127.0.0.1:5001'
    }
  }
})
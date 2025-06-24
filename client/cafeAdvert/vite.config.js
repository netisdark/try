import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/advert/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: process.env.ADVERT_PORT       
  }
})

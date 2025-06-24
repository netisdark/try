import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/frontdesk/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.FRONTDESK_PORT
  }
});

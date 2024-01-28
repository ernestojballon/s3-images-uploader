import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  getConfig  from './config';
console.log({
 env: process.env.ENVIRONMENT
})

const server = getConfig().server;
const proxyTarget = `http://${server}:8080/`;
console.log({
  server,
  proxyTarget
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': proxyTarget,
    }
  }
})

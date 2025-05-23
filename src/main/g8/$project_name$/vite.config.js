import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { AppConfig } from './src/config/AppConfig.js'
// https://vitejs.dev/config/
const testDeps =
  process.env.NODE_ENV === 'test'
    ? [
      '@testing-library/react',
      '@testing-library/user-event',
      'chai',
      '@johanblumenberg/ts-mockito'
    ]
    : []
export default defineConfig({
  server: {
    port: 9000
  },
  base: `./`,
  optimizeDeps: {
    include: testDeps
  },
  build: {
    outDir: AppConfig.applicationName,
    sourcemap: 'inline',
    rollupOptions: {
      input: ['./index.html']
    }
  },
  plugins: [react()]
})

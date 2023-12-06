/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig, type CommonServerOptions } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

const commonOptions: CommonServerOptions = { open: true, host: true }

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: 'ESNext' },
  plugins: [react(), tsconfigPaths(), VitePWA({})],
  server: { ...commonOptions, port: 5_174 },
  preview: { ...commonOptions, port: 5_175 },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    reporters: 'verbose',
    silent: true,
    resolveSnapshotPath(path, extension) {
      return path.replace(/\.test\.([tj]sx?)/, `.test.$1${extension}`)
    },
  },
})

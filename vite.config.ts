/// <reference types="vite/client" />

import { defineConfig, type CommonServerOptions } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

const commonOptions: CommonServerOptions = { open: true, host: true }

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: 'ESNext' },
  plugins: [react(), tsconfigPaths()],
  server: { ...commonOptions, port: 5_174 },
  preview: { ...commonOptions, port: 5_175 },
})

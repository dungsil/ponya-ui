import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
  },
  resolve: {
    alias: {
      'ponya-ui': resolve(__dirname, 'src/')
    }
  },
  optimizeDeps: {
    entries: []
  }
})

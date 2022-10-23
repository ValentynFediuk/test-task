import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
const pathSrc = path.resolve(__dirname, "./src")

export default defineConfig({
  base: '',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
            `
              @import "${pathSrc}/scss/variables";
              @import "${pathSrc}/scss/mixins";
            `
      },
    },
  },
})
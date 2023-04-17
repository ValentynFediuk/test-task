import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pathSrc = path.resolve(__dirname, './src')

export default defineConfig({
  base: '',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "${pathSrc}/scss/variables";
              @import "${pathSrc}/scss/mixins";
            `,
      },
    },
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components/index'),
      hooks: path.resolve(__dirname, './src/hooks/index'),
      store: path.resolve(__dirname, './src/store/index'),
      http: path.resolve(__dirname, './src/http/index'),
    },
  },
})

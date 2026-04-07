import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
      '@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/global/variables.scss" as *;
          @use "@/assets/styles/global/mixins.scss" as *;
        `
      }
    }
  }
})

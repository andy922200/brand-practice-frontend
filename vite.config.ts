import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/brand-practice-frontend/' : '/',
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  server: {
    port: 5174,
    proxy: {
      '/admin/api': {
        target: 'http://127.0.0.1:8080', // 后端服务
        changeOrigin: true, // 修改请求头 Origin
        rewrite: (path) => path.replace(/^\/admin\/api/, '/admin/api'),
        // 可选：路径重写
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

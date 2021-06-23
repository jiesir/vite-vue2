import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import { createProxy } from './src/utils/proxy';
import { appInject } from './plugins/app-inject';
import { mock } from './plugins/mock-server';
import { routerInject } from './plugins/router-inject';


export default defineConfig({
  base: './',
  server: {
    host: 'localhost',
    port: 8888,
    open: '/',
    proxy: createProxy(process.env.SERVER_PROXY)
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/utils/var.less";@import 'vant/lib/index.css';`
      }
    }
  },
  plugins: [createVuePlugin(), appInject(), mock(), routerInject()]
})

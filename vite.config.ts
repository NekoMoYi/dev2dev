import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import datasetPlugin from './plugins/dataset'

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    datasetPlugin()
    //
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

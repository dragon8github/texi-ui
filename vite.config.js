import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue({
    include:[/\.md$/,/\.vue$/],
  }),Markdown(),vueJsx()],
  build:{
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    },
    lib:{
      entry:'./packages/index.js',
      name:'texi-ui'
    }
  },
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@use "./src/assets/styles/style.scss" as *;'
      }
    }
  }
})

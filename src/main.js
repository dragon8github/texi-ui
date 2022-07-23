import { createApp } from 'vue'
import App from './App.vue'
import TUI from '../packages/index'

import router from './router/index'

import hljs from 'highlight.js'
import 'highlight.js/styles/color-brewer.css'

import './assets/icons/icon.scss'


const app=createApp(App);
app.use(router);
app.use(TUI);
app.mount('#app');
app.directive('highlight',function(el){
    const blocks=el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})

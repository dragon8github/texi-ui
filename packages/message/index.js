import { createVNode,nextTick,render } from "vue";
import tMessage from './index.vue'

const div=document.createElement('div')
div.setAttribute('class','t-message-container')
document.body.appendChild(div)

let timer=null
export default({type,text,location,timeout,icon,textColor,bgColor})=>{
    const vnode=createVNode(tMessage,{type,text,location,icon,textColor,bgColor})
    render(null,div)
    nextTick(()=>{
        render(vnode,div)
    })

    clearTimeout(timer)
    timer=setTimeout(()=>{
        render(null,div)
    },timeout || 2000)
}
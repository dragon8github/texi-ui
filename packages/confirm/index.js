import { createVNode,render } from 'vue'
import tConfirm from './index.vue'

const div=document.createElement('div')
div.setAttribute('class','t-confirm-container')
document.body.appendChild(div)

export default({title,text,icon,cancelText,submitText,submitShow,cancelShow,closeShow})=>{
    return new Promise((resolve,rejecct)=>{
        const cancelCallback=()=>{
            render(null,div)
            rejecct(new Error('点击取消'))
        }
        const submitCallback=()=>{
            render(null,div)
            resolve()
        }

        const vnode=createVNode(tConfirm,{title,text,cancelCallback,submitCallback,icon,cancelText,submitText,submitShow,cancelShow,closeShow})
        render(vnode,div)
    })
}

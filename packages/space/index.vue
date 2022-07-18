<template>
  <div><slot/></div>
</template>

<script>
import { computed, h, ref, useSlots } from 'vue'
export default {
  name:'tSpace',
  props:{
    inline:{
      type:Boolean,
      default:true
    },
    size:{
      type:Array,
      default:[10,20]
    }
  },
  setup(props) {
    const $slots=useSlots()
    const slotList=ref([])
    const tStyle=computed(()=>{
      return {
        display:props.inline?'inline-flex':'flex',
        gap:!props.inline?`${props.size[0]}px`:`${props.size[0]}px ${props.size[1]}px`,
        'flex-direction':props.inline?'inherit':'column',
        'flex-wrap':'wrap',
        width:'fit-content'
      }
    })
    $slots.default().forEach(item=>{
      slotList.value.push(
        h('div',{className:'t-space-item',style:'width:fit-content'},item)
      )
    })
    return ()=>[
      h('div',{className:'t-space',style:tStyle.value},slotList.value)
    ]
  }
}
</script>

<style lang="scss" scoped>
  
</style>
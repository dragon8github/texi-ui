<template>
  <div class="t-form" :class="{'isInline':inline}">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, provide, defineProps } from 'vue'
export default {
  name:'tForm', 
}
</script>
<script setup>
  const props=defineProps({
    model:{
      type:Object,
      required:true
    },
    labelWidth:{
      type:String,
      default:'80px'
    },
    inline:{
      type:Boolean,
      dafault:false
    },
    labelTextAlign:{
      type:String,
      default:'right'
    }
  })
  //获取当前组件实例，就是vue2中的this
  const {proxy}=getCurrentInstance()
  provide('Form',proxy)
</script>
<style lang="scss" scoped>
  .isInline{
    display: flex;
    width: auto;
  }
</style>



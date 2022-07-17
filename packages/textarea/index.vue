<template>
  <div :class="tClass">
    <textarea name="" id="" :cols="cols" :rows="rows"
     :value="modelValue" @input="input"
     :disabled='disabled'
     :readonly='readonly'
     @focus="focus"
     @blur="blur"
     :maxlength="maxlength"
     :style='tStyle'
     :placeholder="placeholder"></textarea>
     <div v-show="maxlength" class="max-length-inline">
      {{n}}/{{maxlength}}
     </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
export default {
  name:'tTextarea'
}
</script>
<script setup>
const emit=defineEmits(['update:modelValue','focus','blur'])
const props=defineProps({
  modelValue:String,
  cols:{
    type:Number,
    default:50
  },
  rows:{
    type:Number,
    default:4
  },
  disabled:Boolean,
  readonly:Boolean,
  maxlength:Number,
  resize:{
    type:Boolean,
    default:true
  },
  placeholder:{
    type:String,
    default:'请输入'
  }
})
const n=ref(0)
const input=(e)=>{
  n.value=e.target.value.length
  if(n.value>props.maxlength){
    n.value=props.maxlength
  }
  emit('update:modelValue',e.target.value)
}
const tClass=computed(()=>{
  return['t-textarea',props.disabled?'t-textarea-disabled':'']
})
const focus=(e)=>{
  emit('focus',e)
}
const blur=(e)=>{
  emit('blur',e)
}
//允许拖动大小
const tStyle=computed(()=>{
  return{
    resize:props.resize?'auto':'none'
  }
})
</script>

<style lang="scss" scoped>
.t-textarea{
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea{
    outline: none;
    padding: 8px 8px 10px 8px;
    border-radius: 4px;
    font-size: 14px;
    font-family: auto;
    color: $color;
    &:focus{
      border: 1px solid $primary;
    }
  }
  .max-length-inline{
    position: absolute;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    padding: 0 10px;
    color: #aeafb3;
    width: 100%;
    box-sizing: border-box;
    bottom: 10px;
  }
}
.t-textarea-disabled{
  textarea{
    cursor: no-drop;
  }
}
</style>
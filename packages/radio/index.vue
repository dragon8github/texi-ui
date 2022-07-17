<template>
  <div class="t-radio">
    <div class="t-item-radio" :class="{'t-item-radio-disabled':item.disabled}" v-for="(item,index) in options" :key="index" @click="change(item,index)">
      <span :class="{active:currIndex===index}"></span>
      {{item[filedLabel]}}
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
  name:'tRadio'
}
</script>
<script setup>
const props=defineProps({
  options:{
    type:Array,
    default:()=>[]
  },
  inline:{
    type:Boolean,
    default:false
  },
  filedLabel:{
    type:String,
    default:'label'
  },
  filedValue:{
    type:String,
    default:'value'
  },
  customColor:{
    type:String,
    default:'#0e80eb'
  }
})
const emit=defineEmits(['change'])
const currIndex=ref(0)
const change=(item,index)=>{
  if(!item.disabled){
    currIndex.value=index
  }else{
    currIndex.value=-1
  }
  emit('change',item)
}
const inlineStyle=computed(()=>{
  return props.inline?'inline-flex':'flex'
})
</script>

<style lang="scss" scoped>
  .t-radio{
    width: 100%;
    height: auto;
    overflow: hidden;
    .t-item-radio{
      width: auto;
      height: auto;
      overflow: hidden;
      display: v-bind(inlineStyle);
      align-items: center;
      line-height: 20px;
      cursor: pointer;
      font-size: 14px;
      margin-right: 15px;
      user-select: none;
      span{
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        position: relative;
        border: 1px solid rgb(128, 125, 125);
        margin: 3px 8px 0 0;
        transition: transform 0.15s ease-in;
        &::after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          margin: -2px 0 0 -2px;
          transition: transform 0.15s ease-in;
        }
      }
      span.active{
        background: v-bind('props.customColor');
        border: 1px solid v-bind('props.customColor');
      }
    }
    .t-item-radio-disabled{
      cursor: no-drop;
      color: #808080;
      span{
        border: 1px splid #b9b9b9;
        background: #fff;
        &::after{
          background-color: #999;
        }
      }
    }
  }
</style>
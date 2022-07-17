<template>
  <div class="t-select" :style="{'width':width,'height':height}" v-clickOutside>
    <input :placeholder="placeholder" type="text" readonly :value="selectVal" :disabled='disabled'>
    <i class="t-select-icon t-icon-arrow-down" v-if="positionShow"></i>
    <i class="t-select-icon t-icon-arrow-up" v-else></i>
    <transition name="slide-fade">  
      <div class="t-position-box" v-if="positionShow">
        <li v-for="(item,index) in options" :key="index" @click="onChange(item,index)" :class="{'item-disabled-li':item.disabled,'item-active-li':activeIndex==index}" class="item-li">{{item[filedLabel]}}</li>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'tSelect'
}
</script>
<script setup>
import { ref } from 'vue'
const emit=defineEmits(['update:modelValue','change'])
const props=defineProps({
  options:{
    type:Array,
    default:()=>[]
  },
  disabled:Boolean,
  filedLabel:{
    type:String,
    default:'label'
  },
  filedValue:{
    type:String,
    default:'value'
  },
  placeholder:String,
  modelValue:String | Number,
  width:String,
  height:String
})
const positionShow=ref(false)
const selectVal=ref(props.modelValue)
const activeIndex=ref(-1)
props.options.forEach((item,index)=>{
  if(item[props.filedValue]==props.modelValue&&!item.disabled){
    selectVal.value=item[props.filedLabel]
    activeIndex.value=index
  }
})
const vClickOutside={
  beforeMount(el) {
    let handler=(e)=>{
      if(!props.disabled){
        if(el.contains(e.target)&&e.target.className.indexOf('item-li')==-1){
          positionShow.value=true
        }else{
          if(e.target.className.indexOf('item-disabled-li')==-1){
            positionShow.value=false
          }
        }
      }
    }
    document.addEventListener('click',handler)
  }
}
const onChange=(item,index)=>{
  if(!item.disabled){
    selectVal.value=item[props.filedLabel]
    activeIndex.value=index
    positionShow.value=false
    emit('update:modelValue',selectVal.value)
    emit('change',item)
  }
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  } 
  .t-select{
    width: 250px;
    display: inline-block;
    height: 40px;
    position: relative;
    input{
      padding: 8px 10px;
      border:1px solid $boder;
      outline: none;
      width: 100%;
      box-sizing: border-box;
    }
    .t-position-box{
      position: absolute;
      top: 42px;
      width: 100%;
      height: auto;
      overflow: hidden;
      border: 1px solid $boder;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      z-index: 999;
      background: white;
      li{
        list-style:none;
        line-height: 40px;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 14px;
        cursor: pointer;
        &:hover{
          background: #f0f0f0;
        }
      }
      .item-disabled-li{
        cursor: no-drop;
        background: #f0f0f0;
        color: #808080;
      }
      .item-active-li{
        color: $primary;
      }
    }
    .t-select-icon{
      position: absolute;
      top: 9px;
      right: 6px;
    }
  }
</style>
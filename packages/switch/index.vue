<template>
  <label class="t-switch" :class="{'is-checked':modelValue}" @click="handleClick">
    <span class="t-switch-left-text" v-if="textAlign==='left'&&closeText!=''&&activeText!=''" :style="{'color':modelValue?activeColor:inactiveColor}">{{switchText}}</span>
    <span class="t-switch-core" :class="{'t-switch-disabled':disabled}" :style="{'background':modelValue?activeColor:inactiveColor}">
      <span class="t-switch-button"></span>
      <span class="t-switch-flagtext" :style="flagTextStyle" v-if="showTipsText">{{flagText}}</span>
    </span>
    <span class="t-switch-right-text" v-if="textAlign==='right'&&closeText!=''&&activeText!=''" :style="{'color':modelValue?activeColor:inactiveColor}">{{switchText}}</span>
  </label>
</template>

<script>
import { computed, reactive, ref, watchEffect } from 'vue'
export default {
  name:'tSwitch'
}
</script>
<script setup>
const emit=defineEmits(['update:modelValue','input'])
const props=defineProps({
  modelValue:{
    type:Boolean,
    default:false
  },
  activeColor:{
    type:String,
    default:'#409eff'
  },
  inactiveColor:{
    type:String,
    default:'#dcdfe6'
  },
  closeText:{
    type:String,
    default:''
  },
  activeText:{
    type:String,
    default:''
  },
  textAlign:{
    type:String,
    default:'left'
  },
  disabled:Boolean,
  showTipsText:Boolean
})
const handleClick=()=>{
  if(!props.disabled){
    emit('update:modelValue',!props.modelValue)
    emit('input',!props.modelValue)
  }
}
const changeColor=computed(()=>{
  if(props.activeColor || props.inactiveColor){
    if(props.modelValue===true){
      return true
    }else{
      return false
    }
  }
})
const switchText=ref('')
const flagText=ref('关')
const flagTextStyle=reactive({'left':20+'px'})
watchEffect(()=>{
  if(props.modelValue){
    flagText.value='开'
    switchText.value=props.activeText
    flagTextStyle.left=5+'px'
  }else{
    flagText.value='关'
    switchText.value=props.closeText
    flagTextStyle.left=21+'px'
  }
})
</script>
<style lang="scss" scoped>
  .t-switch{
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    position: relative;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    .t-switch-core{
      display: inline-block;
      margin: 0;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      background: #dcdfe6;
      box-sizing: border-box;
      border-radius: 10px;
      cursor: pointer;
      transition: border-color 0.3s,background-color 0.3s;
      .t-switch-button{
        width: 16px;
        height: 16px;
        border-radius: 100%;
        position: absolute;
        top: 1px;
        left: 1px;
        background: #fff;
        transition: all 0.3s;
      }
      .t-switch-flagtext{
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: #fff;
        position: absolute;
        top: 1px;
        right: 3px;
        transition: all 0.3s ease;
      }
    }
    .t-switch-disabled{
      opacity: .5;
      cursor: no-drop;
    }
  }
  .t-switch.is-checked{
    .t-switch-core{
      border-color: #409eff;
      background: #409eff;
      .t-switch-button{
        transform: translateX(20px);
      }
    }
  }
  .t-switch-core.isActive{
    background: v-bind('props.activeColor');
  }
  .t-switch-button.isInActive{
    background: v-bind('props.inactiveColor');
  }
  .t-switch-left-text{
    margin-right: 5px;
  }
  .t-switch-right-text{
    margin-left: 5px;
  }
  
</style>



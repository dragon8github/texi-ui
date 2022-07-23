<template>
  <button :class="tClass" :style='styles' @click="click">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name:'tButton'
}
</script>
<script setup>
const props=defineProps({
  type:{
    type:String,
    default:'default'
  },
  disabled:{
    type:Boolean,
    default:false
  },
  round:{
    type:Boolean,
    default:false
  },
  plain:{
    type:Boolean,
    default:false
  },
  circle:{
    type:Boolean,
    default:false
  },
  size:{
    type:String,
    default:'default'
  },
  customColor: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  }
})
const emit=defineEmits(['click'])
const click=(e)=>{
  emit('click',e)
}
//:disabled='disabled' :round='round' :plain='plain' :size='size'
const tClass=computed(()=>{
  return ['t-button',
  `t-button-${props.type}`,
  props.disabled?'t-button-disabled':'',
  props.round?'t-button-round':'',
  props.plain?'t-button-plain':'',
  props.circle?'t-button-circle':'',
  props.size=='default'?'t-button':props.size=='medium'?'t-button-medium':props.size=='small'?'t-button-small':props.size=='mini'?'t-button-mini':'t-button'
  ]
})
const tDefaultColor={
  background:props.customColor,
  border:props.customColor,
  color: "#fff",
}
const styles=computed(()=>{
  return [props.customColor == ""?{}:props.type=='default'?{}:tDefaultColor]
})
</script>

<style lang="scss" scoped>
.t-button{
  outline: none;
  border: 0;
  background: #fff;
  padding: 12px 24px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  display: inline-block;
  // margin-right: 10px;
  cursor: pointer;
  &:hover,&:focus{
    opacity: 0.8;
  }
  &:active{
    opacity: 1;
  }
}
.t-button-default{
  border: 1px solid #dcdfe6;
  color: #333;
}
.t-button-primary{
  color: #fff;
  border-color: $primary;
  background: $primary;
}
.t-button-success{
  color: #fff;
  border-color: $success;
  background: $success;
}
.t-button-info{
  color: #fff;
  border-color: $info;
  background: $info;
}
.t-button-warning{
  color: #fff;
  border-color: $warning;
  background: $warning;
}
.t-button-danger{
  color: #fff;
  border-color: $danger;
  background: $danger;
}
.t-button-text{
  border: 1px solid #fff;
  background: none;
  color: #0e80eb;
  &:hover {
    opacity: 0.8;
  }
  &:active{
    opacity: 1;
  }
}
.t-button-custom {
  color: #333;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.t-button-disabled{
  opacity: 0.4;
  cursor: no-drop;
  &:hover,&:focus{
    opacity: 0.4;
  }
}
.t-button-round{
  border-radius: 20px;
}
.t-button-medium{
  padding: 8px 18px;
  font-size: 14px;
  white-space: nowrap;
}
.t-button-small{
  padding: 7px 13px;
  font-size: 13px;
  white-space: nowrap;
}
.t-button-mini {
  padding: 6px 12px;
  font-size: 12px;
  white-space: nowrap;
}
.t-button-default.t-button-plain{
  &:hover,&:focus{
    color: $primary;
    border-color: $primary;
    transition: 0.2s;
  }
}
.t-button-primary.t-button-plain{
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,&:focus{
    color: #fff;
    border-color: $primary;
    background: $primary;
    transition: 0.2s;
  }
}
.t-button-success.t-button-plain{
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,&:focus{
    color: #fff;
    border-color: $success;
    background: $success;
    transition: 0.2s;
  }
}
.t-button-info.t-button-plain{
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,&:focus{
    color: #fff;
    border-color: $info;
    background: $info;
    transition: 0.2s;
  }
}
.t-button-warning.t-button-plain{
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  &:hover,&:focus{
    color: #fff;
    border-color: $warning;
    background: $warning;
    transition: 0.2s;
  }
}
.t-button-danger.t-button-plain{
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  &:hover,&:focus{
    color: #fff;
    border-color: $danger;
    background: $danger;
    transition: 0.2s;
  }
}
.t-button-circle{
  border-radius: 50px;
  padding: 15px;
}
// 找到t-button里的类名有t-icon-开头的标签后面的span标签
.t-button [class*=t-icon-]+span{
  margin-left: 5px;
}
</style>
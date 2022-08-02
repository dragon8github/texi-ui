<template>
  <div class="t-form-item" :style="{'margin':isInline}">
    <label class="t-form-item-label" :style="{'width':Form.labelWidth,'text-align':Form.labelTextAlign}">{{label}}</label>
    <div class="t-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  name:'tFormItem'
}
</script>
<script setup>
  const props=defineProps({
    label:{
      type:String,
      default:''
    }
  })
  const Form=inject('Form')
  const isInline=computed(()=>{
    if(Form&&Form.inline){
      return '0 10px'
    }else{
      return '0 0 25px 0'
    }
  })
</script>
<style lang="scss" scoped>
  .t-form-item{
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    .t-form-item-label{
      vertical-align: middle;
      float: left;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
      color: #606266;
      font-size: 14px;
    }
    .t-form-item-content{
      // line-height: 40px;
      position: relative;
      font-size: 14px;
      // overflow: hidden;
    }
  }
</style>



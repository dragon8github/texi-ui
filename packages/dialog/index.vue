<template>
  <!-- 遮罩 -->
  <transition name='dialog-fade'>
    <div class="t-dialog-wrapper" v-show="modelValue" @click.self="handleClose">
      <div class="t-dialog" :style="{width,marginTop:top}">
        <div class="t-dialog-header">
          <slot name='title'>
            <span class="t-dialog-title">{{title}}</span>
          </slot>
          <button class="t-dialog-headbtn" @click="handleClose">
            <i class="t-icon-close"></i>
          </button>
        </div>
        <div class="t-dialog-body">
          <slot></slot>
        </div>
        <div class="t-dialog-footer" v-if="$slots.footer">
          <slot name='footer'></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name:'tDialog'
}
</script>
<script setup>
const emit=defineEmits(['update:modelValue'])
const props=defineProps({
  title:{
    type:String,
    default:'提示'
  },
  width:{
    type:String,
    default:'30%'
  },
  top:{
    type:String,
    default:'15vh'
  },
  modelValue:{
    type:Boolean,
    default:false
  }
})
const handleClose=()=>{
  emit('update:modelValue',false)
}
</script>
<style lang="scss" scoped>
  .t-dialog-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    overflow: auto;
    z-index: 2000;
    background-color: rgba(0,0,0,.5);
    .t-dialog{
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      width: 30%;
      &-header{
        padding: 20px 20px 10px;
        .t-dialog-title{
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .t-dialog-headbtn{
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          .t-icon-close{
            color: #909399;
          }
        }
      }
      &-body{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &-footer{
        padding: 10px 20px 20px;
        // text-align: center;
        box-sizing: border-box;
        .t-button{
          margin:0 20px;
        }
      }
    }
  }
  .dialog-fade-enter-active{
    animation: fade 0.3s;
  }
  .dialog-fade-leave-active{
    animation: fade 0.2s reverse;
  }
  @keyframes fade{
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>



<template>
  <div class="t-confirm" :class="{fade}">
    <div class="t-wrapper" :class="{fade}">
      <div class="t-header">
        <h3>{{title}}</h3>
        <a href="JavaScript:;" class="t-icon-close" @click="cancelCallback" v-if="closeShow"></a>
      </div>
      <div class="t-body">
        <i :class="['icon-warning',icon]"></i>
        <span>{{text}}</span>
      </div>
      <div class="t-footer">
        <tButton @click="cancelCallback" v-if="cancelShow">{{cancelText}}</tButton>
        <tButton @click="submitCallback" type='primary' v-if="submitShow">{{submitText}}</tButton>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import tButton from '../button/index.vue'
export default {
  name:'tConfirm'
}
</script>
<script setup>
const props=defineProps({
  title: {
    type: String,
    default: "温馨提示",
  },
  text: {
    type: String,
    default: "您确认操作吗？",
  },
  cancelCallback: {
    type: Function
  },
  submitCallback: {
    type: Function
  },
  cancelText: {
    type: String,
    default: "取消",
  },
  submitText: {
    type: String,
    default: "确认",
  },
  submitShow:{
    type:Boolean,
    default:true
  },
  cancelShow:{
    type:Boolean,
    default:true
  },
  closeShow:{
    type:Boolean,
    default:true
  },
  icon:{
    type:String,
    default:'t-icon-warning'
  }
})
const fade=ref(false)
onMounted(()=>{
  setTimeout(()=>{
    fade.value=true
  },10)
})
</script>
<style lang="scss" scoped>
  .t-confirm{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8888;
    background: rgba(0,0,0,0);
    &.fade{
      transition: all 0.4s;
      background: rgba(0,0,0,0.4);
    }
    .t-wrapper{
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-60%);
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 12px rgba(7,7,7,0.1);
      opacity: 0;
      &.fade{
        transform: translate(-50%,-50%);
        opacity: 1;
      }
      .t-header{
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        color: #2e2e2e;
        position: relative;
        h3{
          font-weight: normal;
          font-size: 16px;
          margin: 5px 0;
        }
        a{
          position: absolute;
          top: 12px;
          right: 15px;
          font-size: 16px;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          color: #999;
          text-decoration: none;
          &:hover{
            color: #666;
          }
        }
      }
      .t-body{
        padding: 20px 20px;
        font-size: 14px;
        color: #505050;
        display: flex;
        align-items: center;
        .icon-warning{
          color: #f57b29;
          margin-right: 3px;
          font-size: 16px;
        }
      }
      .t-footer{
        text-align: right;
        padding: 10px 15px;
        align-items: center;
        .t-button{
          margin-left: 20px;
        }
      }
    }
  }
</style>



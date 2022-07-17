<template>
<transition name="dowm">
  <div class="t-message" :class="{'t-message-left':location=='left','t-message-right':location=='right'}" :style="tStyle[type]" v-if="visible">
    <i :class="[tStyle[type].icon]"></i>
    <span class="text">{{text}}</span>
  </div>
</transition>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name:'tMessage'
}
</script>
<script setup>
const props=defineProps({
  type:{
    type:String,
    default:'warn'
  },
  text:{
    type:String,
    default:''
  },
  location:{
    type:String,
    default:''
  },
  icon: String,
  textColor: String,
  bgColor: String,
})
const tStyle={
  warn:{
    icon: "t-icon-warning",
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  error: {
    icon: "t-icon-error",
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
  success: {
    icon: "t-icon-success",
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
  custom:{
    icon: props.icon,
    color: props.textColor,
    backgroundColor: props.bgColor,
    borderColor: props.bgColor
  }
}
const visible=ref(false)
onMounted(()=>{
  visible.value = true;
})
</script>
<style lang="scss" scoped>
  .dowm{
    &-enter{
      &-from{
        transform: translateY(-75px);
        opacity: 0;
      }
      &-to{
        transform: translateY(0px);
        opacity: 1;
      }
      &-active{
        transition: all 0.5s;
      }
    }
  }
  .t-message{
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 25px;
  margin-left: -150px;
  line-height: 50px;
  padding: 0 20px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
    i{
      margin-right: 4px;
      vertical-align: middle;
    }
  }
  .t-message-left{
    left: 10%;
  }
  .t-message-right{
    left: 90%;
  }
</style>



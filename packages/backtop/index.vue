<template>
<transition name="fade">
  <div class="t-backTop-box" v-if="backTopShow" @click="backTop">
    <slot v-if="slot['default']"></slot>
    <div class="t-backTop-default-box" v-else>
      <span class="default-backtop-icon">
        <i class="t-icon-top"></i>
      </span>
    </div>
  </div>
</transition>
</template>

<script>
import { onBeforeUnmount, onMounted, ref, useSlots } from 'vue';
export default {
  name:'tBackTop'
}
</script>
<script setup>
const props=defineProps({
  target:{
    type:String,
    default:"body"
  },
  visibilityHeight:{
    type:Number,
    default:240
  },
  right:{
    type:Number,
    default:20
  },
  bottom:{
    type:Number,
    default:40
  }
})
const slot=useSlots()
const backTopShow=ref(false)
const right=ref(props.right+'px')
const bottom=ref(props.bottom+'px')
const scrollTop=ref(0)
const timer=ref(null)

const backTop=()=>{
  //这里使用定时器是为了backtop时匀速上去而不是一下跑到最顶
  clearInterval(timer.value)
  timer.value=setInterval(()=>{
    scrollTop.value-=30
    if(props.target=='body'){
      if(typeof document !=='undefined'){      
        document.body.scrollTop=scrollTop.value= document.documentElement.scrollTop =scrollTop.value
      }
    }else{
      if(typeof document !=='undefined'){      
        document.querySelector(props.target).scrollTop=scrollTop.value
      }
    }
    if(scrollTop.value<=0){
      scrollTop.value=0
      clearInterval(timer.value)
    }
  })
}

const handleScroll=()=>{
  if(typeof document !=='undefined'){      
    scrollTop.value=props.target=='body'?(document.body.scrollTop || document.documentElement.scrollTop):document.querySelector(props.target).scrollTop
  }
  if(scrollTop.value>=props.visibilityHeight){
    backTopShow.value=true
  }else{
    backTopShow.value=false
  }
}

onMounted(()=>{
  if(props.target=='body'){
    if(typeof window !=='undefined'){
      window.addEventListener("scroll", handleScroll, false);
    }
  }else{
    if(typeof document !=='undefined'){      
      document.querySelector(props.target).addEventListener('scroll',handleScroll,false)
    }
  }
})
onBeforeUnmount(()=>{
  if(props.target=='body'){
    if(typeof window !=='undefined'){      
      window.removeEventListener('scroll',handleScroll,false)
    }
  }else{
    if(typeof document !=='undefined'){      
      document.querySelector(props.target).removeEventListener('scroll',handleScroll,false)
    }
  }
})
</script>
<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .t-backTop-box,.t-backTop-default-box{
    width: auto;
    overflow: auto;
    position: fixed;
    right: v-bind(right);
    bottom: v-bind(bottom);
    z-index: 99999;
    cursor: pointer;
    overflow: hidden;
    .default-backtop-icon{
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      background: #0e80eb;
      text-align: center;
      line-height: 40px;
      i{
        font-size: 20px;
        color: #fff;
      }
    }
  }
</style>



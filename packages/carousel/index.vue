<template>
  <div class="t-carousel" :class="{'fShowBtn':fShowBtn}" :style="{'width':width,'height':height}" @mouseenter="mEnterStopAnLeaveStar?stop():''" @mouseleave="mEnterStopAnLeaveStar?star():''">
    <ul class="t-carousel-body">
      <li class="t-carousel-item" v-for="(item,index) in sliders" :key="index" :class="{fade:currIndex===index}">
        <slot>
          <img :src="item[filedValue]" alt="">
        </slot>
      </li>
    </ul>
    <!-- 上下页 -->
    <a href="javascript:;" class="t-carousel-btn prev" @click="toggle(-1)" v-if="showBtn">
      <i class="iconfont t-icon-arrow-left"></i>
    </a>
    <a href="javascript:;" class="t-carousel-btn next" @click="toggle(1)" v-if="showBtn">
      <i class="iconfont t-icon-arrow-right"></i>
    </a>
    <!-- 点 -->
    <div class="t-carousel-indicator" v-if="showIndicator">
      <span @click="currIndex=index" v-for="(i,index) in sliders.length" :key="index" :class="{active:currIndex===index}"></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
  name:'tCarousel'
}
</script>
<script setup>
const props=defineProps({
  //数据
  sliders:{
    type:Array,
    default:()=>[]
  },
  width:{
    type:String,
    default:'300px'
  },
  height:{
    type:String,
    default:'250px'
  },
  autoPlay:{
    type:Boolean,
    default:false
  },
  //每张图片切换时间
  duration:{
    type:Number,
    default:3000
  },
  showBtn:{
    type:Boolean,
    default:true
  },
  showIndicator:{
    type:Boolean,
    default:true
  },
  fShowBtn:{
    type:Boolean,
    default:false
  },
  mEnterStopAnLeaveStar:{
    type:Boolean,
    default:false
  },
  filedValue:{
    type:String,
    default:'imgUrl'
  }
})
const currIndex=ref(0)
let timer=null
const autoPlayFn=()=>{
  clearInterval(timer)
  timer=setInterval(()=>{
    currIndex.value++
    if(currIndex.value>=props.sliders.length){
      currIndex.value=0
    }
  },props.duration)
}

watch(()=>props.sliders,(newV)=>{
  if(newV.length&&props.autoPlay){
    autoPlayFn()
  }
},{immediate:true})

const stop=()=>{
  if(timer){
    clearInterval(timer)
  }
}
const star=()=>{
  if(props.sliders.length&&props.autoPlay){
    autoPlayFn()
  }
}

const toggle=(step)=>{
  const newIndex=currIndex.value+step
  if(newIndex>(props.sliders.length-1)){
    currIndex.value=0
    return
  }
  if(newIndex<0){
    currIndex.value=props.sliders.length-1
    return
  }
  currIndex.value=newIndex
}
onUnmounted(()=>{
  clearInterval(timer)
})
</script>
<style lang="scss" scoped>
  .t-carousel{
    width: 300px;
    height: 250px;
    position: relative;
    .t-carousel-body{
      width: 100%;
      height: 100%;
      .t-carousel-item{
        list-style: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.3s linear;
        &.fade{
          opacity: 1;
          z-index: 1;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .t-carousel-btn{
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: rgba(0,0,0,0.2);
      color: #fff;
      position: absolute;
      top: 50%;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
    &:hover{
      .t-carousel-btn{
        opacity: 1;
      }
    }
    &.fShowBtn{
      .t-carousel-btn{
        opacity: 1;
      }
    }
    .t-carousel-indicator{
      position: absolute;
      left: 0;
      bottom: 20px;
      width: 100%;
      z-index: 2;
      text-align: center;
      span{
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(0,0,0,0.2);
        cursor: pointer;
        ~ span{
          margin-left: 12px;
        }
        &.active{
          background: #fff;
        }
      }
    }
  }
</style>



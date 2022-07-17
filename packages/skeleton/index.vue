<template>
  <div class="t-skeleton" :style="{width,height}" :class="{shan:animated}">
    <div class="block" :style="{backgroundColor:bgColor}"></div>
  </div>
</template>

<script>
export default {
  name:'tSkeleton'
}
</script>
<script setup>
const props=defineProps({
  width: {
    type: String,
    default: "100px",
  },
  height: {
    type: String,
    default: "30px",
  },
  animated: {
    type: Boolean,
    default: true,
  },
  bgColor: {
    type: String,
    default: "#eee",
  }
})
</script>
<style lang="scss" scoped>
  .t-skeleton{
    display: inline-block;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
    .block{
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  }
  .shan{
    &::after{
      content: '';
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      background: linear-gradient(
        to left,
        rgba(255,255,255,0) 0,
        rgba(255,255,255,0.4) 50%,
        rgba(255,255,255,0) 100%,
      );
      transform: skewX(-45deg);
      animation: shan 1.5s ease 0s infinite;
    }
  }
  @keyframes shan{
    0%{
      left:-100%;
    }
    100%{
      left:120%;
    }
  }
</style>



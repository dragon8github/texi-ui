<template>
  <div class="t-tree">
    <li v-for="(item,index) in newOptions" :key="index" @click.stop="isOpen(item)">
      {{item.label}}
      <transition name="slide-fade">    
        <ul v-show="item.isOpened" v-if="item.children&&item.children.length">
          <tTree :options='item.children'></tTree>
        </ul>
      </transition>
    </li>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'tTree'
}
</script>
<script setup>
const props=defineProps({
  options:{
    type:Array,
    default:()=>[]
  }
})
const newOptions=ref(props.options)
const isOpen=(item)=>{
  item.isOpened=!item.isOpened
}
</script>
<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all .2s ease-out;
  }

  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  } 
</style>



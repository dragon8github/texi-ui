<template>
  <!-- 装载内容 -->
  <div class="t-tabs-panel" v-show="activeName===name">
    <slot />
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'TTabsPanel',
  props: {
    // 标签页标题文章
    label: {
      type: String,
      default: ''
    },
    // 唯一标识
    name: {
      type: String,
      default: ''
    }
  },
  setup(){
    const activeName=inject('activeName')
    return {activeName}
  }
}
</script>
<style scoped lang="scss"></style>
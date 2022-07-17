<template>
  <div class="t-bread-item">
    <router-link v-if="to" :to='to'><slot/></router-link>
    <span v-else><slot/></span>
  </div>
</template>

<script>
export default {
  name:'tBreadItem',
  props: {
    to: {
      type: [String, Object],
    },
  }
}
</script>
<script setup>

</script>
<style lang="scss" scoped>
  
</style>

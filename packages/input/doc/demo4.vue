<template>
  <div class="container">
    <t-input v-model="Val" type='password' :showPassword='true'/>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Val=ref('')
</script>

<style lang="scss" scoped>

</style>
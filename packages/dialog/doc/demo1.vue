<template>
  <t-button type='primary' @click="visible=true">按钮</t-button>
  <tDialog title='温馨提示' v-model:visible='visible'>
    <p>77777777</p>
    <template v-slot:footer>
      <t-button @click="visible=false">取消</t-button>
      <t-button type='primary' @click="visible=false">确认</t-button>
    </template>
  </tDialog>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const visible=ref(false)
</script>

<style lang='scss' scoped>
  :deep(.t-button:first-child){
    margin-right:20px;
  }
</style>
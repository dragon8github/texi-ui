<template>
  <tCheckbox v-model="checkboxVal" :options='checkOptions'></tCheckbox>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  const checkboxVal=ref(['yingguo'])
  const state=reactive({
    checkOptions:[
      { label: "中国", value: "zhongguo" },
      { label: "英国", value: "yingguo",disabled:true },
      { label: "德国", value: "deguo",disabled:true },
      { label: "法国", value: "faguo" },
    ]
  })
  const {checkOptions}=state
</script>

<style>

</style>
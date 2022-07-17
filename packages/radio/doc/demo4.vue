<template>
  <tRadio :options='options' :inline='true' customColor='red'></tRadio>
</template>

<script setup>
import { reactive } from "vue";

const state=reactive({
  options:[
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" }
  ]
})
const {options}=state
</script>

<style>

</style>
<template>
  <tRadio :options='options' :inline='true' filedLabel='name' filedValue='id'></tRadio>
</template>

<script setup>
import { reactive } from "vue";

const state=reactive({
  options:[
    { name: "中国", id: "zhongguo" },
    { name: "英国", id: "yingguo" },
    { name: "德国", id: "deguo" },
    { name: "法国", id: "faguo" }
  ]
})
const {options}=state
</script>

<style>

</style>
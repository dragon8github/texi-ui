<template>
  <tSelect :options='selOptions' filedLabel='name' filedValue='id'></tSelect>
</template>

<script setup>
import { reactive } from "vue";

const state=reactive({
  selOptions:[
    { name: "中国", id: "zhongguo" },
    { name: "俄罗斯", id: "eluosi" },
    { name: "美国", id: "meiguo" },
    { name: "澳大利亚", id: "aodaliya" },
    { name: "巴基斯坦", id: "bajisitan" }
  ]
})
const { selOptions } = state;
</script>

<style>

</style>
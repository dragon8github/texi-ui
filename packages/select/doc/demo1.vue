<template>
  <tSelect :options='selOptions' placeholder='请选择' v-model="selVal"></tSelect>
</template>

<script setup>
import { reactive, ref } from "vue";
const selVal=ref('zhongguo')
const state=reactive({
  selOptions:[
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi",disabled:true },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" }
  ]
})
const { selOptions } = state;
</script>

<style>

</style>
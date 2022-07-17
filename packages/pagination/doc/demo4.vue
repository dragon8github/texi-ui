<template>
<tPagination v-model:current="pageNo" :pageSize='pageSize' :showPageSize='showPageSize' @change='changePsize'></tPagination>
</template>

<script setup>
import { ref } from "vue";

const pageNo=ref(1)
const showPageSize=ref([3,5,10])
const pageSize=ref(3)
const changePsize=(pNum)=>{
    pageSize.value=pNum
}
</script>

<style>

</style>
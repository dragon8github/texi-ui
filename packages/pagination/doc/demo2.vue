<template>
<tPagination v-model:current="pageNo" activeColor='#e6113b'></tPagination>
</template>

<script setup>
import { ref } from "vue";

const pageNo=ref(1)

</script>

<style>

</style>
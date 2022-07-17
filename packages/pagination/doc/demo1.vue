<template>
<tPagination v-model:current="pageNo"></tPagination>
</template>

<script setup>
import { ref } from "vue";

const pageNo=ref(1)

</script>

<style>

</style>
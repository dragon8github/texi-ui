<template>
  <tSwitch v-model="active" activeColor='#67c23a' inactiveColor='#f56c6c'></tSwitch>
</template>

<script setup>
import { ref } from "vue";

const active=ref(false)

</script>

<style>

</style>
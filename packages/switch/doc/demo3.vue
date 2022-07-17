<template>
  <tSwitch v-model="active" closeText="关闭" activeText="开启"></tSwitch><br/>
  <tSwitch v-model="active1" closeText="关闭" activeText="开启" textAlign="right"></tSwitch>
</template>

<script setup>
import { ref } from "vue";

const active=ref(false)
const active1=ref(false)

</script>

<style>

</style>
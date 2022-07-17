<template>
  <tTextarea v-model="textVal"></tTextarea><br/>
  <tTextarea v-model="textVal" disabled></tTextarea><br/>
  <tTextarea v-model="textVal" :readonly='true'></tTextarea><br/>
  <tTextarea v-model="textVal" :maxlength='13'></tTextarea><br/>
  <tTextarea v-model="textVal" :resize='false'></tTextarea>
</template>

<script setup>
import { ref } from "vue";

const textVal=ref('')
</script>

<style>

</style>
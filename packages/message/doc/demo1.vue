<template>
    <t-button type='primary' @click="showMessage">点击触发</t-button>
</template>

<script setup>
import Message from '../index.js'
const showMessage=()=>{
    Message({type:'success',text:'这是一个message'})
}
</script>

<style>

</style>
<template>
    <t-space>
        <t-button type='primary' @click="showMessage1">点击左边弹窗</t-button>
        <t-button type='primary' @click="showMessage2">点击中间弹窗</t-button>
        <t-button type='primary' @click="showMessage3">点击右边弹窗</t-button>
    </t-space>
</template>

<script setup>
import Message from '../index.js'
const showMessage1=()=>{
    Message({text:'这是一个message',location:'left'})
}
const showMessage2=()=>{
    Message({type:'success',text:'这是一个message'})
}
const showMessage3=()=>{
    Message({type:'error',text:'这是一个message',location:'right'})
}
</script>

<style>

</style>
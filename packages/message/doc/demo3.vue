<template>
    <t-button type='primary' @click="showMessage">点击触发</t-button>
</template>

<script setup>
import Message from '../index.js'
const showMessage=()=>{
    Message({
        type:'custom',
        text:'自定义图标颜色背景',
        icon: "t-icon-check",
        textColor: "#000",
        bgColor: "#e19af3",
        })
}
</script>

<style>

</style>
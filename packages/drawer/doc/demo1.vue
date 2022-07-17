<template>
    <tButton @click="openDrawer">基本使用</tButton>
    <tDrawer 
    v-model="showDrawer" 
    title="基本使用"
    @confirm='confirm'
    @cancel='cancel'>
        <template #content>
            <div>内容区域</div>
            <div>内容区域</div>
            <div>内容区域</div>
        </template>
    </tDrawer>
</template>

<script setup>
import { ref } from "vue";
import Message from '../../message/index.js'
const showDrawer=ref(false)
const openDrawer=()=>{
    showDrawer.value=true
}
const confirm=()=>{
    Message({type:'success',text:'确认事件'})
}
const cancel=()=>{
    Message({text:'取消事件'})
}
</script>

<style>

</style>
<template>
    <tButton @click="openDrawer">基本使用</tButton>
    <tDrawer v-model="showDrawer">
        <template #header>
            这是自定义标题内容
            <tButton type='success' style="position:absolute;right:20px">自定义按钮</tButton>
        </template>
        <template #content>
            <div>内容区域</div>
            <div>内容区域</div>
            <div>内容区域</div>
        </template>
        <template #footer>
            这是底部自定义信息
        </template>
    </tDrawer>
</template>

<script setup>
import { ref } from "vue";
const showDrawer=ref(false)
const openDrawer=()=>{
    showDrawer.value=true
}
</script>

<style>

</style>
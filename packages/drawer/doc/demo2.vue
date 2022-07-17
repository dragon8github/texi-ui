<template>
    <tSpace>
        <tButton @click="openDrawer1">左边出现</tButton>
        <tButton @click="openDrawer2">右边出现</tButton>
        <tButton @click="openDrawer3">上边出现</tButton>
        <tButton @click="openDrawer4">下边出现</tButton>
    </tSpace>
    <tDrawer v-model="showDrawer1" title="左边出现的抽屉">
        <template #content>
            <div>内容区域</div>
            <div>内容区域</div>
            <div>内容区域</div>
        </template>
    </tDrawer>
    <tDrawer v-model="showDrawer2" title="右边出现的抽屉" direction='right'>
        <template #content>
            <div>内容区域</div>
            <div>内容区域</div>
            <div>内容区域</div>
        </template>
    </tDrawer>
    <tDrawer v-model="showDrawer3" title="上边出现的抽屉" direction='top'>
        <template #content>
            <div>内容区域</div>
            <div>内容区域</div>
            <div>内容区域</div>
        </template>
    </tDrawer>
    <tDrawer v-model="showDrawer4" title="下边出现的抽屉" direction='bottom'>
        <template #content>
            <div>内容区域</div>
            <div>内容区域</div>
            <div>内容区域</div>
        </template>
    </tDrawer>
</template>

<script setup>
import { ref } from "vue";
const showDrawer1=ref(false)
const showDrawer2=ref(false)
const showDrawer3=ref(false)
const showDrawer4=ref(false)
const openDrawer1=()=>{
    showDrawer1.value=true
}
const openDrawer2=()=>{
    showDrawer2.value=true
}
const openDrawer3=()=>{
    showDrawer3.value=true
}
const openDrawer4=()=>{
    showDrawer4.value=true
}
</script>

<style>

</style>
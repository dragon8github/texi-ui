<template>
<!-- 静态动态写法 -->
 <tTabs v-model="activeName">
    <TTabsPanel name="name0" label="选项0">内容0</TTabsPanel>
    <TTabsPanel v-for="i in 4" :key="i" :name='`name${i}`' :label='`选项${i}`'>内容{{i}}</TTabsPanel>
 </tTabs>
</template>

<script setup>
import { ref } from "vue";

const activeName=ref('name0')
</script>

<style>

</style>
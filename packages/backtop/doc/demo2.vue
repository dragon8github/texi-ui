<template>
    <div class="testBox"></div>
    <tBackTop target='.testBox'></tBackTop>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(()=>{
    for(let i=0;i<=20;i++){
        const p=document.createElement('p');
        p.innerText='scroll';
        document.querySelector('.testBox').appendChild(p)
    }
})
</script>

<style lang="scss" scoped>
    .testBox{
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #f0f0f0;
        padding: 10px;
    }  
</style>>

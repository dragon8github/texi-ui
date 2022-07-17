<template>
    <tCarousel :sliders='sliders' :showBtn='false' :showIndicator='false' autoPlay></tCarousel>
</template>

<script setup>
import { reactive } from "vue";

const state=reactive({
    sliders:[
        {name:'xiaohu',imgUrl:'../../src/assets/testimg/xiaohu.png'},
        {name:'xiaoba',imgUrl:'../../src/assets/testimg/xiaoba.png'},
        {name:'xiaodao',imgUrl:'../../src/assets/testimg/xiaodao.png'}
    ]
})
const {sliders}=state
</script>

<style>

</style>
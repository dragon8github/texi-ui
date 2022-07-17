<template>
  <tTable :options='options' size='small'></tTable>
</template>

<script setup>
import { reactive } from "vue"

const state=reactive({
    options:{
        fileds:[
            {field:'attr',title:'参数',align:'center'},
            {field:'type',title:'类型',align:'center'},
            {field:'talk',title:'说明',align:'center',width:'350px'},
            {field:'sel',title:'可选值',align:'center'},
            {field:'def',title:'默认值',align:'center'}
        ],
        datas:[
            {attr:'sliders',type:'Array',talk:'轮播图数据内容',sel:'——',def:'——'},
            {attr:'width',type:'String',talk:'控制轮播图宽度',sel:'——',def:'300'},
            {attr:'height',type:'String',talk:'控制轮播图高度',sel:'——',def:'250'},
            {attr:'autoPlay',type:'Boolean',talk:'是否制动播放',sel:'——',def:'false'},
            {attr:'duration',type:'Number',talk:'每张图片切换时间',sel:'——',def:'3000'},
            {attr:'showBtn',type:'Boolean',talk:'是否展示上下页按钮',sel:'——',def:'false'},
            {attr:'showIndicator',type:'Boolean',talk:'是否展示图下方圆点',sel:'——',def:'false'},
            {attr:'fShowBtn',type:'Boolean',talk:'是否永久展示上下页按钮',sel:'——',def:'false'},
            {attr:'mEnterStopAnLeaveStar',type:'Boolean',talk:'是否控制鼠标进入停止播放离开开始播放',sel:'——',def:'false'},
            {attr:'filedValue',type:'String',talk:'传送数据的数据属性名非imgUrl可通过该属性说明',sel:'——',def:'imgUrl'}
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



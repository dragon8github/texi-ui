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
            {attr:'type',type:'String',talk:'消息提示类型',sel:'warn/error/success/custom',def:'warn'},
            {attr:'text',type:'String',talk:'提示内容',sel:'——',def:'300'},
            {attr:'location',type:'String',talk:'消息提示框出现位置',sel:'——',def:'250'},
            {attr:'icon',type:'String',talk:'自定义图标',sel:'——',def:'false'},
            {attr:'textColor',type:'String',talk:'自定义提示内容文本颜色配，配合type为custom使用',sel:'——',def:'——'},
            {attr:'bgColor',type:'String',talk:'自定义背景颜色，配合type为custom使用',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



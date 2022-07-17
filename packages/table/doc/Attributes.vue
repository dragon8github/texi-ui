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
            {attr:'options',type:'Object',talk:'表格数据,fileds 和 datas,fileds作为整体约束（具体见下方API），datas作为数据定义',sel:'——',def:'{fileds:[], datas:[]}'},
            {attr:'size',type:'String',talk:'尺寸大小',sel:'——',def:'#409eff'},
            {attr:'showHeader',type:'Boolean',talk:'是否显示表头',sel:'true/false',def:'true'},
            {attr:'headStyle',type:'Object',talk:'自定义表头样式',sel:'——',def:'——'},
            {attr:'rowStyle',type:'Object',talk:'自定义表格内容区域的样式',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



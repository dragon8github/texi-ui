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
            {attr:'v-model',type:'String/Array',talk:'下拉框绑定值，开启多选时类型为Array',sel:'——',def:'——'},
            {attr:'options',type:'Array',talk:'下拉框数据配置，具体见下方 options API',sel:'——',def:'——'},
            {attr:'disabled',type:'Boolean',talk:'是否为禁用状态',sel:'true/false',def:'false'},
            {attr:'filedLabel',type:'String',talk:'自定义替换lable的字段名',sel:'——',def:'label'},
            {attr:'filedValue',type:'String',talk:'自定义替换value的字段名',sel:'——',def:'value'},
            {attr:'placeholder',type:'String',talk:'下拉框占位字符',sel:'——',def:'——'},
            {attr:'width',type:'String',talk:'自定义宽度',sel:'——',def:'——'},
            {attr:'height',type:'String',talk:'自定义高度',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



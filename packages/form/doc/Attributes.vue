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
            {attr:'model',type:'Object',talk:'表单数据收集的对象',sel:'——',def:'——'},
            {attr:'labelWidth',type:'String',talk:'表单每一项的宽度',sel:'——',def:'80px'},
            {attr:'inline',type:'Boolean',talk:'是否为行内表单',sel:'——',def:'false'},
            {attr:'labelTextAlign',type:'String',talk:'表单每一项开头文本的对齐方式',sel:'left/center/right',def:'right'},
            {attr:'label',type:'String',talk:'表单每一项绑定的数据汇总到model里面',sel:'——',def:''},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



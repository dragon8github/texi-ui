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
            {attr:'v-model',type:'String/Number',talk:'单选绑定值',sel:'warn/error/success/custom',def:'warn'},
            {attr:'options',type:'Array',talk:'单选数据配置，具体见下方 options API',sel:'——',def:'——'},
            {attr:'inline',type:'Boolean',talk:'是否为行内元素',sel:'——',def:'false'},
            {attr:'filedLabel',type:'String',talk:'自定义替换lable的字段名',sel:'——',def:'label'},
            {attr:'filedValue',type:'String',talk:'自定义替换value的字段名',sel:'——',def:'value'},
            {attr:'customColor',type:'String',talk:'自定义选中颜色色值',sel:'——',def:'#0e80eb'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



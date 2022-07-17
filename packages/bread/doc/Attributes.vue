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
            {attr:'to ',type:'String/Object',talk:'路由跳转对象',sel:'——',def:'——'},
            {attr:'showIcon',type:'String',talk:'自定义图标',sel:'——',def:'arrow-right'}
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



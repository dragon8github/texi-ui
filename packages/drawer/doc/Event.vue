<template>
  <tTable :options='options' size='small'></tTable>
</template>

<script setup>
import { reactive } from "vue"

const state=reactive({
    options:{
        fileds:[
            {field:'name',title:'事件名',align:'center'},
            {field:'talk',title:'说明',align:'center',width:'350px'},
            {field:'attr',title:'回调参数',align:'center'},
            {field:'exm',title:'示例',align:'center',width:'350px'}
        ],
        datas:[
            {name:'close',talk:'关闭按钮回调',attr:'——',exm:'close=()=>{}'},
            {name:'confirm',talk:'确认按钮回调',attr:'——',exm:'confirm=()=>{}'},
            {name:'cancel',talk:'取消按钮回调',attr:'——',exm:'cancel=()=>{}'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



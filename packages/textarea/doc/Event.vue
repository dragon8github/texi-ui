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
            {name:'focus',talk:'聚焦时触发的事件',attr:'event',exm:'focus=(event)=>{}'},
            {name:'blur',talk:'失去焦点时触发的事件',attr:'event',exm:'blur=(event)=>{}'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



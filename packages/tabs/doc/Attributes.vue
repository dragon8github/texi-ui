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
            {attr:'v-model',type:'Srting/number',talk:'绑定数据',sel:'——',def:'——'},
            {attr:'label',type:'String',talk:'选项卡显示的标题',sel:'——',def:''},
            {attr:'name',type:'String',talk:'选项卡name',sel:'——',def:''},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



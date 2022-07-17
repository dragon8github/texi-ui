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
            {attr:'title',type:'String',talk:'提示内容信息',sel:'——',def:'提示'},
            {attr:'width',type:'String',talk:'弹窗宽度',sel:'——',def:'30%'},
            {attr:'top',type:'String',talk:'距离顶部距离',sel:'——',def:'15vh'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



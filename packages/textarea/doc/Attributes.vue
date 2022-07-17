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
            {attr:'v-model',type:'String/Number',talk:'textarea文本域绑定值',sel:'——',def:'——'},
            {attr:'cols',type:'Number',talk:'textarea可见区域高度',sel:'——',def:'4'},
            {attr:'rows',type:'Number',talk:'textarea可见区域宽度',sel:'——',def:'50'},
            {attr:'disabled',type:'Boolean',talk:'是否禁用',sel:'true/false',def:'false'},
            {attr:'readonly',type:'Boolean',talk:'是否只读',sel:'true/false',def:'false'},
            {attr:'maxlength',type:'Number',talk:'文本区域的最大字符数',sel:'——',def:'——'},
            {attr:'resize',type:'Boolean',talk:'是否开启拉伸',sel:'true/false',def:'true'},
            {attr:'placeholder',type:'String',talk:'输入框占位字符',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



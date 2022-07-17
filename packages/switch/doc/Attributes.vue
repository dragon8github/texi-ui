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
            {attr:'v-model',type:'Boolean',talk:'开关状态',sel:'true/false',def:'false'},
            {attr:'activeColor',type:'String',talk:'自定义开启时的颜色',sel:'——',def:'#409eff'},
            {attr:'inactiveColor',type:'String',talk:'自定义关闭时的颜色',sel:'——',def:'#dcdfe6'},
            {attr:'closeText',type:'String',talk:'关闭状态时辅助文字',sel:'——',def:''},
            {attr:'activeText',type:'String',talk:'开启状态时辅助文字',sel:'——',def:''},
            {attr:'textAlign',type:'String',talk:'辅助文字位置',sel:'left/right',def:'left'},
            {attr:'disabled',type:'Boolean',talk:'是否禁用',sel:'true/false',def:'false'},
            {attr:'showTipsText',type:'Boolean',talk:'是否显示提示信息',sel:'true/false',def:'false'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



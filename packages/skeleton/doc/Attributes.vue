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
            {attr:'width',type:'String',talk:'自定义宽度',sel:'——',def:'100'},
            {attr:'height',type:'String',talk:'自定义高度',sel:'——',def:'30'},
            {attr:'animated',type:'Boolean',talk:'是否显示动画',sel:'true/false',def:'true'},
            {attr:'bgColor',type:'String',talk:'自定义背景颜色',sel:'——',def:'#eee'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



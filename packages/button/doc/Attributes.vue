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
            {attr:'type',type:'String',talk:'按钮类型',sel:'default/primary/success/info/warning/danger/text',def:'default'},
            {attr:'disabled',type:'Boolean',talk:'禁用',sel:'——',def:'false'},
            {attr:'round',type:'Boolean',talk:'圆角',sel:'——',def:'false'},
            {attr:'plain',type:'Boolean',talk:'镂空',sel:'——',def:'false'},
            {attr:'circle',type:'Boolean',talk:'圆形',sel:'——',def:'false'},
            {attr:'size',type:'String',talk:'尺寸',sel:'default/small/mini',def:'default'},
            {attr:'customColor',type:'String',talk:'自定义颜色',sel:'——',def:'——'},
            {attr:'icon',type:'String',talk:'自定义图标',sel:'参考图标库',def:''},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



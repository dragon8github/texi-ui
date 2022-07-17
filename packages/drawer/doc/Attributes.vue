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
            {attr:'title',type:'String',talk:'标题文本',sel:'——',def:'标题'},
            {attr:'width',type:'String',talk:'抽屉宽度',sel:'——',def:'30%'},
            {attr:'height',type:'String',talk:'抽屉高度',sel:'——',def:'40%'},
            {attr:'direction',type:'String',talk:'抽屉进入方向',sel:'left/right/top/bottom',def:'left'},
            {attr:'showHeader',type:'Boolean',talk:'是否显示抽屉头部',sel:'true/false',def:'true'},
            {attr:'showFooter',type:'Boolean',talk:'是否显示抽屉尾部',sel:'true/false',def:'true'},
            {attr:'showClose',type:'Boolean',talk:'是否显示头部关闭图标',sel:'true/false',def:'true'},
            {attr:'confirmText',type:'String',talk:'确认按钮文本',sel:'——',def:'确定'},
            {attr:'cancelText',type:'String',talk:'取消按钮文本',sel:'——',def:'取消'},
            {attr:'confirmShow',type:'Boolean',talk:'是否显示头部确认按钮',sel:'true/false',def:'true'},
            {attr:'cancelShow',type:'Boolean',talk:'是否显示头部取消按钮',sel:'true/false',def:'true'},
            {attr:'closeOnModal',type:'Boolean',talk:'是否显示遮罩层',sel:'true/false',def:'true'}
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



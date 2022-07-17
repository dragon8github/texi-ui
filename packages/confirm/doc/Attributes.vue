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
            {attr:'title',type:'String',talk:'标题文本',sel:'——',def:'温馨提示'},
            {attr:'text',type:'String',talk:'内容文本',sel:'——',def:'您确认操作吗？'},
            {attr:'cancelCallback',type:'Function',talk:'取消按钮回调函数',sel:'——',def:'——'},
            {attr:'submitCallback',type:'Function',talk:'确定按钮回调函数',sel:'——',def:'——'},
            {attr:'cancelText',type:'String',talk:'取消按钮文本',sel:'——',def:'取消'},
            {attr:'submitText',type:'String',talk:'确定按钮文本',sel:'——',def:'确认'},
            {attr:'submitShow',type:'Boolean',talk:'是否展示确认按钮',sel:'true/false',def:'true'},
            {attr:'cancelShow',type:'Boolean',talk:'是否展示取消按钮',sel:'true/false',def:'true'},
            {attr:'closeShow',type:'Boolean',talk:'是否显示右上角关闭图标',sel:'true/false',def:'true'},
            {attr:'icon',type:'String',talk:'自定义icon图标',sel:'参考图标库',def:'warning'}
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



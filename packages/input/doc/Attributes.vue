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
            {attr:'v-model',type:'String/Number',talk:'input绑定值',sel:'——',def:'——'},
            {attr:'type',type:'String',talk:'输入框内容的类型',sel:'——',def:'text'},
            {attr:'leftIcon/rightIcon',type:'String',talk:'参考图标库',sel:'——',def:'——'},
            {attr:'disabled',type:'Boolean',talk:'是否禁用',sel:'——',def:'false'},
            {attr:'clearable',type:'Boolean',talk:'是否显示清空图标',sel:'——',def:'false'},
            {attr:'showPassword',type:'Boolean',talk:'是否显示隐藏密码图标按钮，需配合type为password类型一起使用',sel:'——',def:'false'},
            {attr:'readonly',type:'Boolean',talk:'是否只读',sel:'——',def:'false'},
            {attr:'placeholder',type:'String',talk:'输入框占位字符',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



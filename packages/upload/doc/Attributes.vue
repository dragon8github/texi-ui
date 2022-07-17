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
            {attr:'multiple',type:'Boolean',talk:'是否启用多选',sel:'true/false',def:'false'},
            {attr:'label',type:'String',talk:'提示文字信息',sel:'——',def:'选择文件'},
            {attr:'btnType',type:'String',talk:'自定义按钮样式',sel:'default/primary/success/danger/warning/dashed/text',def:'default'},
            {attr:'uploadTy',type:'String',talk:'上传文件类型',sel:'default/drop',def:'default'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



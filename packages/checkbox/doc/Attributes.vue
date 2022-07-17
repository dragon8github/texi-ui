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
            {attr:'v-model',type:'Array',talk:'多选绑定值',sel:'——',def:'——'},
            {attr:'size',type:'String',talk:'尺寸大小',sel:'default / small / mini',def:'default'},
            {attr:'options',type:'Array',talk:'多选数据配置，具体见下方 options API',sel:'——',def:'label'},
            {attr:'labelFiled',type:'String',talk:'自定义替换lable的字段名',sel:'——',def:'false'},
            {attr:'valueFiled',type:'String',talk:'自定义替换value的字段名',sel:'——',def:'value'},
            {attr:'inline',type:'Boolean',talk:'是否为行内元素',sel:'——',def:'true'},
            {attr:'customColor',type:'String',talk:'自定义选中颜色色值',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



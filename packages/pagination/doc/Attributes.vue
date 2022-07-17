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
            {attr:'current',type:'Number',talk:'当前页',sel:'——',def:'warn'},
            {attr:'pageSize',type:'Number',talk:'一页显示的数据量',sel:'——',def:'6'},
            {attr:'total',type:'Number',talk:'总共数据量',sel:'——',def:'3'},
            {attr:'continues',type:'Number',talk:'中间连续页码数',sel:'——',def:'5'},
            {attr:'activeColor',type:'String',talk:'选中页的页码图标激活颜色',sel:'——',def:'——'},
            {attr:'showPageSize',type:'Array',talk:'自定义一页显示的数据量',sel:'——',def:'——'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



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
            {attr:'target',type:'String',talk:'触发滚动的元素对象',sel:'——',def:'body'},
            {attr:'visibilityHeight',type:'Number',talk:'当滚动到这个距离时显示回到顶部组件',sel:'——',def:'240'},
            {attr:'right',type:'Number',talk:'backTop组件距离右边的距离',sel:'——',def:'20'},
            {attr:'bottom',type:'Number',talk:'backTop组件距离下边的距离',sel:'——',def:'40'}
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



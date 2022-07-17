<template>
  <tTable :options='options' size='small'></tTable>
</template>

<script setup>
import { reactive } from "vue"

const state=reactive({
    options:{
        fileds:[
            {field:'name',title:'事件名',align:'center'},
            {field:'talk',title:'说明',align:'center',width:'350px'},
            {field:'attr',title:'回调参数',align:'center'},
            {field:'exm',title:'示例',align:'center',width:'350px'}
        ],
        datas:[
            {name:'input',talk:'input值变化时触发',attr:'value',exm:'input=(value)=>{}'},
            {name:'change',talk:'用户获得焦点并按下回车时触发',attr:'event',exm:'change=(e)=>{}'},
            {name:'focus',talk:'获取焦点时触发',attr:'event',exm:'focus=(e)=>{}'},
            {name:'blur',talk:'失去焦点时触发',attr:'event',exm:'blur=(e)=>{}'},
            {name:'clear',talk:'可以清空的input点击清空按钮时触发',attr:'event',exm:'clear=(e)=>{}'},
        ]
    }
})
const {options}=state
</script>
<style lang="scss" scoped>

</style>



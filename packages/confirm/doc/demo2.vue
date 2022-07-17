<template>
    <t-button type='primary' @click="showMessage">点击触发</t-button>
</template>

<script setup>
import Confirm from '../index.js'
import { getCurrentInstance } from 'vue'
// 以上为本地示例，请使用import { Confirm, Message } from "t-ui";引入
//instance.proxy相当于vue2中的this
const instance=getCurrentInstance()
const showMessage=()=>{
    Confirm({title:'警告',text:'确认操作吗?',closeShow:false}).then(()=>{
        instance.proxy.$message({type:'success',text:'你已经确认操作'})
    },()=>{
        instance.proxy.$message({text:'你已经取消操作'})
    })
}
</script>

<style>

</style>
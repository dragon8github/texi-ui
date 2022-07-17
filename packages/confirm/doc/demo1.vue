<template>
    <t-button type='primary' @click="showMessage">点击触发</t-button>
</template>

<script setup>
import Confirm from '../index.js'
import Message from '../../message/index.js'
// 以上为本地示例，请使用import { Confirm, Message } from "t-ui";引入
const showMessage=()=>{
    Confirm({title:'警告',text:'确认操作吗?'}).then(()=>{
        Message({type:'success',text:'你已经确认操作'})
    },()=>{
        Message({text:'你已经取消操作'})
    })
}
</script>

<style>

</style>
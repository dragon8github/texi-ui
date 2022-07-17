<template>
    <t-space>
        <t-button type='primary' @click="showMessage1">点击触发</t-button>
        <t-button type='primary' @click="showMessage2">点击触发</t-button>
    </t-space>
</template>

<script setup>
import Confirm from '../index.js'
import { getCurrentInstance } from 'vue'
// 以上为本地示例，请使用import { Confirm, Message } from "t-ui";引入
//instance.proxy相当于vue2中的this
const instance=getCurrentInstance()
const showMessage1=()=>{
    Confirm({
        title: "提示信息",
        text: "确认2022-02-02是您的生日吗？",
        icon: "t-icon-calendar",
        submitText: "是的",
        cancelText: "不是",
        closeShow: false,
    }).then(()=>{
        instance.proxy.$message({type:'success',text:'你已经确认操作'})
    },()=>{
        instance.proxy.$message({text:'你已经取消操作'})
    })
}
const showMessage2=()=>{
    Confirm({
        title: "重要信息",
        text: "飞船将于3.0pm降落!!",
        icon: "t-icon-delete",
        submitText: "收到",
        cancelShow:false,
        closeShow: false,
    }).then(()=>{
        instance.proxy.$message({type:'success',text:'你已经确认操作'})
    },()=>{
        instance.proxy.$message({text:'你已经取消操作'})
    })
}
</script>

<style>

</style>
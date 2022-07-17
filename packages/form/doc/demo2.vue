<template>
    <tForm :model='model' label-width='100px' :inline='true'>
        <tFormItem label='用户名'>
            <tInput v-model="model.name" placeholder="请输入用户名"></tInput>
        </tFormItem>
        <tFormItem label='选择'>
            <tSwitch v-model="model.value"></tSwitch>
        </tFormItem>
        <tFormItem label='国家'>
            <tCheckbox v-model="model.checkboxVal" :options='checkOptions'></tCheckbox>
        </tFormItem>
    </tForm>
</template>

<script setup>
import { reactive } from "vue";

const model=reactive({
    name:'',
    value:true,
    checkboxVal:[]
})

const state2=reactive({
    checkOptions:[
      { label: "中国", value: "zhongguo" },
      { label: "英国", value: "yingguo" },
      { label: "德国", value: "deguo" }
    ]
  })
  const {checkOptions}=state2
</script>

<style>

</style>
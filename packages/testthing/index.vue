<template>
    <div class="t-input">
        <input class="file-input" ref="inRef" type="file" @change='inpChange' :multiple='multiple'>
        <tButton v-if="uploadTy=='default'" @click="fileChange" :type='btnType'>{{label}}</tButton>
        <div v-if="uploadTy=='drop'" ref="areaRef" class="area-box" :class="{activeArea:isActive}"><span>拖拽上传</span></div>
    </div>  
</template>

<script>
export default {
    name:'dddd'
}
</script>
<script setup>
import { onMounted, reactive, ref } from 'vue'
const emit=defineEmits(['change','update:files'])
const props=defineProps({
  multiple:Boolean,
  label:{
    type:String,
    default:'选择文件'
  },
  btnType:{
    type:String,
    default:'default'
  },
  uploadTy:{
    type:String,
    default:'default'
  }
})

const inRef=ref(null)
const areaRef=ref(null)
const fileList=reactive([])
const isActive=ref(false)

const fileChange=()=>{
    inRef.value.click()
}
const inpChange=(e)=>{
    fileList.value.unshift(...e.target.files)
    emit('change',fileList)
}

onMounted(()=>{
    if(props.uploadTy=='drop'){
        let dropArea=areaRef.value
        dropArea.addEventListener('drop',(e)=>{
            e.stopPropagation();
            e.preventDefault()
            fileList.value.unshift(...e.dataTransfer.files)
            emit('change',fileList)
            isActive.value=false
        })
        dropArea.addEventListener('dragenter',(e)=>{
            e.stopPropagation();
            e.preventDefault()
            isActive.value=true
        })
        dropArea.addEventListener('dragleave',(e)=>{
            e.stopPropagation();
            e.preventDefault()
            isActive.value=false
        })
        dropArea.addEventListener('dragover',(e)=>{
            e.stopPropagation();
            e.preventDefault()
            isActive.value=true
        })
    }
})
</script>

<style lang="scss" scoped>
    .file-input{
        display: none;
    }
    .area-box{
        width: 200px;
        height: 200px;
        border: 1px solid #000;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
            border-color: blue;
        }
        span{
            font-size: 13px;
            color: rgb(159, 155, 155);
        }
    }
    .activeArea{
        border-color: blue;
    }
</style>
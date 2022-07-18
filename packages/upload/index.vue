<template>
  <div class="t-upload">
    <input type="file" class="file-input" ref="inRef" @change="inpChange" :multiple='multiple'>
    <tButton v-if="uploadTy=='default'" @click="fileChange" :type='btnType'>{{label}}</tButton>
    <div v-if="uploadTy=='drop'" ref="areaRef" class="area-box" :class="{activeArea:isActive}"><span>拖拽上传</span></div>
    <!-- <div class="fileList-box">
      <li v-for="(item,index) in fileList" :key="index">
        <span>{{item.name}}</span>
        <span class="delete-span" @click="deleteFile(index)">删除</span>
      </li>
    </div> -->
  </div>
</template>

<script>
export default {
  name:'tUpload'
}
</script>
<script setup>
import { nextTick, onMounted, reactive, ref } from 'vue'
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
const emit=defineEmits(['change','update:files'])
import tButton from '../button/index.vue'
const inRef=ref(null)
const areaRef=ref(null)
const fileList=reactive([])
const isActive=ref(false)
const fileChange=()=>{
  inRef.value.click()
}
const inpChange=(e)=>{
  fileList.unshift(...e.target.files)
  emit('change',fileList)
}
const deleteFile=(index)=>{
  fileList.splice(index,1)
}
onMounted(()=>{
  if(props.uploadTy=='drop'){
  let dorpArea=areaRef.value;
  // 松开鼠标时触发
  dorpArea.addEventListener('drop',(e)=>{
    e.stopPropagation();
    e.preventDefault()
    fileList.unshift(...e.dataTransfer.files)
    emit('change',fileList)
    isActive.value=false
  },false);
  //离开该区域时触发
  dorpArea.addEventListener('dragleave',(e)=>{
    e.stopPropagation();//阻止冒泡
    e.preventDefault()//阻止浏览器读取文件
    isActive.value=false
  });
  //加入该区域时触发
  dorpArea.addEventListener('dragenter',(e)=>{
    e.stopPropagation();
    e.preventDefault()
    isActive.value=true
  });
  //该区域时触发移动鼠标
  dorpArea.addEventListener('dragover',(e)=>{
    e.stopPropagation();
    e.preventDefault()
    isActive.value=true
  });
  }
})
</script>
<style lang="scss" scoped>
  .file-input{
    display: none;
  }
  .fileList-box{
    li{
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .delete-span{
        cursor: pointer;
        padding-right: 100px;
        &:hover{
          color: rgb(243, 36, 36);
        }
      }
    }
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



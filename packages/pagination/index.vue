<template>
  <div class="t-pagination">
    <a href="javascript:;" :class="{'disabled':current===1}" @click="changePageNo(current-1)">上一页</a>
    <a href="javascript:;" v-if="startNumAndEndNum.star>1" @click="changePageNo(1)" :class="{'active':current===1,'activeColor':activeColor==''?false:true}">1</a>
    <span v-if="startNumAndEndNum.star>2">...</span>
    <template v-for="(page,index) in startNumAndEndNum.end" :key="index">
      <a href="javascript:;" v-if="page>=startNumAndEndNum.star" @click="changePageNo(page)" :class="{'active':current===page,'activeColor':activeColor==''?false:true}">{{page}}</a>
    </template>
    <span v-if="startNumAndEndNum.end<totalPage-1">...</span>
    <a href="javascript:;" v-if="startNumAndEndNum.end<totalPage" @click="changePageNo(totalPage)" :class="{'active':current===totalPage,'activeColor':activeColor==''?false:true}">{{totalPage}}</a>
    <a href="javascript:;" :class="{'disabled':current===totalPage}" @click="changePageNo(current+1)">下一页</a>
    <span class="showPaSize" v-if="showPageSize.length">
      <tSelect :options='showPaSize' v-model="pVal" width='50px' height='40px' @change='change'></tSelect>
    </span>
    <a class="totalDataNum" href="javascript:;">总共{{total}}条数据</a>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name:'tPagination'
}
</script>
<script setup>
const emit=defineEmits(['changePaNo','update:current','change'])
const props=defineProps({
  current:{
    type:Number,
    default:6
  },
  pageSize:{
    type:Number,
    default:3
  },
  total:{
    type:Number,
    default:31
  },
  //中间连续页码数
  continues:{
    type:Number,
    default:5
  },
  activeColor:{
    type:String,
    default:''
  },
  showPageSize:{
    type:Array,
    default:()=>[]
  }
})

const totalPage=computed(()=>{
  return Math.ceil(props.total/props.pageSize)
})

const startNumAndEndNum=computed(()=>{
  let star=-1,end=-2
  if(props.continues>totalPage.value){
    star=1
    end=totalPage.value
  }else{
    star=props.current-Math.floor(props.continues/2)
    end=props.current+Math.floor(props.continues/2)
    if(star<1){
      star=1
      end=props.continues
    }
    if(end>totalPage.value){
      star=totalPage.value-props.continues+1
      end=totalPage.value
    }
  }
  return {star,end}
})

const changePageNo=(paNo)=>{
  if(paNo<1||paNo>totalPage.value)return
  emit('changePaNo',paNo)
  //下面命令为配合效果而设定
  emit('update:current',paNo)
}

const showps=[]
const showPaSize=computed(()=>{
  props.showPageSize.forEach(i=>{
    showps.push({label:i})
  })
  return showps
})
const pVal=ref('')
const change=(item)=>{
  emit('change',item.label)
}
</script>
<style lang="scss" scoped>
  .t-pagination{
    display: flex;
    justify-content: center;
    padding: 30px;
    position: relative;
    a{
      text-decoration: none;
      color: #333;
      outline: none;
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #e4e4e4;
      border-radius: 4px;
      margin-right: 10px;
      height: 20px;
      &:hover{
        color: #0e80eb;
      }
      &.active{
        color: #fff;
        background: #0e80eb;
        border-color: #0e80eb;
      }
      &.active.activeColor{
        color: #fff;
        background: v-bind('props.activeColor');
        border-color: v-bind('props.activeColor');
      }
      &.disabled{
        cursor: not-allowed;
        opacity: 0.4;
        &:hover{
          color: #333;
        }
      }
    }
    .totalDataNum{
      cursor: not-allowed;
    }
    span{
      margin-right: 10px;
    }
    .showPaSize{
      background-color: transparent;
      height: 33px;
      

    }
  }
</style>



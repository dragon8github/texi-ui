<template>
  <div :class="`t-checkbox-${size}`">
    <label class="t-checkbox-label" :class="[{'t-checkbox-label-active':item.checked},item.checked?item.disabled?'t-checkbox-label-active-disabled':'':item.disabled?'t-checkbox-label-disabled':'']" v-for="(item,index) in options" :key="index" @click="checkChange(item,index)" :style="{'display':inline?'inline-block':'table','margin-bottom':inline?'0':size=='small'?'8px':size=='mini'?'6px':'10px'}">
      <span class="t-checkbox-selectbox" :style="{'border-color':customColor==''?'':item.disabled?'':item.checked?customColor:'','background':customColor==''?'':item.disabled?'':item.checked?customColor:''}"></span>
      <span :style="{'color':customColor==''?'':item.disabled?'':item.checked?customColor:''}">{{item[labelFiled]}}</span>
    </label>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name:'tCheckbox'
}
</script>
<script setup>
  const emit=defineEmits(['update:modelValue','change'])
  const props=defineProps({
    modelValue:{
      type:Array,
      default:()=>[]
    },
    size:{
      type:String,
      default:'default'
    },
    options:{
      type:Array,
      default:()=>[]
    },
    labelFiled:{
      type:String,
      default:"label"
    },
    valueFiled:{
      type:String,
      default:"value"
    },
    inline:{
      type:Boolean,
      default:true
    },
    customColor:String
  })
  const checkOptions=ref(props.options || [])
  checkOptions.value.forEach(item=>{
    item.checked=false
    props.modelValue.forEach(item1=>{
      if(item[props.valueFiled]===item1){
        item.checked=true
      }
    })
  })
  const checkChange=(item,index)=>{
    let checkData=[]
    if(!item.disabled){
      item.checked=!item.checked
    }
    checkOptions.value.forEach(item=>{
      if(item.checked){
        checkData.push(item[props.valueFiled])
      }
    })
    emit('update:modelValue',checkData)
    emit('change',checkData)
  }
</script>
<style lang="scss" scoped>
  .t-checkbox-default{
    width: auto;
    height: auto;
    overflow: hidden;
    .t-checkbox-label{
      width: auto;
      height: auto;
      overflow: hidden;
      display: inline-block;
      line-height: 20px;
      cursor: pointer;
      font-size: 14px;
      margin-right: 15px;
      user-select: none;
      span{
        float: left;
        color: #505050;
        font-size: 14px;
      }
      .t-checkbox-selectbox{
        width: 14px;
        height: 14px;
        border-radius: 4px;
        display: inline-block;
        border: 1px solid #b9b9b9;
        margin: 3.2px 6px 0 0;
        background: #fff;
        position: relative;
        box-sizing: border-box;
        transition: transform 0.15s ease-in;
        &::after{
          box-sizing: content-box;
          content: "";
          display: inline-block;
          width: 3px;
          height: 7.5px;
          transform: rotate(45deg);
          border-style: solid;
          border-color: #fff;
          position: absolute;
          border-width: 0 2px 2px 0 ;
          left: 4px;
          transition: transform 0.15s ease-in;
        }
      }
    }
    .t-checkbox-label-active{
      span{
        color: #0e80eb;
      }
      .t-checkbox-selectbox{
        border:1px solid #0e80eb;
        background: #0e80eb;
      }
    }
    .t-checkbox-label-active-disabled{
      cursor: no-drop;
      span{
        color: #b4b6b9;
      }
      .t-checkbox-selectbox{
        border:1px solid #b9b9b9;
        background: #ebebeb;
        &::after{
          border-color: #999999;
        }
      }
    }
    .t-checkbox-label-disabled{
      cursor: no-drop;
      span{
        color: #b4b6b9;
      }
      .t-checkbox-selectbox{
        border:1px solid #b9b9b9;
        background: #ebebeb;
        &::after{
          border-color: #fff;
        }
      }
    }
  }

  // small

.t-checkbox-small{
  width: auto;
  height:auto;
  overflow: hidden;
  .t-checkbox-label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 13px;
    margin-right: 15px;
    user-select: none;
    span{
      float: left;
      color: #505050;
      font-size: 13px;
    }
    .t-checkbox-selectbox{
      width:13px;
      height: 13px;
      border-radius: 3px;
      display: inline-block;
      border:1px solid #b9b9b9;
      margin: 3.5px 8px 0 0;
      background: #fff;
      position: relative;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;
      &::after{
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 2.5px;
        height: 6.5px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width:   0 2px 2px 0 ;
        position: absolute;
        left:3px;
        transition: transform 0.15s ease-in;
      }
    }
  }
  .t-checkbox-label-active{
    span{
      color:#0e80eb
    }
    .t-checkbox-selectbox{
      border:1px solid #0e80eb;
      background: #0e80eb;
      &::after{
        border-color: #fff;
      }
    }
  }
  .t-checkbox-label-active-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .t-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #999999;
      }
    }
  }
  .t-checkbox-label-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .t-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #ebebeb;
      }
    }
  }
}

// mini

.t-checkbox-mini{
  width: auto;
  height:auto;
  overflow: hidden;
  .t-checkbox-label{
    width: auto;
    height: auto;
    overflow: hidden;
    display: inline-block;
    line-height: 20px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 14px;
    user-select: none;
    span{
      float: left;
      color: #505050;
      font-size: 12px;
    }
    .t-checkbox-selectbox{
      width:12px;
      height: 12px;
      border-radius: 2px;
      display: inline-block;
      border:1px solid #b9b9b9;
      margin: 4.3px 8px 0 0;
      background: #fff;
      position: relative;
      box-sizing: border-box;
      transition: transform 0.15s ease-in;
      &::after{
        box-sizing: content-box;
        content: "";
        display: inline-block;
        width: 2px;
        height: 6px;
        transform: rotate(45deg);
        border-style: solid;
        border-color: #fff;
        border-width:   0 2px 2px 0 ;
        position: absolute;
        left:3px;
        transition: transform 0.15s ease-in;
      }
    }
  }
  .t-checkbox-label-active{
    span{
      color:#0e80eb
    }
    .t-checkbox-selectbox{
      border:1px solid #0e80eb;
      background: #0e80eb;
      &::after{
        border-color: #fff;
      }
    }
  }
  .t-checkbox-label-active-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .t-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #999999;
      }
    }
  }
  .t-checkbox-label-disabled{
    cursor: no-drop;
    span{
      color:#b4b6b9
    }
    .t-checkbox-selectbox{
      border:1px solid #b9b9b9;
      background: #ebebeb;
      &::after{
        border-color: #ebebeb;
      }
    }
  }
}
</style>



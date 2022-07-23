<template>
  <div :class="tClass">
    <i :class="['left-icon',leftIcon]" v-if="!showPassword&&leftIcon!=''"></i>
    <input :type="showPassword?(passwordValue?'text':'password'):type" v-model='showValue' @input="input" @change="change" @focus="focus" @blur="blur" :disabled='disabled' :clearable='clearable' :readonly='readonly' :placeholder="placeholder">
    <i :class="['right-icon',rightIcon]" v-if="!showPassword&&rightIcon!=''"></i>
    <span class="clear-icon" :style="clearStyle" @click="clearInput"><i class="t-icon-circle-close"></i></span>
    <span class="clear-icon" @click="handlePassword" v-if="showPassword"><i class="t-icon-view"></i></span>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
export default {
  name:'tInput'
}
</script>
<script setup>
  const emit=defineEmits(['update:modelValue','input','change','focus','blur','clear'])
  const props=defineProps({
    type:{
      type:String,
      default:'text'
    },
    leftIcon:{
      type:String,
      default:""
    },
    rightIcon:{
      type:String,
      default:""
    },
    modelValue:String | Number,
    disabled:Boolean,
    clearable:Boolean,
    showPassword:Boolean,
    readonly:Boolean,
    placeholder:String,
  })
  const input=(e)=>{
    emit('update:modelValue',e.target.value)
    emit('input',e.target.value)
  }
  const change=(e)=>{
    emit('change',e)
  }
  const focus=(e)=>{
    emit('focus',e)
  }
  const blur=(e)=>{
    emit('blur',e)
  }
  const tClass=computed(()=>{
    return[
      't-input',props.disabled?'t-input-disabled':'',
      props.leftIcon!=''?'t-input-left-icon':!props.clearable?props.rightIcon!=""?'t-input-right-icon':'':'',
      props.showPassword?(props.leftIcon==''&&props.rightIcon==""&&!props.clearable)?'t-input-right-icon':'':'',
      props.clearable?(props.leftIcon==''&&props.rightIcon==""&&!props.showPassword)?'t-input-right-icon':'':''
      ]
  })
  const clearStyle=computed(()=>{
    return[{
      'display':props.clearable?props.modelValue?'block':'none':'none'
    }]
  })
  // const clearInput=()=>{
  //   emit('update:modelValue','')
  // }

  const showValue=ref('')
  const clearInput=()=>{
    emit('update:modelValue','')
    emit('clear')
  }
  watch(()=>props.modelValue,()=>{
    showValue.value=props.modelValue
  },{immediate:true})

  const passwordValue=ref(false)
  const handlePassword=()=>{
    passwordValue.value=!passwordValue.value
  }
</script>

<style lang="scss" scoped>
.t-input{
  display: inline-block;
  min-width: 250px;
  position: relative;
  input{
    outline: none;
    border: 1px solid $boder;
    // line-height: 1;
    padding: 10px 8px;
    min-width: 250px;
    font-size: 14px;
    color: $color;
    border-radius: 4px;
    transition: all 0.1s ease;
    &:focus{
      border-color: $primary;
    }
  }
  .clear-icon{
    position: absolute;
    right: 6px;
    top: 9px;
    cursor: pointer;
  }
  .left-icon{
    position: absolute;
    left:10px;
    top:11px;
    color:#c6c8cc;
  }
  .right-icon{
    position: absolute;
    right:-33px;
    top:11px;
    color:#c6c8cc;
  }
}
.t-input-disabled{
  input{
    cursor: no-drop;
  }
}
.t-input-left-icon{
  input{
    padding: 10px 10px 10px 30px;
  }
}
.t-input-right-icon{
  input{
    padding: 10px 30px 10px 10px;
  }
}

</style>
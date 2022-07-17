<template>
  <div class="pre-code-box">
    <transition name="slide-fade">
        <pre v-if="showCode" class="language-html" v-highlight>
            <code class="language-html">{{sourceCode}}</code>
        </pre>
    </transition>
    <div class="showCode" @click="showOrHideCode">
        <span>{{showCode?'隐藏代码':'显示代码'}}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

const props=defineProps({
    compName:{
        type:String
    },
    demoName:{
        type:String
    }
})
const showCode=ref(false)
const showOrHideCode=()=>{
    showCode.value=!showCode.value
}

const sourceCode=ref("")
async function getSourceCode(){
    sourceCode.value=(await import(/* @vite-ignore */ `/packages/${props.compName}/doc/${props.demoName}.vue?raw`)).default
}
onMounted(()=>{
    getSourceCode()
})

</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box{
    margin:10px 10px 70px 10px;
    .showCode{
        width: 100%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        background: #f9f9f9;
        color: #505050;
        cursor: pointer;
        box-shadow: 0 16px 15px rgb(0 0 0 / 10%);
        &:hover{
            color: #0e80eb;
        }
    }
}
</style>
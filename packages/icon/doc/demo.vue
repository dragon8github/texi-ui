<template>
    <p class="titlep">所有图标</p>
    <div>
        <tInput v-model="keywords" leftIcon="t-icon-search" placeholder='输入图标关键词进行搜索' @input='search'></tInput>
    </div>
    <div class="iconListBox">
        <ul>
            <li v-for="(item,index) in iconListData" :key="index">
                <i :class="item.className"></i>
                <span>{{item.className}}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import iconList from '@/const/iconList.js'
import { ref } from "vue";

const keywords=ref('')
const iconListData=ref(iconList)

const search=(name)=>{
    iconListData.value=[]
    iconList.forEach(item => {
        if(item.className.indexOf(name)!=-1){
            iconListData.value.push(item)
        }
    });
}

</script>

<style lang="scss" scoped>
    .iconListBox{
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-top: 2vh;
        ul{
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto;
            overflow: hidden;
            li{
                list-style: none;
                width: 10.5vw;
                height: 140px;
                float: left;
                padding: 1vw;
                box-sizing: border-box;
                text-align: center;
                transition: all 0.15s ease;
                border: 1px solid #fff;
                cursor: pointer;
                border-radius: 4px;
                i{
                    font-size: 40px;
                    color: #555;
                    display: block;
                    margin-top: 1vh;
                }
                span{
                    margin-top: 1vh;
                    display: inline-block;
                    font-size: 0.9vw;
                    color: #555;
                    margin-bottom: 1vh;
                }
                &:hover{
                    border: 1px solid rgba(#0e80eb,0.5);
                    i{
                        color: #0e80eb;
                    }
                    span{
                        color: #0e80eb;
                    }
                }
            }
        }
    }
</style>
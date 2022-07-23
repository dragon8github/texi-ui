<template>
  <div class="container">
      <div class="left-menu">
        <li v-for="(item,index) in menuList[0].children" :key="index" :class="{active:currIndex===index}" @click="switchMenu(item,index)">{{item.name}}</li>
      </div>
      <main class="tuirightview">
        <div class="router-view">
          <router-view></router-view>
        </div>
      </main>
  </div>
  <tBackTop target='.tuirightview'></tBackTop>
</template>

<script>
import menuList from '@/router/modules/page.js'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
export default {
  name:'Home',
  setup(props) {
    const currIndex=ref(0)
    const router=useRouter()
    const switchMenu=(item,index)=>{
      currIndex.value=index
      router.push({
        name:item.name
      })
    }
    return{menuList,currIndex,switchMenu}
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  .left-menu{
    width: 350px;
    height: auto;
    overflow-y: auto;
    border-right: 1px solid #d5d4d4;
    &::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 4px;
      background: #b8b8bb;
    }
    &::-webkit-scrollbar-track{
      border-radius: 0px;
      background: #fff;
    }
    li{
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    li.active{
      border-right: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgba(14,128,235,.1);
    }
  }
  main {
    width: calc(100% - 317px);
    flex: 1;
    height: 100%;
    padding: 0 calc(2vw + 100px) 0 2vw;
    overflow-x: hidden;
    overflow-y: auto;
    word-wrap: break-word;
  }
  main::-webkit-scrollbar {
    width: 6px;
    height: 2px;
  }

  main::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #b8b8bb;
  }

  main::-webkit-scrollbar-track {
    border-radius: 0px;
    background: #fff;
  }
  .tuirightview{
    flex: 1;
    height: auto;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>
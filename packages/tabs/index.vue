<script lang='jsx'>
import {provide,ref} from 'vue'
export default {
  name:'tTabs',
  props:{
    modelValue:{
      type:[String,Number],
      default:''
    }
  },
  setup(props,{emit}){
    const activeName=ref(props.modelValue)
    const tabClick=(name,index)=>{
      activeName.value=name
      emit('update:modelValue',activeName.value)
      emit('tab-click',{name,index})
    }
    provide('activeName',activeName)
    return {activeName,tabClick}
  },
  render(){
    const panels=this.$slots.default()
    // 针对v-for遍历TTabsPanel出现的情况
    const dunamicPanels=[]
    panels.forEach(item=>{
      if(item.type.name==='TTabsPanel'){
        dunamicPanels.push(item)
      }else{
        item.children.forEach(item=>{
          dunamicPanels.push(item)
        })
      }
    })

    const nav=<nav>{
      dunamicPanels.map((panel,i)=>{
        return <a href='javascript:;' onClick={()=>this.tabClick(panel.props.name,i)} class={{active:panel.props.name==this.modelValue}}>{panel.props.label}</a>
      })
    }</nav>
    //<div class='t-tabs'>{[nav,content]}</div>
    return <div class='t-tabs'>{[nav,dunamicPanels]}</div>
  }
}
</script>
<script setup>

</script>
<style lang="scss" scoped>
  .t-tabs {
    background: #fff;
    border: 1px solid #f0f0f0;
    padding: 10px 15px;
    > nav {
      height: 40px;
      line-height: 40px;
      margin-bottom: 10px;
      display: flex;
      border-bottom: 1px solid #f5f5f5;
      > a {
        text-decoration: none;
        width: 110px;
        border-right: 1px solid #f5f5f5;
        text-align: center;
        font-size: 16px;
        color: #333;

        &.active {
          border-bottom: 2px solid red;
          background: #fff;
        }
      }
    }
  }
</style>



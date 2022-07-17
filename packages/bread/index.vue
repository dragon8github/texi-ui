<script lang='jsx'>
import {h} from 'vue'
export default {
  name:'tBread',
  props:{
    showIcon:{
      type:String,
      default:''
    }
  },
  render(){
    const items=this.$slots.default()
    const dymanicItems=[]
    items.forEach((item,index)=>{
      dymanicItems.push(item)
      if(index<(items.length-1)){
        if(this.showIcon==''){
          dymanicItems.push(h('i',{class:'t-icon-arrow-right'}))
        }else{
          dymanicItems.push(h('i',{class:this.showIcon}))
        }
      }
    })
    return h('div',{class:'t-bread'},dymanicItems)
  }
}
</script>
<script setup>

</script>
<style lang="scss" scoped>
  .t-bread{
    display: flex;
    padding: 25px 8px;
    i{
      font-size: 12px;
      margin-left: 3px;
      margin-right: 3px;
      line-height: 22px;
      vertical-align: middle;
    }
  }
  :deep(.t-bread-item){
      a{
        text-decoration: none;
        color: #666;
        transition: all 0.4s;
        &:hover{
          color: aqua;
        }
      }
    }
</style>



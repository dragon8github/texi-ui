<template>
  <div :class="`t-table-${size}`">
    <table>
      <thead v-if="showHeader">
        <tr>
          <th v-for="(x,n) in options.fileds" :key="n" :style="[headStyle,{'text-align':x.align}]">
            <slot :name="'head-'+x.field" :scope='x' v-if="$slot['head-'+x.field]"></slot>
            <div v-else>{{x.title}}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v,i) in options.datas" :key="i">
          <td v-for="(m,j) in options.fileds" :key="j" :style="[rowStyle,{width:options.fileds[j].width?(options.fileds[j].width):'','text-align':options.fileds[j].align}]">
            <slot :name='options.fileds[j].field' v-if="$slot[options.fileds[j].field]" :scope='{row:v,rowIndex:i,cellIndex:j}'></slot>
            <div v-else>{{options.datas[i][options.fileds[j].field]}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name:'tTable'
}
</script>
<script setup>
import { useSlots } from 'vue'
const props=defineProps({
  options:{
    type:Object,
    default:()=>{
      return {
        fileds:[],
        datas:[]
      }
    }
  },
  size:{
    type:String,
    default:"default"
  },
  showHeader:{
    type:Boolean,
    default:true
  },
  headStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  rowStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  }
})
const $slot=useSlots()
</script>
<style lang="scss" scoped>
  .t-table-default{
    width: 100%;
    height: auto;
    overflow: hidden;
    table{
      width: 100%;
      border-radius: 2px;
      box-sizing: border-box;
      border-spacing: 0;
      thead{
        th{
          padding: 14px 12px;
          box-sizing: border-box;
          text-align: left;
          font-size: 14px;
          line-height: 30px;
          color: #646468;
          font-weight: 550;
          border: 1px solid #f0f0f0;
          border-right: 0;
          background: #fafafa;
        }
        th:last-child{
          border-right: 1px solid #f0f0f0;
        }
      }
      tbody{
        tr{
          td{
            padding: 13.5px 12px;
            box-sizing: border-box;
            text-align: left;
            line-height: 20px;
            color: #505050;
            font-weight: 500;
            font-size:14px;
            border:1px solid #f0f0f0;
            border-right:0;
            border-top:0;
          }
          td:last-child{
            border-right:1px solid #f0f0f0;
          }
          &:hover{
            background:rgba(240,240,240,.2)
          }
        }
      }
    }
  }

  .t-table-small{
    width: 100%;
    height: auto;
    overflow: hidden;
    table{
      width: 100%;
      border-radius: 2px;
      box-sizing: border-box;
      border-spacing: 0;
      thead{
        th{
          padding: 10px;
          box-sizing: border-box;
          text-align: left;
          font-size: 14px;
          line-height: 20px;
          color: #646468;
          font-weight: 550;
          border: 1px solid #f0f0f0;
          border-right: 0;
          background: #fafafa;
        }
        th:last-child{
          border-right: 1px solid #f0f0f0;
        }
      }
      tbody{
        tr{
          td{
            padding: 9.5px 10px;
            box-sizing: border-box;
            text-align: left;
            line-height: 20px;
            color: #505050;
            font-weight: 500;
            font-size:14px;
            border:1px solid #f0f0f0;
            border-right:0;
            border-top:0;
          }
          td:last-child{
            border-right:1px solid #f0f0f0;
          }
          &:hover{
            background:rgba(240,240,240,.2)
          }
        }
      }
    }
  }

  .t-table-mini{
    width: 100%;
    height: auto;
    overflow: hidden;
    table{
      width: 100%;
      border-radius: 2px;
      box-sizing: border-box;
      border-spacing: 0;
      thead{
        th{
          padding: 8px 10px;
          box-sizing: border-box;
          text-align: left;
          font-size: 12px;
          line-height: 18px;
          color: #646468;
          font-weight: 550;
          border: 1px solid #f0f0f0;
          border-right: 0;
          background: #fafafa;
        }
        th:last-child{
          border-right: 1px solid #f0f0f0;
        }
      }
      tbody{
        tr{
          td{
            padding: 7.5px 10px;
            box-sizing: border-box;
            text-align: left;
            line-height: 18px;
            color: #505050;
            font-weight: 500;
            font-size:12px;
            border:1px solid #f0f0f0;
            border-right:0;
            border-top:0;
          }
          td:last-child{
            border-right:1px solid #f0f0f0;
          }
          &:hover{
            background:rgba(240,240,240,.2)
          }
        }
      }
    }
  }
  table{
    -webkit-border-horizontal-spacing: 0px;//垂直间距
    -webkit-border-vertical-spacing: 0px;//水平间距
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    box-sizing: border-box;
    display: table;
    border-collapse: separate;//设置行和单元格的边是否合并概述
    text-indent: initial;//缩进
    border-spacing: 2px;//规定表格的相邻单元格边框之间的距离
    border-color: grey;
  }
</style>



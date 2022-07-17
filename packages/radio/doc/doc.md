<script setup>
import demo1 from  './demo1.vue'
import demo2 from  './demo2.vue'
import demo3 from  './demo3.vue'
import demo4 from  './demo4.vue'
import Attributes from './Attributes.vue'
import Event from './Event.vue'
import OptionsAPI from './OptionsAPI.vue'
import preview from '@/components/preview.vue'

</script>

## Radio单选项

### 基本使用
<demo1/>
<preview compName='radio' demoName='demo1'/>

### 横向纵向排列
<demo2/>
<preview compName='radio' demoName='demo2'/>

### 匹配不同数据
##### 默认 options 接收 label 和 value 作为显示和值绑定，你可以根据 labelFiled 和 valueFiled 来重新确定字段的绑定，更方便的匹配不同格式的数据。
<demo3/>
<preview compName='radio' demoName='demo3'/>

### 自定义颜色
<demo4/>
<preview compName='radio' demoName='demo4'/>

## Attributes 参数
<Attributes/>
<br/>

## Options API说明
<OptionsAPI/>
<br/>

## Event 事件
<Event/>
<br/>

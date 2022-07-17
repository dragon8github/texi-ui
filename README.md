### 快速使用
```
npm install  texi-ui --save
cnpm install  texi-ui --save
```
### 引入
```
import { createApp } from 'vue'
import App from '@/App.vue'
import texiUi from 'texi-ui'
import '../node_modules/texi-ui/dist/style.css'

const app = createApp(App)
app.use(texiUi)
app.mount('#app')
```
### 按需引用
```
import { tButton, tInput } from 'texi-ui'
```
### 愉快开始
```
<t-button>默认按钮</t-buttonn> 
<t-button type="primary">主要按钮</t-button>
```
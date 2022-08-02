import tButton from './button/index.js'
import tInput from './input/index.js'
import tTextarea from './textarea/index.js'
import tSpace from './space/index.js'
import tSelect from './select/index.js'
import tRadio from './radio/index.js'
import tTree from './tree/index.js'
import tUpload from './upload/index.js'
import tDialog from './dialog/index.js'
import tSwitch from './switch/index.js'
import tCheckbox from './checkbox/index.js'
import Message from './message/index.js'
import Confirm from './confirm/index.js'
import tCarousel from './carousel/index.js'
import tPagination from './pagination/index.js'
// import tTabs from './tabs/index.js'
import '../src/assets/icons/icon.scss'
import tabAndTabpanel from './tabs/index.js'
import breadAndBreadItem from './bread/index.js'
import tSkeleton from './skeleton/index.js'
import tBackTop from './backtop/index.js'
import tDrawer from './drawer/index.js'
// import formAndFormItem from './form/index.js'
import formAndFormItem from './form/index.js'
const {tForm,tFormItem}=formAndFormItem
import tTable from './table/index.js'
const components=[tButton,tInput,tTextarea,tSpace,tSelect,tRadio,tTree,tUpload,tDialog,tSwitch,tCheckbox,tCarousel,tPagination,tabAndTabpanel,breadAndBreadItem,tSkeleton,tBackTop,tForm,tFormItem,tDrawer,tTable]

const install=app=>{
    components.forEach(item=>{
        app.use(item)
    })
    //原型挂载全局方法(针对vue2，通过this.$message调用)，vue3中setup用不了this则直接导入
    //vue3中使用instance.proxy.$message相当于vue2中this
    app.config.globalProperties.$message=Message
    app.config.globalProperties.$confirm=Confirm
}
const TUI={
    install
}
export {tButton,tInput,tTextarea,tSpace,tSelect,tRadio,tTree,tUpload,tDialog,tSwitch,tCheckbox,tCarousel,tPagination,tabAndTabpanel,breadAndBreadItem,tSkeleton,tBackTop,tForm,tFormItem,tDrawer,tTable,Message,Confirm}
export default TUI
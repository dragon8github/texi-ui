import tForm from './index.vue'
import tFormItem from './form-item.vue'
// const formAndFormItem=app=>{
//     app.component(tForm.name,tForm)
//     app.component(tFormItem.name,tFormItem)
// }
// export default formAndFormItem
tForm.install=app=>{
    app.component(tForm.name,tForm)
}
tFormItem.install=app=>{
    app.component(tFormItem.name,tFormItem)
}
export default {tForm,tFormItem}
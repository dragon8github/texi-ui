import tBread from './index.vue'
import tBreadItem from './t-bread-item.vue'
const breadAndBreadItem=app=>{
    app.component(tBread.name,tBread)
    app.component(tBreadItem.name,tBreadItem)
}
export default breadAndBreadItem
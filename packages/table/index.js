import tTable from './index.vue'
tTable.install=app=>{
    app.component(tTable.name,tTable)
}
export default tTable
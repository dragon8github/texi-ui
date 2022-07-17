import tPagination from './index.vue'
tPagination.install=app=>{
    app.component(tPagination.name,tPagination)
}
export default tPagination
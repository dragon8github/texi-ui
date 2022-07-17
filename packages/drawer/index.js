import tDrawer from './index.vue'
tDrawer.install=app=>{
    app.component(tDrawer.name,tDrawer)
}
export default tDrawer
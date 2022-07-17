import tSwitch from './index.vue'
tSwitch.install=app=>{
    app.component(tSwitch.name,tSwitch)
}
export default tSwitch
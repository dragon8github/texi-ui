import tTabs from './index.vue'
import tTabsPanel from './t-tabs-panel.vue'
// tTabs.install=app=>{
//     app.component(tTabs.name,tTabs)
// }
const tabAndTabpanel=(app)=>{
    app.component(tTabs.name,tTabs)
    app.component(tTabsPanel.name,tTabsPanel)
}
export default tabAndTabpanel
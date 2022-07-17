import { createRouter, createWebHashHistory } from 'vue-router'
import routerPage from './modules/page'
const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior (to, from, savedPosition) {
        document.title=to.name;
        if(to.fullPath!=='/'){
            document.querySelector('.tuirightview').scrollTop=0
        }
    },
    routes:[...routerPage]
})
export default router

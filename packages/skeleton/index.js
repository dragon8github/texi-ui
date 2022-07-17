import tSkeleton from './index.vue'
tSkeleton.install=app=>{
    app.component(tSkeleton.name,tSkeleton)
}
export default tSkeleton
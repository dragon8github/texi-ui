import tCarousel from './index.vue'
tCarousel.install=app=>{
    app.component(tCarousel.name,tCarousel)
}
export default tCarousel
import { createApp } from 'vue'

import App from '@/App.vue'
import countTo from '@/components/count-to/count-to.vue'

import Loading from '@/components/Loading/index.vue'
// import Search from '@/components/Search/index.vue'
// import buttonList from '@/components/buttonList/buttonList.vue'
export const app = createApp(App)
app.component('countTo', countTo)
// app.component('Search', Search)
app.component('Loading', Loading)
// app.component('buttonList',buttonList)
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap'
import VueAMapLoca from '@vuemap/vue-amap-loca'
// import VueAMapExtra from '@vuemap/vue-amap-extra'
import '@vuemap/vue-amap/dist/style.css'
initAMapApiLoader({
  key: '611dbf3bb19739711fa4a5c00ee980d2',
  securityJsCode: '4f3d6398502e9d73fe927c65012ade56', // 新版key需要配合安全密钥使用
  Loca: {
    version: '2.0.6'
  } // 如果需要使用loca组件库，需要加载Loca
})
app.use(VueAMap)
app.use(VueAMapLoca)

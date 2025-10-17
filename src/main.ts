import './assets/normalize.css'
import './assets/less/color.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStopTimer } from 'roll_cxs_v3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
console.log('测试', useStopTimer)
// import App from './App.vue'
import router from './router'
// const app = createApp(App)
import { app } from '@/hooks/importJS-public.js'
import { vue3ScrollSeamless } from 'vue3-scroll-seamless'
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('vue3ScrollSeamless', vue3ScrollSeamless)
app.mount('#app')

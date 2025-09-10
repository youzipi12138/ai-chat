import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/var.scss'
import AppIcon from '@/components/app-icon/icons/AppIcon.vue'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// 全局注册组件
app.component('AppIcon', AppIcon)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

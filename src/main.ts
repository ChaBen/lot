import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { router } from './router'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import './assets/style.css'
import App from './App.vue'

createApp(App).use(router).use(createPinia()).use(ElementPlus).mount('#app')

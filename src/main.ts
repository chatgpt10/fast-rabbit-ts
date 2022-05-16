import { createApp } from 'vue'
import App from './App.vue'
// normalize CSS 
import 'normalize.css'
// 公共样式
import '@/assets/styles/common.less'
// 路由
import router from './router'
// Pinia 
import { createPinia } from 'pinia'
// 组件
import XtxUI from './components'
createApp(App).use(router).use(XtxUI).use(createPinia()).mount('#app')

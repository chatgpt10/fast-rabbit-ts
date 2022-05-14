import { createApp } from 'vue'
import App from './App.vue'
// normalize CSS 
import 'normalize.css'
// 公共样式
import '@/assets/styles/common.less'
// 路由
import router from './router'
createApp(App).use(router).mount('#app')

// 同一注册所有的全局组件
import XtxSkeleton from '@/components/skeleton/index.vue'
import carousel from './carousel/index.vue'
import XtxMore from './more/index.vue'
// 面包屑
import Bread from './Bread/index.vue'
import BreadItem from './Bread/Item.vue'
import { App } from 'vue'
export default {
    install(app: App) {
      app.component('XtxSkeleton', XtxSkeleton)
      app.component(carousel.name, carousel)
      app.component('XtxMore', XtxMore)
      // 面包屑
      app.component('XtxBread', Bread)
      app.component('XtxBreadItem', BreadItem)
    },
  }
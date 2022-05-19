// 通过vueuse 封装通用的懒加载数据

// 自定义一些通用的compositions api 
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from "vue";

// 封装通用的数据懒加载api

export function useLazyData(apiFn:()=>void) {
    // 通过ref获取实例
    const target =ref(null)
    const {stop} =useIntersectionObserver(
    // target 是观察目标的dom容器
    // 而且是vue3方式绑定的dom对象
        target,
        ([{isIntersecting}])=>{
            if(isIntersecting) {
                stop()
                apiFn()
            }
        }
    )
    return target
}
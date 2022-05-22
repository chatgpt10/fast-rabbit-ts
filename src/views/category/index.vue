<template>
<div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>分类</XtxBreadItem>
      </XtxBread>
      {{route.params.id}}
    </div>
  </div>
</template>

<script lang='ts' setup name="TopCategory">
import { ref,watch } from "vue";
// 路由
import { useRoute } from 'vue-router';
// pinia数据
import useStore from '@/store';
const route=useRoute();
const { category } = useStore();

// 监听路由变化
watch (
    ()=>route.params.id,
    (value)=>{
        if(route.fullPath===`/category/${value}`)
        category.getTopCategory(value as string)
    },{
        immediate:true,
    }
)
</script>

<style scoped lang="less">

</style>

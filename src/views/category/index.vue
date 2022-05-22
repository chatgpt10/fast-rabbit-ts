<template>
<div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>分类</XtxBreadItem>
      </XtxBread>
    </div>
  </div>
</template>

<script lang='ts' setup name="TopCategory">
// 路由
import { useRoute } from 'vue-router';
// pinia数据
import useStore from '@/store';
const route=useRoute();
const { category } = useStore();
category.getTopCategory(route.params.id as string)
</script>

<style scoped lang="less">

</style>

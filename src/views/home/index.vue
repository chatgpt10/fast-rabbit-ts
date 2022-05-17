<template>
 <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
      <!-- 面板组件 -->
      <HomeNew></HomeNew>
      <!-- 热销 -->
      <HomeHot></HomeHot>
    </div>
  </div>
</template>

<script lang='ts' setup name="Home">
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
</script>

<style scoped lang="less">

</style>

<template>
 <AppTopnav></AppTopnav>
  <AppHeader></AppHeader>
  <main class="app-body">
    <!-- 路由出口 -->
    <RouterView></RouterView>
  </main>
  <AppFooter></AppFooter>
</template>

<script lang='ts' setup name="Layout">
import AppTopnav from './components/app-topnav.vue'
import AppHeader from './components/app-header.vue'
import AppFooter from './components/app-footer.vue'
// pinia 
import useStore from '@/store';
// Pinia数据解构保持响应式
import { storeToRefs } from 'pinia'
// const store = useStore().category;
// console.log(store.money);
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>

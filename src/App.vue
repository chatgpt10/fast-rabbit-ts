<template>
<div>
    <router-view />
    <p>哈哈哈</p>
    <ul>
      <li>123</li>
      <li>456</li>
    </ul>
    <h1>这是大标题</h1>
  </div>
</template>
<script setup lang="ts">
import request from "@/utils/request"
const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test()
</script>
<style lang="less" scoped>
// 必须导入variables.less

/*
@import '@/assets/styles/variables.less';
@import '@/assets/styles/mixins.less';
*/
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>

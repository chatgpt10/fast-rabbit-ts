
<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱" ref="target">
      <template #right><XtxMore path="/" /></template>
      <Transition name="fade">
      <!-- 面板内容 -->
      <ul class="goods-list" v-if="home.newGoodList.length > 0">
        <li v-for="item in home.newGoodList" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
      </ul>
      <div class="home-skeleton" v-else>
        <div
          class="item"
          v-for="i in 4"
          :key="i"
          :style="{ backgroundColor: '#f0f9f4' }"
        >
          <XtxSkeleton bg="#e4e4e4" :width="306" :height="306" />
          <XtxSkeleton bg="#e4e4e4" :width="160" :height="24" />
          <XtxSkeleton bg="#e4e4e4" :width="120" :height="24" />
        </div>
      </div>
      </Transition>
    </HomePanel>
  </div>
</template>
<script lang="ts" setup>
import HomePanel from './home-panel.vue'
import useStore from '@/store';
// 图片拦懒加载
import { useLazyData } from '@/utils/hooks'
const {  home } = useStore();
const target = useLazyData(() => {
  home.getNewList()
})
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>

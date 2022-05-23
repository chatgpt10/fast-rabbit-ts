
<template>
  <ul class="app-header-nav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <!-- 数据从Pinia中渲染,由于初始化list为空数组,即页面首次加载的时候会延迟 -->
    <li v-for="(item) in category.list" :key="item.id" @mousemove="category.show(item.id)"  @mouseleave="category.hide(item.id)">
      <!-- <a href="#">{{item.name}}</a> -->
      <RouterLink :to="`/category/${item.id}`" @click="category.hide(item.id)">{{item.name}}</RouterLink>
      <div class="layer" :class="{ open: item.open }">
      <!-- <div class="layer open" > -->
       <ul>
          <li v-for="i in item.children" :key="i.id">
            <router-link :to="`/category/sub/${i.id}`" @click="category.hide(item.id)">
            <img
                :src="i.picture"
                alt=""
              />
              <p>{{i.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup name="AppHeaderNav">
// pinia 
import useStore from '@/store';
const  {category}  = useStore();
category.getAllCategory()

</script>
<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 新增样式
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
     
    }
  }
}
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
}
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>

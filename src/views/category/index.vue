<template>
<div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>分类</XtxBreadItem>
      </XtxBread>
      <div class="sub-list">
        <h3>全部分类</h3>
       <ul>
            <li v-for="item in topCategory.children" :key="item.id">
            <a href="javascript:;">
                <img :src="item.picture" />
                <p>{{ item.name }}</p>
            </a>
            </li>
        </ul>
        </div>
      <!-- 分类关联商品 -->
        <div class="ref-goods" v-for="item in category.topCategory.children" :key="item.id">
        <div class="head">
            <h3>- {{ item.name }} -</h3>
            <p class="tag">温暖柔软，品质之选</p>
            <XtxMore />
        </div>
        <div class="body">
            <GoodsItem
            v-for="goods in item.goods"
            :key="goods.id"
            :goods="goods"
            />
        </div>
        </div>
    </div>
    
  </div>
</template>

<script lang='ts' setup name="TopCategory">
import { ref,watch } from "vue";
// 路由
import { useRoute } from 'vue-router';
// pinia数据
import useStore from '@/store';
import { storeToRefs } from 'pinia'
import GoodsItem from './components/goods-item.vue';
const route=useRoute();
const { category } = useStore();
const { topCategory } = storeToRefs(category)
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
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
} 
.ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }

</style>

import { defineStore } from 'pinia'
import  request  from '@/utils/request'
import {ApiRes,CategoryItem} from '@/types/data'
import { topCategory } from '../constants'
const defaultCategory = topCategory.map((item)=>{
  return {
    name:item
  }
})
export default defineStore('category', {
  state: () => ({
    list:defaultCategory as CategoryItem[] ,
  }),
  actions :{
    async getAllCategory(){
      const res=await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // 给每一个节点添加opne属性用来控制导航栏的鼠标经过消失与显示的问题
      res.data.result.forEach((item)=>{
        item.open = false;
      })
      this.list=res.data.result
      console.log( this.list);
    },
    // 控制导航栏的显示与隐藏
    show(id:string){
      const category=this.list.find((item) => item.id === id)
      category!.open=true
      console.log("show");
      
    },
    hide(id: string) {
      const category = this.list.find((item) => item.id === id)
      category!.open = false
      console.log("hide",category);

    },
  }
})

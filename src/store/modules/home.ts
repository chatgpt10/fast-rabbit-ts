// 获取类型
import { ApiRes,BannerItem,GoodItem,HotGoods,Brand ,HomeProduct,Special} from "@/types/data";
import  request  from "@/utils/request";
import { defineStore } from "pinia";
export default defineStore('home', {
    state:() => ({
        bannerList:[] as BannerItem[],
        newGoodList:[] as GoodItem[],
        // 热销商品
        hotGoodList:[] as HotGoods[],
        // 品牌数据
        brandList: [] as Brand[],
        // 产品列表
        productList: [] as HomeProduct[],
        // 专题列表
        specialList: [] as Special[],

    }),
    actions : {
        async getBannerList(){
            const res=await request.get<ApiRes<BannerItem[]>>('/home/banner');
            this.bannerList = res.data.result            
        },
        // 获取新的商品列表
        async getNewList(){
            const res=await request.get<ApiRes<GoodItem[]>>('/home/new')            
            this.newGoodList = res.data.result               
        },
        // 热销商品
        async getHotList() {
            const res = await request.get<ApiRes<HotGoods[]>>('/home/hot')
            this.hotGoodList = res.data.result
          },
        // 品牌数据
        async getBrandList() {
            const res = await request.get<ApiRes<Brand[]>>('/home/brand')
            this.brandList = res.data.result
          },
        //   产品列表
          async getProductList() {
                const res = await request.get<ApiRes<HomeProduct[]>>('/home/goods')
                this.productList = res.data.result
          },
        //   专题列表 
        async getSpecialList() {
            const res = await request.get<ApiRes<Special[]>>('/home/special')
            this.specialList = res.data.result
        }
        
    }
})
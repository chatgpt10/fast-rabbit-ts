// 所有接口的通用类型
export interface ApiRes<T> {
    code:string
    msg:string
    result:T
}
export type CategoryGoods = {
    desc: string
    id: string
    name: string
    picture: string
    price: string
  }
// 单个分类的类型
export type CategoryItem = {
    id:string
    name:string
    picture:string
    open:boolean
    children: CategoryItem[]
    goods: CategoryGoods[]
}

// 轮播图的数据
export type BannerItem={
    hrefUrl:string
    id: string
    imgUrl:string
    type: string
}

export type GoodItem={
    desc:string
    id:string
    name:string
    picture:string
    price:string
}
export type HotGoods = {
    id: string
    picture:string
    title:string
    alt:string
}

export type Brand = {
    id: string
    name: string
    nameEn: string
    logo: string
    picture: string
    type?: any
    desc: string
    place: string
}
// 首页商品推荐
export type HomeProduct = {
    id: string
    name: string
    picture: string
    saleInfo: string
    children: {
      id: string
      name: string
    }[]
    goods: {
      id: string
      name: string
      desc: string
      price: string
      picture: string
      discount?: any
      orderNum: number
    }[]
  }
//   专题类型
export type Special = {
    creator: string
    isDelete: number
    createTime: string
    updateTime: string
    id: string
    classificationId: string
    title: string
    summary: string
    lowestPrice: number
    cover: string
    detailsUrl: string
    collectNum: number
    viewNum: number
    replyNum: number
  }
  // 顶级分类类型
export type TopCategory = {
    id: string
    name: string
    picture: string
    children: CategoryItem[]
  }
// 面包屑
  export type SubCategory = {
    id: string
    name: string
    picture?: any
    parentId: string
    parentName: string
    brands: {
      id: string
      name: string
      nameEn: string
      logo: string
      picture: string
      type?: any
      desc: string
      place: string
    }[]
    saleProperties: SaleProperty[]
    goods: GoodItem[]
  }
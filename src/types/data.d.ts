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
// Pinia 主文件
import useCategoryStore from "./modules/category"
import useTestStore from "./modules/test"
import useHomeStore from "./modules/home"
export default function useStore(){
    return {
        category:useCategoryStore(),
        test:useTestStore(),
        home:useHomeStore()
    }
}
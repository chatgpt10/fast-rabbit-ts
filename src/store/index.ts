// Pinia 主文件
import useCategoryStore from "./modules/category"
import useTestStore from "./modules/test"
export default function useStore(){
    return {
        category:useCategoryStore(),
        test:useTestStore()
    }
}
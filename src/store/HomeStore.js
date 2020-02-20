import { observable, action, toJS } from "mobx";
// "Java", "Python", "深度学习"
class HomeStore {
    @observable blogList = []
    @observable categoryList = []
    @observable rankTimeBlogList = []

    @action CategoryList = () =>{
        this.categoryList = ["Python", "Vue", "React"]
        return this.categoryList;
    }

    // 初始化store
    init = (paramsState) => {
        this.blogList = paramsState.blogList;
        this.categoryList = paramsState.categoryList;
        this.rankTimeBlogList = paramsState.rankTimeBlogList;
    }
    // 转换成json字符串
    toJson = () => {
        return {
            blogList: toJS(this.blogList),
            categoryList: toJS(this.categoryList),
            rankTimeBlogList: toJS(this.rankTimeBlogList)
        }
    }

    // 创建时选择挂在的根Store
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}

export default HomeStore;
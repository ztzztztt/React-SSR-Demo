import HomeStore from "./HomeStore";
import UserStore from "./UserStore";

class RootStore {
    constructor(){
        // 将该homeStore挂在在根Store上
        this.homeStore = new HomeStore(this);
        this.userStore = new UserStore(this);
    }

    init = (paramsState) => {
        this.homeStore.init(paramsState.homeStore);
        this.userStore.init(paramsState.userStore);
    }

    toJson = () => {
        return {
            rootStore: {
                homeStore: this.homeStore.toJson(),
                userStore: this.userStore.toJson()
            }
        }
    }
}

// 服务端使用
export const createRootStore = () => {
    return new RootStore();
}
// 客户端使用
export const createInitalRootStore = () => {
    const defaultStore = window.__INITIAL_STATE__.state;
    const rootStore = new RootStore();
    rootStore.init(defaultStore.rootStore)
    return rootStore;
}

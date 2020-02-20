import { observable } from "mobx";

class UserStore {
    @observable isLogin = false


    init = (paramsState) => {
        this.isLogin = paramsState.isLogin;
    }

    toJson = () => {
        return {
            isLogin: this.isLogin,
        }
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}

export default UserStore;
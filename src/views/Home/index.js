import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react';
import styles from "./home.less";
import {withStyle} from "../../utils";

@inject("rootStore")
@observer
class Home extends Component {

    UNSAFE_componentWillMount(){
        console.log(this.props);
    }

    render() {
        return (
            <div>
                {
                this.props.rootStore.homeStore.categoryList.map(
                    item => {
                            return <div key={item}>{item}</div>
                        }
                    )
                }
                <Link to="/login">登录</Link>
                主页
                <button onClick={()=>{alert("点击")}}>button</button>
            </div>
        )
    }
}

Home.loadData = (rootStore) => {
    rootStore.homeStore.CategoryList();
}

export default withStyle(Home, styles);
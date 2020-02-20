import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withStyle } from "../../utils";
import styles from "./login.less";

class Login extends Component {


    UNSAFE_componentWillMount(){
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <Link to="/">主页</Link>
                登录
            </div>
        )
    }
}

export default withStyle(Login, styles);

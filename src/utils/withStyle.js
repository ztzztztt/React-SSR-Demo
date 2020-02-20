import React, { Component } from "react";

// 给组件添加上css代码
const withStyle = (StyleComponent, styles) => {
    class DecoratedComponent extends Component {

        // 利用生命周期函数
        // 将组件需要的样式传递至服务器处理，将css插入到html代码中
        UNSAFE_componentWillMount() {
            if(this.props.staticContext){
                this.props.staticContext.css.push(styles._getCss());
            }
        }

        render() {
            return <StyleComponent {...this.props} />
        }
    }

    // 修改后的组件添加上原来的属性值
    Object.keys(StyleComponent).forEach(
        k => (DecoratedComponent[k] = StyleComponent[k])
    )
    
    return DecoratedComponent;
}

export default withStyle;
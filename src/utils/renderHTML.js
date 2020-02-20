import React from "react";
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { Provider, useStaticRendering } from "mobx-react";
import ReactDOMServer from "react-dom/server";
import { renderRoutes } from "react-router-config";


// 让mobx在服务端渲染的时候不会重复数据变换
useStaticRendering(true) // 使用静态的渲染

const renderToHTML = (req, rootStore, routes, context) => {

    const AppStr = ReactDOMServer.renderToString(
        <Provider rootStore={rootStore}>
            <StaticRouter location={req.path} context={context}>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </StaticRouter>
        </Provider>
    )

    const cssStr = context.css.length ? context.css.join("\n") : "";

    return `
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="ztzztztt's blog是一个个人博客网站，主要记载了我的生活，学习等相关内容。" />
        <meta name="keywords" content="个人博客网站,生活,学习,交流" />
        <style>${cssStr}</style>
        <title>首页 - ztzztztt's blog</title>
    </head>
    <body>
        <div id="root">${AppStr}</div>
        <script>
            window.__INITIAL_STATE__ = {
                state: ${JSON.stringify(rootStore.toJson())}
            }
        </script>
        <script src="/client.bundle.js"></script>
    </body>
    </html>`
}

export default renderToHTML;
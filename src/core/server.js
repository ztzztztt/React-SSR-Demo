import express from "express";
import { matchRoutes } from "react-router-config";
import { renderToHTML } from "../utils";
import { createRootStore } from "../store";
import { routes } from "../routes";


const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {

    const rootStore = createRootStore();
    const dataPromiseList = [];
    const matchedRoutes = matchRoutes(routes, req.path);

    // 获取每一个loadData请求
    matchedRoutes.forEach(item => {
        if(item.route.loadData){
            dataPromiseList.push(item.route.loadData(rootStore));
        }
    })

    // 执行每一个loadData方法
    Promise.all(dataPromiseList).then(() => {
        let context = { css: []}
        const html = renderToHTML(req, rootStore, routes, context);

        res.send(html);
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`服务器启动成功，正在监听${PORT}端口`);
});
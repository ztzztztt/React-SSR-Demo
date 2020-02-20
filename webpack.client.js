const path = require("path")

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src/core/client.js"),
    output: {
        filename: "client.bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.(less|css)$/,
                use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader",
                        options: {
                            modifyVars: {},
                            javascriptEnabled: true,
                        },
                    }
                ]
            }
        ]
    },
    plugins:[],
    devServer:{
        hot: true,
        port: "3000",
        overlay: true
    }
}
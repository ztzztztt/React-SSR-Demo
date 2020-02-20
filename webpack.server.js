const path = require("path")
const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src/core/server.js"),
    output: {
        filename: "server.bundle.js",
        path: path.join(__dirname, "dist")
    },
    externals: [ nodeExternals() ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }, {
                test: /\.(less|css)$/,
                use: [{
                        loader: "isomorphic-style-loader"
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
    }
}
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: [{
                loader: "babel-loader"
            }]
        }, {
            test: /\.(tsx|ts)$/,
            loader:"ts-loader",
            exclude:"/node_modules/"
        }, {
            test: /\.less$/,
            use: [
                "style-loader", "css-loader", "less-loader"
            ]
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: false,
        port: 9900,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }
}
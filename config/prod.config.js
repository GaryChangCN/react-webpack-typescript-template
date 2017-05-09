const webpack = require('webpack')
const path = require('path')
const MinifyPlugin = require("babel-minify-webpack-plugin")

module.exports = {
    entry: [
        path.resolve(__dirname, "../src/index.js")
    ],
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                "style-loader", "css-loader", "less-loader"
            ]
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2|gif)$/,
            use: ['file-loader?name=assets/[name][sha512:hash:base64:7].[ext]&publicPath=dist/']
        }]
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new MinifyPlugin()
    ]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',    
    target: 'web',
    devtool: 'source-map',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dev'),
        clean: true,
        filename: "main.js",
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new MiniCss({
            filename: "style.css",
        })
    ],
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCss.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name]-[hash][ext]',
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash][ext]',
                }
            }         
        ]
    },
    devServer: {
        compress: false,
        open: true,
        port: 5004,
        hot: true,
    }
}
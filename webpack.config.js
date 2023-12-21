const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        patch: path.resolve(__dirname, './dist'),
        filename: '[name].[hash:8].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [
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
                test: /\.(png|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]',
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
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
        port: 3000,
        hot: true,
    }
}
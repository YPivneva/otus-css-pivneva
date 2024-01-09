const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  target: 'browserslist',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output:{
    path: path.resolve(__dirname, 'public'),
    clean: true,
    filename: "[contenthash].js",
    assetModuleFilename: 'assets/[hash][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module:{
    rules:[
        {
            test: /\.s[ac]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                "autoprefixer",
                                "postcss-preset-env",
                                "at-rule-packer",
                            ],
                        },
                    },
                },
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
    hot: true,
  },
};
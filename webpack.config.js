const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app:[
            '@babel/polyfill',
            './src/app/index.js'
        ],
        vendor: './src/app/vendor.js'
    },
    output: {
        filename: "./script/[name].[contenthash].js",
        path: path.resolve(__dirname,"build")
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[contenthash].[ext]",
                            outputPath: 'images'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",           
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/update.html",
            filename: "./pages/update.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./styles/[name].[contenthash].css"            
        }),
        new CleanWebpackPlugin()
    ]
}


const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        index: '/src/index.js',

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "pathOrUrlWhenProductionBuild",
    },
    module: {
        rules: [{
                //html
                test: /\.html$/,
                exclude: /node_module/,
                use: {
                    loader: 'html-loader'
                }

            },
            {
                //css
                test: /\.css$/,
                exclude: /node_module/,
                use: [MiniCssExtractPlugin.loader, 
                    {
                    loader: "css-loader",
                    options: {
                        
                        importLoaders: 1
                    }
                }, "postcss-loader"]
                // console.log("hello"),
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]

                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            
        }),
    ],
    devServer: {
        contentBase: ["src", "dist"],
        hot: true,
        inline: true
    },
    devtool: "source-map",
    target: "web",
    mode: "development"

}
// "use strict"
// const path = require("path");

// module.exports = {
//     context: path.resolve(__dirname),
//     entry: {
//         index: "src/index.js"
//     },
//     output: {
//         context: path.resolve(__dirname, "dist"),
//         filename: "[name].js",
//         publicPath: "pathOrUrlWhenProductionBuild"

//     },
//     module: {
//         rules: [{
//                 test: /\.html$/,
//                 exclude: /node_module/,
//                 use: ["html-loader"]
//             },
//             {
//                 test: /\.css$/,
//                 exclude: /node_module/,
//                 use: ["style-loader",
//                     {
//                         loader: "css-loader",
//                         options: {
//                             importLoader: 1,
//                         }
//                     },
//                     "postcss-loader"
//                 ]
//             },
//             {
//                 test: /\.m?js$/,
//                 exclude: /node_module/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: ["@babel/preset-env"]
//                     }
//                 }

//             },
//             {
//                 test: /\.(png|jpg|jpeg|gif|svg)$/,
//                 type: "asset/resource"
//             },
//             {
//                 test: /\.(woff|woff2|eot|ttf|otf)$/,
//                 type: "asset/resource"

//             }

//         ]
//     },
//     plugins: [

//     ],
//     devServer: {
//         contentBase: ["src", "dist"],
//         port: 8080,
//         inline: true,
//         hot: true
//     },
//     devtool: "source-map",
//     resolve: {

//     },
//     mode: "development",
//     target: "web"

// }

// // 'use strict';

// // const path = require('path');

// // module.exports = {
// //     entry: './app/index.js',
// //     context: path.resolve(__dirname),
// //     output: {
// //         path: path.resolve(__dirname, 'dist'),
// //         filename: 'bundle.js',
// //         publicPath: 'pathOrUrlWhenProductionBuild'
// //     },
// //     module: {
// //         rules: []
// //     },
// //     resolve: {},
// //     devtool: 'source-map',
// //     plugins: []
// // };
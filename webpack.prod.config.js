var webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let extractTextPlugin = require('extract-text-webpack-plugin');
let merge = require('webpack-merge');
let webpackBaseConfig = require('./webpack.config');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: '/dist/',
        // 将入口文件重命名未带有20位hash值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [
        new extractTextPlugin({
            //提取 css并重命名为带有20位hash值的唯一文件
            filename: '[name].[hash].css',
            allChunks: true
        }),
        // 定义当前node环境位生产环境
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 提取模板,并保存入口html文件
        new htmlWebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ]
});

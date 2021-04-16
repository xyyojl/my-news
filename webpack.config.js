const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
    // 模式：开发 development | 生产 production
    mode: 'development',
    // source-map
    devtool: 'source-map',
    // 优化，禁止压缩 最小化
    optimization: {
        minimize: false
    },
    // 入口文件 多文件入口
    entry: {
        // 当前文件夹下的 src
        index: resolve(__dirname, './src/js/index.js'),
        detail: resolve(__dirname, './src/js/detail.js'),
        collections: resolve(__dirname, './src/js/collections.js'),
    },
    // 输出/打包配置
    output: {
        // 路径
        path: resolve(__dirname, './dist'),
        // 打包后的文件名
        filename: 'js/[name].js'
    },
    // 模块配置
    module: {
        // 模块匹配规则
        rules: [
            // 处理 js
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: resolve(__dirname, 'node_modules'),
                query: {
                    'presets': ['latest']
                }
            },
            // 处理 tpl 模板文件
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            // 处理 css 相关
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer('last 5 versions')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            // 处理 scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer('last 5 versions')];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|ipg|jpeg|gif|ico|woff|eot|svg|ttf)/i,
                loader: 'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]'
            }
        ]
    },
    // 插件配置
    // 可优化
    plugins: [
        new HtmlWepackPlugin({
            filename: 'index.html',
            template: resolve(__dirname, 'src/index.html'),
            title: '新闻头条',
            chunks: ['index'],
            chunksSortMode: 'manual',
            excludeChunks: ['node_modules'],
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWepackPlugin({
            filename: 'detail.html',
            template: resolve(__dirname, 'src/detail.html'),
            title: '新闻详情',
            chunks: ['detail'],
            chunksSortMode: 'manual',
            excludeChunks: ['node_modules'],
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new HtmlWepackPlugin({
            filename: 'collections.html',
            template: resolve(__dirname, 'src/collections.html'),
            title: '我的新闻',
            chunks: ['collections'],
            chunksSortMode: 'manual',
            excludeChunks: ['node_modules'],
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    // 开发服务器的配置
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        },
        open: true,
        host: '0.0.0.0',
        port: 3000
    }
}
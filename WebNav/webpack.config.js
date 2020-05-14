const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name]_[hash].[ext]',
                        outputPath:'images/'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Web前端工具链接集合',
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'theme-color': '#4285f4',
                'outh': 'ouyang',
                'type': '前端、UI、JavaScript、web、设计',
            },
            template: './src/view/home.html',
            favicon: path.resolve('favicon.ico')
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
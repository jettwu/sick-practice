const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|dist)/i,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }
            }, {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: 'img/'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWepbackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin()
    ]
}

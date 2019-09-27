const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');
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
                test: /\.jsx?$/i,
                exclude: /(node_modules|dist)/i,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.s?css$/i,
                exclude: /(node_modules|dist)/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.html/i,
                exclude: /(node_modules|dist)/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }
            }, {
                test: /\.(jpg|png)$/i,
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
        new HtmlWebPlugin({
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

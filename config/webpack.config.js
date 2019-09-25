const HtmlWebPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /(node_modules|dist)/i,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.s?css/i,
                exclude: /(node_modules|dist)/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }, {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}
const HtmlWebPlugin = require('html-webpack-plugin');

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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}
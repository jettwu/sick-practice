const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|dist)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      }
}

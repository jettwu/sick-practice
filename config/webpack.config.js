const path = require('path');

module.export = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
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
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
}

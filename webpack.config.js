const path = require('path')
const webpack = require('webpack')
const pkg = require('./package')
const DEV_PORT = process.env.PORT || 4444

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/public',
    publicPath: '/'
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: DEV_PORT
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
}

/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const workboxPlugin = require('workbox-webpack-plugin')

const pkg = require('./package')
const ENV = process.env.NODE_ENV || 'development'
const DEV_PORT = 4444

const hmrEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${DEV_PORT}`,
  'webpack/hot/only-dev-server'
]

const deps = Object.keys(pkg.dependencies)

module.exports = {
  entry: {
    vendor: (ENV !== 'production' ? hmrEntries : []).concat(deps),
    app: ['./src/index.js']
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    new htmlPlugin({
      template: 'src/index.html'
    }),
    new workboxPlugin({
      globDirectory: 'public',
      globPatterns: ['**/*.{html,js}'],
      swDest: path.join('public', 'sw.js'),
      clientsClaim: true,
      skipWaiting: true
    })
  ].concat(
    ENV === 'production'
      ? [new UglifyJSPlugin({}), new CompressionPlugin()]
      : []
  )
}

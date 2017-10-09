var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'reduxdemo');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {

  entry: {
    app: path.join(APP_PATH, 'app.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename:
      'bundle.js'
  },
  // 开启 dev source map
  devtool: 'eval-source-map',
  // 开户 webpack dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },

  module: {


    loaders: [
      // 配置 preloaders, 将 eslint 添加进来，暂时去掉
      // {
      //     test: /\.jsx?$/,
      //     loaders: ['eslint-loader'],
      //     include: APP_PATH,
      //     //this is similar to defining a preloader
      //     enforce: 'pre'
      // },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 配置 loader, 将 babel 添加进来
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: APP_PATH
      }
    ]
  },
  // 使用HtmlWebpackPlugin时，会自动生成index.html，不需要再手工添加
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Deskmark app'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }

};
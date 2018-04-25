'use strict';
process.env.NODE_ENV = 'development';
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const notifier = require('node-notifier');
const devConfig = require('../config/dev');
const baseWebpackConfig = require('./webpack.base.config');

let devWebpackConfig = merge(baseWebpackConfig, {
  mode: process.env.NODE_ENV,
  output: {
    path: devConfig.assetsRoot,
    filename: '[name].js',
    publicPath: devConfig.assetsPublicPath
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    open: devConfig.autoOpenBrowser,
    contentBase: false,
    // compress: true,
    port: devConfig.port,
    historyApiFallback: true,
    // 不会输出编译信息，通过FriendlyErrorsPlugin输出编译信息
    quiet: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/dev').env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: devConfig.assetsPublicPath
      }
    ]),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://loaclhost:${devConfig.port}`]
      },
      onErrors: function(severity, errors) {
        console.log(severity)
        if (severity !== 'error') return;
        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();
        notifier.notify({
          title: 'vue-webpack-cli',
          message: severity + ': ' + error.name,
          subtitle: filename || '',
        });
      }
    })
  ]
});
module.exports = devWebpackConfig;

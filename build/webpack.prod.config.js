const merge = require('webpack-merge');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');
let prodWebpackConfig = merge(baseWebpackConfig, {
  output: {
    publicPath: config.build.assetsPublicPath
  }
})
module.exports = prodWebpackConfig;
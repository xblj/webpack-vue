const path = require('path');
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsPublicPath: '/',
  assetsSubDirectory: 'static',
  port: process.env.p || 8080,
  autoOpenBrowser: false
}
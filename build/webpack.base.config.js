const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./utils');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
// 是否位线上环境，开发和qa都是false
const isProd = process.env.NODE_ENV == 'production';
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            less: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            // resources: path.resolve(__dirname, '../src/assets/style/global.less')
          }
        }
      },
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter'),
          // emitWarning: !config.dev.showEslintErrorsInOverlay
        }
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

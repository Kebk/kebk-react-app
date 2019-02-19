const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')({ browsers: ['> 1%', 'last 2 versions'] })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 将css单独抽离
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}), // 压缩css
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: true }) // 压缩js
    ]
  }
}

module.exports = merge(base, prodConfig)

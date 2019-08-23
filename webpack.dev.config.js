const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'static/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devServer: {
    port: 9700,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devtool: 'inline-source-map'
}

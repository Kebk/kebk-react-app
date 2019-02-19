const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|)$/,
        use: [
          // 10kb以下图片转换成base64
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          },
          // 'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 65 },
              optipng: { enabled: false }, // optipng.enabled: false will disable optipng
              pngquant: { quality: '65-90', speed: 4 },
              gifsicle: { interlaced: false },
              webp: { quality: 75 } // the webp option will enable WEBP
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
        exclude: path.resolve(__dirname, './node_modules'),
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  plugins: [
    // html模板 自动引入js css
    new HtmlWebpackPlugin({
      title: 'html-webpack',
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true, //
        removeComments: true, // 移除注释
        removeAttributeQuotes: true // 移除属性的引号
      }
    }),
    // 清除编译的目录
    new CleanWebpackPlugin(['dist'])
  ]
}

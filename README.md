# webpack-demo

## 初始化

```
npm init
npm install webpack webpack-cli -D
npm install webpack-merge -D
```

## 处理 css 模块

```
npm install style-loader css-loader -D
npm install postcss-loader autoprefixer -D
```

## 将 css 单独抽离

```
npm install mini-css-extract-plugin -D
```

## 压缩 css js

```
npm install optimize-css-assets-webpack-plugin -D
npm install uglifyjs-webpack-plugin -D
```

## 自动引入 css js

```
npm install html-webpack-plugin -D
```

## 清理编译的目录

```
npm install clean-webpack-plugin -D
```

## 对图片进行优化

```
npm install file-loader -D
npm install image-webpack-loader -D 压缩图片
npm install url-loader -D 图片转base64 替换file-loader
```

## 热更新

```
webpack --watch
npm install webpack-dev-server -D
```

## babel

> webpack 4.x | babel-loader 8.x | babel 7.x

```
npm install babel-loader @babel/core @babel/preset-env webpack -D
```

> webpack 4.x | babel-loader 7.x | babel 6.x

```
npm install babel-loader@7 babel-core babel-preset-env webpack -D
```

```
npm install babel-plugin-transform-runtime -D
npm install babel-runtime --save
```

## eslint

```
npm install eslint eslint-loader -D
npm install babel-eslint standard -D
```

## 打包分析报表

```
npm install webpack-bundle-analyzer -D
```

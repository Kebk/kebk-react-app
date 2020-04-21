# kebk-webpack-app

a builder webpack project

## 项目结构

```txt
┌── config                     webpack配置文件
├── src                         项目源代码
├── static                      静态资源
├── test                        测试文件
├── ...
└── README.md
```

## 功能设计

### 基础配置: webpack.base.js

- 资源解析(es6,react,css,less,图片,字体)
- 样式增强(css 前缀,px 转 rem)
- 目录清理
- 多页面打包
- 命令行信息显示优化
- 错误捕获和处理
- css 提取成一个单独的文件

### 开发阶段配置: webpack.dev.js

- 代码热更新(css 热更新,js 热更新)
- sourcemap

### 开发阶段配置: webpack.prod.js

- 代码压缩
- 文件校验
- tree shaking
- scope hoisting
- 速度优化(基础包 cdn)
- 体积优化(代码分割)

### ssr 配置: webpack.ssr.js

- output 的 libraryTarget 配置
- css 解析 ignore

## 参考资料

[从零搭建`React全家桶`框架教程](https://github.com/brickspert/blog/issues/1)

[程柳锋(极客时间) - 玩转 webpack](https://time.geekbang.org/course/detail/100028901-97202)

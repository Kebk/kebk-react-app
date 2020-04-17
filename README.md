# kebk-react-app

## 项目结构

```txt
┌── bin                         启动文件
│   └── www
├── controllers                 控制器
│   ├── ...                     - 其他控制器
│   └── index.js                - 页面控制器
├── logs
├── middlewares                 中间件
├── models                      连接数据库以及实体
│   ├── ...                     - 实体
│   └── index.js                - 数据库实体的入口 控制数据库的连接
├── public                      静态资源
├── utils                       工具类
│   ├── result.js               - 返回结果对象
│   └── time.js                 - moment.js二次封装
├── view                        视图
│   └── common                  - 公共视图
├── app.js
├── config.default.js           默认配置
├── LICENSE
├── package.json
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

## 配置说明

### 配置文件

参考 [官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)

```bash
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

::: tip 温馨提醒

[文档](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F) 只有以 VUE*APP* 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：

```js
console.log(process.env.VUE_APP_SECRET);
```

:::

::: tip 温馨提醒

以 `GLOB_*` 开头的的变量，在打包的时候，会被加入[window-glob.js](./window.md)配置文件当中.

:::

### 变量说明

**.env 所有开发环境适用**

```bash
# 端口号
VUE_APP_PORT=9988

# 静态资源打包地址
VUE_APP_ASSETS_DIR=static

# 标题 logo title
GLOB_APP_TITLE=vben admin

# 简称，用于配置文件名字
GLOB_APP_SHORT_NAME=vben-admin
```

**.env.development 开发环境适用**

```bash
# 项目路径
VUE_APP_PUBLIC_PATH=/

# 本地开发代理，可以解决跨域及多地址代理
VUE_APP_PROXY=[["/app","http://localhost:3000"]]

# 是否使用hardSsource cache
VUE_APP_USE_CACHE=FALSE

# 是否需要兼容ie
VUE_APP_SUPPORT_IE=TRUE

# 是否使用mock
VUE_APP_USE_MOCK=TRUE

# 是否开启主题切换
VUE_APP_USE_THEME_REPLACER=TRUE

# 接口地址
GLOB_API_URL=/app

# 接口地址前缀
GLOB_API_URL_PREFIX=/v1.0

```

**..env.production 生产环境适用**

```bash
# 打包是否删除console.log
BUILD_ON_CLEAN_CONSOLE=TRUE

# 项目路径
VUE_APP_PUBLIC_PATH=./

# 是否使用hardSsource cache
VUE_APP_USE_CACHE=TRUE

# 是否开启gzip压缩
BUILD_ON_GZIP=FALSE

# 是否需要兼容ie
VUE_APP_SUPPORT_IE=TRUE

# 是否开启主题切换
VUE_APP_USE_THEME_REPLACER=TRUE

# 是否使用mock
VUE_APP_USE_MOCK=TRUE

# 是否使用cdn，目前只用于站点部署
VUE_APP_USE_CDN=FALSE

# 接口地址
GLOB_API_URL=/app

# 接口地址前缀
GLOB_API_URL_PREFIX=/v1.0


```

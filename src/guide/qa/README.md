# 常见问题

::: tip

列举了一些常见的问题。有问题可以先来这里寻找，如果没有在进行提问。

:::

## 首先

遇到问题,可以先从以下几个方面查找

1. 对应模块的 github 仓库[issue](https://github.com/anncwb/vue-vben-admin/issues)搜索
2. 从[google](https://www.google.com)搜索问题
3. 从[百度](https://www.百度.com)搜索问题

## ant-design-vue 控制台警告

在控制台看到以下警告的原因是 ant-design-vue 会检测是否使用了 babel-plugin-import 来判断是否进行了组件库的按需引入。

但是项目使用的是 vite 的插件[vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import)来进行按需引入。在 vite 内没必要使用 babel 在转换一次代码了。

所以想关闭这个警告，得等 ant-design-vue 提供可以关闭该警告的配置。

```bash
You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size. Not support Vite !!!
```

## 添加菜单后没显示

菜单必须和路由匹配才会显示在界面上，所以得确保菜单和对应的路由存在即可显示.

## imagemin 依赖安装失败

由于 imagemin 在中国不好安装。现提供几个解决方案

1. 使用 yarn 在 package.json 内配置(推荐,项目内已集成，前提是必须使用 yarn)

```json
"resolutions": {
    "bin-wrapper": "npm:bin-wrapper-china"
  },

```

2. 使用 npm,在电脑 host 文件加上如下配置即可

```bash

199.232.4.133 raw.githubusercontent.com
```

3. 使用 cnpm 安装(不推荐)

## 本地运行报错

由于 vite 在本地没有转换代码，且代码中用到了可选链等比较新的语法。所以本地开发需要使用版本较高的浏览器(谷歌 85+)进行开发

## tab 页切换后页面空白

这是由于开启了路由切换动画,且对应的页面组件存在多个根节点导致的,在页面最外层添加`<div></div>`即可

## 组件命名问题

目前在 vite+vue3.0.5 版本中，如果组件命名携带关键字，则可能会导致内存溢出.例如 `ImportExcel`excel 导入组件。

## 我的代码本地开发可以，打包就不行了

目前发现这个原因可能有以下，可以从以下原因来排查，如果还有别的可能，可以提交 pr 来告诉我

1. 使用了 ctx 这个变量,ctx 本身未暴露出在实例类型内，尤大也是说了不要用这个属性。这个属性只是用于内部使用。

```ts
import { getCurrentInstance } from 'vue';
getCurrentInstance().ctx.xxxx;
```

## safari 问题

目前在 safari 上面运行样式会有问题，还未找到原因，有知道的也可以告诉我。

## 模版区别

- [Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin) - 是包含 Demo 示例的,个人建议不要在这上面进行开发。当然,你如果动手能力强的话可以直接改。
- [Vue-Vben-Admin-Thin-Next](https://github.com/anncwb/vben-admin-thin-next) 精简了代码后的模版项目。适合在这基础上进行二次开发

## 环境问题

如果出现依赖安装报错,启动报错等。先检查电脑环境有没有安装齐全。

- Node 版本必须大于`12.0.0`不支持 `13`， 推荐 14 版本。
- Git
- Yarn 最新版

## 依赖安装问题

如果依赖安装不了或者启动报错可以先尝试 删除`yarn.lock`和`node_modules`，然后重新运行 `yarn install`

如果依赖安装不了或者报错,可以尝试切换手机热点来进行依赖安装。如果还是不行,可以自行配置国内镜像安装。

也可以在项目根目录创建 `.npmrc`文件, 内容如下

```bash
# .npmrc
registry = https://registry.npm.taobao.org
```

然后重新执行`yarn run reinstall`等待安装完成即可

## 如何保证我的代码能更新到最新代码

如果你使用了该项目进行项目开发。开发之中想同步最新的代码。你可以设置多个源的方式

1. 克隆代码

```bash
git clone https://github.com/anncwb/vben-admin-thin-next.git
```

2. 添加自己的公司 git 源地址

```bash
# up 为源名称,可以随意设置
# gitUrl为公司的git地址
git remote add up  gitUrl;
```

3. 提交代码到自己公司 git

```bash
# 提交代码到自己公司
# master为分支名 需要自行根据情况修改
git push up master

# 同步公司的代码
# master为分支名 需要自行根据情况修改
git pull up master
```

4. 如何同步开源最新代码

```bash
git pull origin main
```

::: tip

同步代码的时候会出现冲突。只需要把冲突解决即可

:::

## 关于为什么删除 Tailwind CSS

目前 vite 跟 Tailwind CSS 配合在本地开发的时候。控制台会出现假死状态，严重影响开发效率。

**补充**

- 谷歌浏览器下一个版本修复。如果需要使用，请使用[chrome canary](https://www.google.com/intl/zh-CN/chrome/canary/)进行开发
- 使用后本地加载明显变慢
- 打包速度慢一倍

**2.0.0 版本补充 引入了 Windi Css 完美解决上面问题**

## 打包文件过大

- 首先 完整版由于引用了比较多的库文件，所以打包会比较大。可以使用精简版来进行开发

- 其次建议开启 gzip，使用之后体积会只有原先 1/3 左右。

gzip 可以由服务器直接开启。如果是这样，前端不需要构建`.gz`格式的文件

如果前端构建了`.gz`文件,以 nginx 为例,nginx 需要开启`gzip_static: on`这个选项。

- 开启 gzip 的同时还可以同时开启`brotli`，比 gzip 更好的压缩。两者可以共存

**注意**

- gzip_static: 这个模块需要 nginx 另外安装,默认的 nginx 没有安装这个模块。

- 开启`brotli`页需要 nginx 另外安装模块

## 运行错误

如果出现类似以下错误，请检查项目全路径(包含所有父级路径)不能出现中文、日文、韩文。否则将会出现路径访问 404 导致以下问题

```ts
[vite] Failed to resolve module import "ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css". (imported by /@/setup/ant-design-vue/index.ts)
```

## 为什么要 TSX 和 Vue 文件混合使用呢

使用 tsx 的主要原因是改项目有 1.0 版本,且全部使用`tsx`风格写的。所以部分迁移过来还是保留 tsx 语法

个人觉得两种写法都可以使用。只要能熟悉,合适的场景使用适合的写法能大大提高效率。

## 为什么是 moment.js

很多人问为什么不用`dayjs`.在项目依赖中可以看到。他是来自[Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)内部自带的。

目前还没有基于 Vite 的 dayjs 替换 momentjs 方案,webpack 已经有了。等以后出现了在进行替换。

## 控制台路由警告问题

如果看到控制台有如下警告,且页面**能正常打开** 可以忽略该警告。

后续`vue-router`可能会提供配置项来关闭警告

```ts
[Vue Router warn]: No match found for location with path "xxxx"
```

## 启动报错

当出现以下错误信息时，请检查你的 nodejs 版本号是否符合项目

```bash
TypeError: str.matchAll is not a function
at Object.extractor (vue-vben-admin-main\node_modules@purge-icons\core\dist\index.js:146:27)
at Extract (vue-vben-admin-main\node_modules@purge-icons\core\dist\index.js:173:54)

```

## 页面报错

当页面出现以下报错，是因为 /xxx 对应的路由组件内部出现了错误。

```ts
 Uncaught (in promise) Error: Couldn't resolve component "default" at "/xxx"

```

可以尝试从以下几点排查

1. 检查对应组件内部 import 的所有文件是否正确
2. 检查引入方式是否错误。

```ts
// 正确的
import { cloneDeep } from 'lodash-es';

// 报错
import _ from 'lodash-es';
```

3. 检查样式是否使用变量及有没有引入对应的变量文件
4. 检查代码明显的语法错误

这样就不会是使用的取值忘记 xxx.value 来进行数据获取

## 跨域问题

参考[跨域问题](/guide/dep/cors)

## 接口请求问题

proxy 代理不成功,没有代理到实际地址？

代理只是服务请求代理，这个地址是不会变的。 原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是`http://localhost:8000/xxx` 。以服务端是否收到请求为准

## 组件库问题

跟组件库相关的问题可以查看[常见问题](https://2x.antdv.com/docs/vue/faq-cn/)

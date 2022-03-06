# 常见问题

::: tip

列举了一些常见的问题。有问题可以先来这里寻找，如果没有可以在 [issue](https://github.com/vbenjs/vue-vben-admin/issues) 提。

:::

## 前言

遇到问题,可以先从以下几个方面查找

1. 对应模块的 GitHub 仓库 [issue](https://github.com/vbenjs/vue-vben-admin/issues) 搜索
2. 从[google](https://www.google.com)搜索问题
3. 从[百度](https://www.百度.com)搜索问题
4. 在下面列表找不到问题可以到 issue 提问 [issues](https://github.com/vbenjs/vue-vben-admin/issues)
5. 如果不是问题类型的，需要讨论的，请到 [discussions](https://github.com/vbenjs/vue-vben-admin/discussions) 讨论

## 关于缓存更新问题

vben-admin 的项目配置默认是缓存在 `localStorage` 内，所以版本更新后可能有些配置没改变。

解决方式是每次更新代码的时候修改 `package.json` 内的 `version` 版本号. 因为 localStorage 的 key 是根据版本号来的。所以更新后版本不同前面的配置会失效。重新登录即可

`VUE_VBEN_ADMIN__DEVELOPMENT__2.0.3__COMMON__LOCAL__KEY__` key 的组成是 [项目名]+[开发环境]+[版本号]+[key]

## 关于修改配置文件的问题

当修改 `.env` 等环境文件及 `vite.config.ts` 文件时，vite 会自动重启服务。

自动重启有几率出现问题，请重新运行项目即可解决.

## esbuild 模式下开启 LEGACY 打包失败

如果将  build.minify 设置为 'esbuild'，且不能启用 LEGACY，否则打包将会报错，两者选其一即可打包。

## ant-design-vue 控制台警告

在控制台看到以下警告的原因是 `ant-design-vue` 会检测是否使用了 `babel-plugin-import` 来判断是否进行了组件库的按需引入。

但是项目使用的是 vite 的插件 [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) 来进行按需引入。在 vite 内没必要使用 babel 在转换一次代码了。

所以想关闭这个警告，得等 ant-design-vue 提供可以关闭该警告的配置。

```bash
You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size. Not support Vite !!!
```

## 添加菜单后没显示

菜单必须和路由匹配才会显示在界面上，所以得确保菜单和对应的路由存在即可显示.

## imagemin 依赖安装失败

由于 imagemin 在国内安装困难，提供以下几个解决方案：

1. 使用 yarn 在 package.json 内配置（推荐，项目内已集成，前提是必须使用 yarn）

```json
"resolutions": {
  "bin-wrapper": "npm:bin-wrapper-china"
}
```

2. 使用 npm,在电脑 host 文件加上如下配置即可

```bash
199.232.4.133 raw.githubusercontent.com
```

## 使用 yarn 安装 imagemin 依赖安装失败

如果使用 yarn 还是不能安装依赖，可以将图片压缩功能移除，移除方法如下：

- 在 `package.json` 内删除 `vite-plugin-imagemin` 这个依赖。这会导致图片没有压缩，但是可以手动到在线网站进行压缩。这里推荐[tinypng](https://tinypng.com/)
- 2. 注释 `vite-plugin-imagemin` 插件引用

```ts
import { configImageminPlugin } from './imagemin';
VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());
```

## 在 Linux 内依赖安装失败

如果执行 `yarn install` 会出现以下错误：

```bash
gifsicle pre-build test failed
compiling from source
```

可能是 linux 服务器需要配置下环境，`imagemin` 这个会导致依赖安装失败。

这里以`Centos`为例

- 解决方式 1:

1. 将以下内容添加到 yum 源

```bash
[nasm]
name=The Netwide Assembler
baseurl=http://www.nasm.us/pub/nasm/stable/linux/
enabled=1
gpgcheck=0

[nasm-testing]
name=The Netwide Assembler (release candidate builds)
baseurl=http://www.nasm.us/pub/nasm/testing/linux/
enabled=0
gpgcheck=0

[nasm-snapshot]
name=The Netwide Assembler (daily snapshot builds)
baseurl=http://www.nasm.us/pub/nasm/snapshots/latest/linux/
enabled=0
gpgcheck=0
```

在 `/etc/yum.repos.d/` 下新建 `Centos-Nasm.repo`，将以上内容复制到这个文件即可

2. 执行 `yum install libtool automake autoconf nasm`
3. 重新执行 `yarn install` 即可

## 本地运行报错

由于 vite 在本地没有转换代码，且代码中用到了可选链等比较新的语法。所以本地开发需要使用版本较高的浏览器(`Chrome 85+`)进行开发

## tab 页切换后页面空白

这是由于开启了路由切换动画,且对应的页面组件存在多个根节点导致的，在页面最外层添加`<div></div>`即可

**错误示例**

```vue
<template>
  <!-- 注释也算一个节点 -->
  <h1>text h1</h1>
  <h2>text h2</h2>
</template>
```

**正确示例**

```vue
<template>
  <div>
    <h1>text h1</h1>
    <h2>text h2</h2>
  </div>
</template>
```

::: tip 提示

- 如果想使用多个根标签，可以禁用路由切换动画
- template 下面的根注释节点也算一个节点

:::

## 组件命名问题

目前在 vite+vue3.0.5 版本中，如果组件命名携带关键字，则可能会导致内存溢出。例如 `ImportExcel` excel 导入组件。

## 我的代码本地开发可以，打包就不行了

目前发现这个原因可能有以下，可以从以下原因来排查，如果还有别的可能，可以提交 pr 来告诉我

1. 使用了 ctx 这个变量，ctx 本身未暴露出在实例类型内，尤大也是说了不要用这个属性。这个属性只是用于内部使用。

```ts
import { getCurrentInstance } from 'vue';
getCurrentInstance().ctx.xxxx;
```

## safari 问题

目前在 safari 上面本地开发运行样式会有问题，还未找到原因，有知道的也可以告诉我。

## 模版区别

- [Vue-Vben-Admin](https://github.com/vbenjs/vue-vben-admin) - 是包含 Demo 示例的,个人建议不要在这上面进行开发。当然，你如果动手能力强的话可以直接改。
- [Vue-Vben-Admin-Thin-Next](https://github.com/vbenjs/vben-admin-thin-next) 精简了代码后的模版项目。适合在这基础上进行二次开发。

## 环境问题

如果出现依赖安装报错，启动报错等。先检查电脑环境有没有安装齐全。

- Node 版本必须大于`12.0.0`不支持 `13`， 推荐 14 版本。
- Git
- Yarn 最新版

## 依赖安装问题

- 如果依赖安装不了或者启动报错可以先尝试 删除 `yarn.lock` 和 `node_modules`，然后重新运行 `yarn install`
- 如果依赖安装不了或者报错，可以尝试切换手机热点来进行依赖安装。
- 如果还是不行，可以自行配置国内镜像安装。
- 也可以在项目根目录创建 `.npmrc` 文件，内容如下

```bash
# .npmrc
registry = https://registry.npm.taobao.org
```

然后重新执行`yarn run reinstall`等待安装完成即可

## 如何保证我的代码能更新到最新代码

如果你使用了该项目进行项目开发。开发之中想同步最新的代码。你可以设置多个源的方式

1. 克隆代码

```bash
git clone https://github.com/vbenjs/vben-admin-thin-next.git
```

2. 添加自己的公司 git 源地址

```bash
# up 为源名称,可以随意设置
# gitUrl为开源最新代码
git remote add up gitUrl;
```

3. 提交代码到自己公司 git

```bash
# 提交代码到自己公司
# main为分支名 需要自行根据情况修改
git push up main

# 同步公司的代码
# main为分支名 需要自行根据情况修改
git pull up main
```

4. 如何同步开源最新代码

```bash
git pull origin main
```

::: tip

同步代码的时候会出现冲突。只需要把冲突解决即可

:::

## 打包文件过大

- 首先，完整版由于引用了比较多的库文件，所以打包会比较大。可以使用精简版来进行开发

- 其次建议开启 gzip，使用之后体积会只有原先 1/3 左右。

gzip 可以由服务器直接开启。如果是这样，前端不需要构建 `.gz` 格式的文件

如果前端构建了 `.gz` 文件，以 nginx 为例，nginx 需要开启 `gzip_static: on` 这个选项。

- 开启 gzip 的同时还可以同时开启 `brotli`，比 gzip 更好的压缩。两者可以共存

**注意**

- gzip_static: 这个模块需要 nginx 另外安装，默认的 nginx 没有安装这个模块。

- 开启 `brotli` 页需要 nginx 另外安装模块

## 运行错误

如果出现类似以下错误，请检查项目全路径（包含所有父级路径）不能出现中文、日文、韩文。否则将会出现路径访问 404 导致以下问题

```ts
[vite] Failed to resolve module import "ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css". (imported by /@/setup/ant-design-vue/index.ts)
```

## 为什么是 moment.js

很多人问为什么不用`dayjs`。在项目依赖中可以看到，它是 [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/) 内部自带的。

目前还没有基于 Vite 的 dayjs 替换 momentjs 方案，webpack 已经有了。等以后出现了在进行替换。

## 控制台路由警告问题

如果看到控制台有如下警告，且页面**能正常打开** 可以忽略该警告。

后续 `vue-router` 可能会提供配置项来关闭警告

**2.6.1及以上版本已移除此警告**

```ts
[Vue Router warn]: No match found for location with path "xxxx"
```

## 启动报错

当出现以下错误信息时，请检查你的 nodejs 版本号是否符合要求

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

参考[跨域问题](../dep/cors)

## 接口请求问题

proxy 代理不成功，没有代理到实际地址？

代理只是服务请求代理，这个地址是不会变的。 原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是 `http://localhost:8000/xxx`。以服务端是否收到请求为准。

## 组件库问题

跟组件库相关的问题可以查看[常见问题](https://2x.antdv.com/docs/vue/faq-cn/)

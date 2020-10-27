# 常见问题

::: tip 列举了一些常见的问题。有问题可以先来这里寻找，如果没有在进行提问。 :::

## 是否可以在生产环境中使用

虽然 Vue3 及其配套还不是很完善。且大部分处于`beta`|`rc`状态。但是我觉得可以尝试，我个人是已经有部分用于生产环境了。生产环境代码真正实现了按需引入。总体感觉会比 webpack 打包体积小了很多。

**注意**

我觉得唯一需要注意的只有浏览器兼容,目前还不能兼容`IE11`,如果你需要兼容低版本浏览器。建议还是使用 Vue2.6

## 模版区别

- [Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin) - 是包含 Demo 示例的,个人建议不要在这上面进行开发。当然,你如果动手能力强的话可以直接改。
- [Vue-Vben-Admin-Thin-Next](https://github.com/anncwb/vben-admin-thin-next) 精简了代码后的模版项目。适合在这基础上进行二次开发

## 环境问题

如果出现依赖安装报错,启动报错等。先检查电脑环境有没有安装齐全。

- Node 版本必须大于`10.16.0` 推荐 12 版本。
- Git
- Yarn 最新版

## 依赖安装问题

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

::: tip 同步代码的时候会出现冲突。只需要把冲突解决即可 :::

## 关于 Transition mode 的问题

如果 Transition 不加 mode，页面切换会有明显的从下到上替换的过程。

```vue
<Transition mode="out-in"></Transition>
```

目前加了这个 mode 会造成页面切换后整个页面渲染失效或者错误。

如何解决:

1. 如果希望自己的页面有动画。在路由对应的 component 组件的`<template>`内就不能存在多个根组件。只能有一个根组件。类似与 vue2.6
2. 加了 mode 不能后组件也不能有多个根组件。外层最好用`div`嵌套。
3. 不能在根组件使用`<></>`,这点是对于 tsx 文件的。

该问题可能是`vue3.0`的问题。后续持续跟进该问题

## 关于为什么删除 Tailwind CSS

目前 vite 跟 Tailwind CSS 配合在本地开发的时候。控制台会出现假死状态，严重影响开发效率。

**补充**

谷歌浏览器下一个版本修复。如果需要使用，请使用[chrome canary](https://www.google.com/intl/zh-CN/chrome/canary/)进行开发

## Vite 别名问题

vite 引入模块的时候 如果不是以`./`或者`/`开头的会被视为依赖，在前面加上`/@modules/xxx`来进行请求

vite 别名在`vite.config.ts`内配置,需要以 `/`开头

```ts
 alias: {
    '/@/': pathResolve('src'),
  },
```

## 启动慢

很多人运行项目可能会发现，第一次运行 vite 也不是想象中那么快。这是因为 vite 第一次启动的时候，会将 package.json 内的依赖项`dependencies`及`vite.config.ts`内的`optimizeDeps.includes`所包含的包编译一次。依赖越多，第一次启动就越慢。再次启动如果

## 打包文件过大

建议开启 gzip，使用之后体积会只有原先 1/3 左右。

gzip 可以由服务器直接开启。如果是这样，前端不需要构建`.gz`格式的文件

如果前端构建了`.gz`文件,以 nginx 为例,nginx 需要开启`gzip_static: on`这个选项。

**注意**

gzip_static: 这个模块需要 nginx 另外安装,默认的 nginx 没有安装这个模块。

## 运行错误

如果出现类似以下错误，请检查项目全路径(包含所有父级路径)不能出现中文、日文、韩文。否则将会出现路径访问 404 导致以下问题

```ts
[vite] Failed to resolve module import "ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css". (imported by /@/setup/ant-design-vue/index.ts)
```

## 本地开发卡顿

本地开发建议在`Chrome`浏览器上面进行开发。vite 是需要用到文件的时候才会去加载 js 和 css 等文件资源。所以有时候本地点击后要稍微等待一会才能跳转。这是因为你第一次请求这些文件，浏览器还未对这些文件进行缓存。所以需要一些时间来加载。下次进行请求的时候会从缓存直接取，速度很变快。**注意：浏览器控制台->NetWork->Disable cache 不要勾选**否则没有缓存每次加载都会很慢

目前在火狐浏览器本地开发会有一些卡顿，还未找到是哪方面的原因。知道的也可以跟我说一声。

## 修改代码/样式无作用

1. 当修改了 [/@/design](https://github.com/anncwb/vue-vben-admin/tree/main/src/design)内的样式。有时候会出现样式不起作用
2. 修改了代码，但是界面并没有改变。刷新也是一样。

以上可能是 vite 缓存的问题,只需要删除`node_modules/.vite_opt_cache `这个文件夹重新运行即可。

## 为什么要 TSX 和 Vue 文件混合使用呢

使用 tsx 的主要原因是改项目有 1.0 版本,且全部使用`tsx`风格写的。所以部分迁移过来还是保留 tsx 语法

个人觉得两种写法都可以使用。只要能熟悉,合适的场景使用适合的写法能大大提高效率。

## 为什么是 moment.js

很多人问为什么不用`dayjs`.在项目依赖中可以看到。依赖列表是没有这个的。他是来自[Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)内部自带的。

目前还没有基于 Vite 的 dayjs 替换 momentjs 方案,webpack 已经有了。等以后出现了在进行替换。

## 控制台路由警告问题

如果看到控制台有如下警告,且页面**能正常打开** 可以忽略该警告。

后续`vue-router`可能会提供配置项来关闭警告

```ts
[Vue Router warn]: No match found for location with path "xxxx"
```

## 引入第三方包报错问题

如果你使用了第三方库,以`echarts`为例,出现了下面问题

```ts
 [Vue warn]: SyntaxError: The requested module '/@modules/echarts/index.js' does not provide an export named 'default'

```

只需要在`vite.config.ts`内加入以下内容即可

```ts
 optimizeDeps: {
    include: [
     'echarts'
    ],
  },
```

## 引入依赖警告

如果你使用了`echarts`后还需要引入中国地图。你可能会`import 'echarts/map/js/china'`

```ts


Avoid deep import "echarts/map/js/china" (imported by /@/views/demo/echarts/Map.vue)
because "echarts" has been pre-optimized by vite into a single file.
Prefer importing directly from the module entry:
```

这样出现了以上警告,意思是让你用 ` import {xxx} from 'echarts'`的方式来引入

但是`echarts`没有导出这个变量。此时只需再次把`echarts/map/js/china`加入 optimizeDeps 即可，如下

```ts
 optimizeDeps: {
    include: [
     'echarts',
     'echarts/map/js/china'
    ],
  },
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

## ref 类型问题

遇到很多人在学习 vue3 的时候，常常会将 ref，computed 等类型混淆

建议在命名的时候，变量名有一定的规范

例如：

```ts
// good
const countRef = ref(0);
// bad
const count = ref(0);
const getCountRef = computed(() => 0);
```

这样就不会是使用的取值忘记 xxx.value 来进行数据获取

## 跨域问题

参考[跨域问题](/guide/dep/cors)

## 热更新问题

目前 Vite 对于热更新还存在许多问题。目前只能支持`.vue`文件的热更新。

对`.tsx`,`.ts`文件还不能进行热更新

## 接口请求问题

proxy 代理不成功,没有代理到实际地址？

代理只是服务请求代理，这个地址是不会变的。 原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是`http://localhost:8000/xxx` 。以服务端是否收到请求为准

## 本地代理到 Https 问题

目前项目暂时无法在开发环境代理到 Https 接口,后续查询解决方案。可以先用 http 方式进行处理。

## 组件注册机制问题

::: tip 如果需要全局注册 在 [/@/setup/ant-design-vue/index.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/setup/ant-design-vue/index.ts)内将代码改成如下即可

```ts
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

export function setupAntd(app: App<Element>) {
  app.use(Antd);
}
```

:::

目前全局有两个地方注册了全局组件

1. [/@/setup/ant-design-vue/index.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/setup/ant-design-vue/index.ts)

可以看到只注册了两个,一个是 Form 和 Input。因为登录用到了这两个组件。

2. [/@/layouts/default/index.tsx](https://github.com/anncwb/vue-vben-admin/tree/main/src/layouts/default/index.tsx)

可以看到这里全局注册了用户自己写的组件,在这里注册而不在`main.ts`内注册的原因是不想让这里注册的全局组件跟首屏入口打包文件打包在一起。这样可以减少首屏 js 加载体积。

```ts
import { registerGlobComp } from '/@/components/registerGlobComp';

import './index.less';
export default defineComponent({
  name: 'DefaultLayout',
  setup() {
    // ! 在这里才注册全局组件
    // ! 可以减少首屏代码体积
    // default layout是在登录后才加载的。所以不会打包到首屏去
    registerGlobComp();
})
```

其余地方项目采用的是哪里需要哪里注册

**在 Vue 文件中注册**

```vue
<template>
  <Menu>
    <SubMenu></SubMenu>
  <Menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default defineComponent({
  components: {
    Menu: Menu,
    SubMenu: Menu.SubMenu
  },
})
</script>
```

**在 tsx 文件内直接使用即可**

```tsx
import { Menu } from 'ant-design-vue';

export default defineComponent({
  setup() {
    return () => (
      <Menu>
        <Menu.SubMenu></Menu.SubMenu>
      </Menu>
    );
  },
});
```

## 组件库问题

跟组件库相关的问题可以查看[常见问题](https://2x.antdv.com/docs/vue/faq-cn/)

## 最后

遇到问题,可以先从以下几个方面查找

1. 对应模块的 github 仓库[issue](https://github.com/anncwb/vue-vben-admin/issues)搜索
2. 从[google](https://www.google.com)搜索问题
3. 从[百度](https://www.百度.com)搜索问题
4. 实在找不到在到交流群里提问

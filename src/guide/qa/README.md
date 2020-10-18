# 常见问题(持续更新)

::: tip
列举了一些常见的问题。有问题可以先来这里寻找，如果没有在进行提问。
:::

## 是否可以在生产环境中使用

虽然Vue3及其配套还不是很完善。且大部分处于`beta`|`rc`状态。但是我觉得可以尝试，我个人是已经有部分用于生产环境了。生产环境代码真正实现了按需引入。总体感觉会比webpack打包体积小了很多。

**注意**

我觉得唯一需要注意的只有浏览器兼容,目前还不能兼容`IE11`,如果你需要兼容低版本浏览器。建议还是使用Vue2.6

## 模版区别

- [Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin) - 是包含Demo示例的,个人建议不要在这上面进行开发。当然,你如果动手能力强的话可以直接改。
- [Vue-Vben-Admin-Thin-Next](https://github.com/anncwb/vben-admin-thin-next) 精简了代码后的模版项目。适合在这基础上进行二次开发


## 环境问题

如果出现依赖安装报错,启动报错等。先检查电脑环境有没有安装齐全。

- Node 版本必须大于`10.16.0` 推荐12版本。
- Git
- Yarn最新版


## 依赖安装问题

如果依赖安装不了或者报错,可以尝试切换手机热点来进行依赖安装。如果还是不行,可以自行配置国内镜像安装。

也可以在项目根目录创建 `.npmrc`文件, 内容如下

```bash
# .npmrc
registry = https://registry.npm.taobao.org
```
然后重新执行`yarn run reinstall`等待安装完成即可

## Vite别名问题

vite引入模块的时候 如果不是以`./`或者`/`开头的会被视为依赖，在前面加上`/@modules/xxx`来进行请求

vite别名在`vite.config.ts`内配置,需要以 `/`开头

```ts
 alias: {
    '/@/': pathResolve('src'),
  },
```

## 打包文件过大

建议开启 gzip，使用之后体积会只有原先 1/3 左右。

## 运行错误

如果出现类似以下错误，请检查项目全路径(包含所有父级路径)不能出现中文、日文、韩文。否则将会出现路径访问404导致以下问题

```ts
[vite] Failed to resolve module import "ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css". (imported by /@/setup/ant-design-vue/index.ts)
```
## 修改代码/样式无作用

1. 当修改了 [/@/design](https://github.com/anncwb/vue-vben-admin/tree/main/src/design)内的样式。有时候会出现样式不起作用
2. 修改了代码，但是界面并没有改变。刷新也是一样。

以上可能是vite缓存的问题,只需要删除`node_modules/.vite_opt_cache `这个文件夹重新运行即可。

## 为什么要TSX和Vue文件混合使用呢

使用tsx的主要原因是改项目有1.0版本,且全部使用`tsx`风格写的。所以部分迁移过来还是保留tsx语法

个人觉得两种写法都可以使用。只要能熟悉,合适的场景使用适合的写法能大大提高效率。

## 为什么是moment.js

很多人问为什么不用`dayjs`.在项目依赖中可以看到。依赖列表是没有这个的。他是来自[Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)内部自带的。

目前还没有基于Vite的dayjs替换momentjs方案,webpack已经有了。等以后出现了在进行替换。

## 控制台路由警告问题

如果看到控制台有如下警告,且页面**能正常打开** 可以忽略该警告。

后续`vue-router`可能会提供配置项项来关闭警告

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

但是`echarts`没有导出这个变量。此时只需再次把`echarts/map/js/china`加入optimizeDeps即可，如下

```ts
 optimizeDeps: {
    include: [
     'echarts',
     'echarts/map/js/china'
    ],
  },
```

## 页面报错

当页面出现以下报错，是因为 /xxx对应的路由组件内部出现了错误。

```ts
 Uncaught (in promise) Error: Couldn't resolve component "default" at "/xxx"

```
可以尝试从以下几点排查

1. 检查对应组件内部 import 的所有文件是否正确
2. 检查引入方式是否错误。
  ```ts
  // 正确的
  import {cloneDeep} from 'lodash-es'

  // 报错
  import _ from 'lodash-es'
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

目前Vite对于热更新还存在许多问题。目前只能支持`.vue`文件的热更新。

对`.tsx`,`.ts`文件还不能进行热更新

## 接口请求问题

proxy代理不成功,没有代理到实际地址？

代理只是服务请求代理，这个地址是不会变的。 原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是`http://localhost:8000/xxx` 。以服务端是否收到请求为准


## 本地代理到Https问题

目前项目暂时无法在开发环境代理到Https接口,后续查询解决方案。可以先用http方式进行处理。


## 最后

遇到问题,可以先从以下几个方面查找

1. 对应模块的github仓库[issue](https://github.com/anncwb/vue-vben-admin/issues)搜索
2. 从[google](https://www.google.com)搜索问题
3. 从[百度](https://www.百度.com)搜索问题
4. 实在找不到在到交流群里提问

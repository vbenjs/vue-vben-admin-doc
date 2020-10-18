# 引入外部模块

引入第三方组件的前提是需要对`Vue3`，目前支持的组件库和组件并不是很多。目前支持的UI库有[Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)、[element-plus](https://github.com/element-plus/element-plus)。组件支持也不是很多。

在Vite项目中,如果依赖遵循esm规范,直接引入即可。如果不是,以`echarts`为例子

1. 安装 `echarts`

```bash
yarn add echarts
```
2. 在`vite.config.ts`内配置

```ts
{
  optimizeDeps: {
    include: [
      'echarts',
    ],
  },
}
```
这样才能在vite内中使用echarts模块。

如果我们需要引入`echarts`的地图模块，以前的做法是

```ts
import echarts from 'echarts';
import 'echarts/map/js/china';
```
控制台会抛出如下错误

```bash
[vite] Avoid deep import "echarts/map/js/china" (imported by /@/views/demo/echarts/Map.vue)
because "echarts" has been pre-optimized by vite into a single file.
Prefer importing directly from the module entry:
```

因为我们无法从echarts内直接导出china变量。所以需要单独引入指定包

```ts
// 是没有这个变量的。所以这样写行不通
import {china} from 'echarts'
```

此时我们在`vite.config.ts`内加入`echarts/map/js/china`重新运行即可。

```bash
{
  optimizeDeps: {
    include: [
      'echarts',
      'echarts/map/js/china',
    ],
  },
}
```

::: tip
optimizeDeps是用于优化依赖配置。

如果你发现你使用的依赖在vite报错，可以往`optimizeDeps.include`添加相应的包即可
:::

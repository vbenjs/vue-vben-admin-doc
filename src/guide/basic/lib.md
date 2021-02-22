# 引入外部模块

引入第三方组件的前提是需要对`Vue3`，目前支持的组件库和组件并不是很多。目前支持的 UI 库有[Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)、[element-plus](https://github.com/element-plus/element-plus)。组件支持也不是很多。

在 Vite 项目中,如果依赖遵循 esm 规范,直接引入即可。如果不是,以`echarts`为例子

1. 安装 `echarts`

```bash
yarn add echarts
```

```ts
import { init } from 'echarts';
```

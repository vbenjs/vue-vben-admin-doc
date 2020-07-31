# 路由新增

## 如何新增一个路由模块

1. 新增路由模块

在**src/router/routes/modules**新增一个模块文件

示例,在`src/router/routes/modules`下新增**test.ts**文件

```js
// test.ts
import { RouteConfigEx, LayoutType, ModuleRouteConfig } from '@/router/types';

import { createAsyncComponent } from '@/common/factory/AsyncComponentFactory';
import { PAGE_LAYOUT_COMPONENT } from '@/router/constant';

const prefix = '/test';

const layout: LayoutType = {
  path: prefix,
  component: PAGE_LAYOUT_COMPONENT,
  meta: {
    title: 'Test',
    icon: 'home|svg',
  },
};

const routes: RouteConfigEx[] = [
  {
    path: 'test-route',
    name: 'TestRoute',
    component: () => createAsyncComponent(import('@/views/sys/test/index.vue')),
    meta: {
      // title 必填
      title: '示例路由',
    },
  },
];

export default {
  routes: routes,
  prefix,
  layout,
} as ModuleRouteConfig;

```

::: warning 注意

路由添加完成需要手动刷新界面，才能自动加载

:::

2. 到这里你路由已经添加完成，不需要手动引入，放在**src/router/routes/modules**那的文件会自动被加载

::: tip 温馨提醒

这里自动加载会忽略以 `_`开头的文件

:::

## 验证

您可以尝试访问 `ip:端口/test/test-route`出现对应组件内容即代表成功

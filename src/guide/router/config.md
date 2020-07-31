## 路由模块介绍

## 模块说明

一个路由模块内包含以下结构

```js
import { RouteConfigEx, LayoutType, ModuleRouteConfig } from '@/router/types';

import { createAsyncComponent } from '@/common/factory/AsyncComponentFactory';
import { PAGE_LAYOUT_COMPONENT } from '@/router/constant';

import { pageEnum } from '@/enums/pageEnum';

// 模块前缀，模块那的路由都会自动拼接该前缀
const prefix = '/dashboard';

// 模块布局
const layout: LayoutType = {
  path: '/dashboard',
  component: PAGE_LAYOUT_COMPONENT,
  redirect: pageEnum.BASE_HOME,
  meta: {
    title: 'Dashboard',
    icon: 'home|svg',
  },
};

// 模块内的路由
const routes: RouteConfigEx[] = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '欢迎页',
    },
  },
];

export default {
  routes: routes,
  prefix,
  layout,
} as ModuleRouteConfig;
```

**上面的模块生成路由结构为**

```js
{
  path: '/dashboard',
  component: PAGE_LAYOUT_COMPONENT,
  redirect: pageEnum.BASE_HOME,
  meta: {
    title: 'Dashboard',
    icon: 'home|svg',
  },
  children:[{
    path: '/welcome',
    name: 'Welcome',
    component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '欢迎页',
    },
  }]
}
```

## 多级路由说明

在上面的基础上，如果需要加上多级路由

前面我们提到项目不建议使用多级路由,如果你用多级路由的写法来写路由，如下，系统会自动将多级转化成扁平化的数组

```js
// 模块内的路由
const routes: RouteConfigEx[] = [
  {
    path: '/welcome',
    name: 'Welcome',
    // 多级路由这里不需要写
    // component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '欢迎页',
    },
    children: [
      {
        path: '/child',
        name: 'WelcomeChild',
        component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
        meta: {
          title: '欢迎页子页',
        },
      },
    ],
  },
];
```

**上面的路由会转化成以下结构**

```js
[
  {
    path: '/welcome',
    name: 'Welcome',
    // 多级路由这里不需要写
    // component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '欢迎页',
    },
  },
  {
    path: '/child',
    name: 'WelcomeChild',
    component: () => createAsyncComponent(import('@/views/dashboard/welcome/index.vue')),
    meta: {
      title: '欢迎页子页',
    },
  },
];
```

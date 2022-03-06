# 菜单

项目菜单配置存放于 [src/router/menus](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus) 下面

::: tip 提示

菜单必须和路由匹配才能显示

:::

## 菜单项类型

```ts
export interface Menu {
  //  菜单名
  name: string;
  // 菜单图标,如果没有，则会尝试使用route.meta.icon
  icon?: string;
  // 菜单路径
  path: string;
  // 是否禁用
  disabled?: boolean;
  // 子菜单
  children?: Menu[];
  // 菜单标签设置
  tag: {
    // 为true则显示小圆点
    dot: boolean;
    // 内容
    content: string';
    // 类型
    type: 'error' | 'primary' | 'warn' | 'success';
  };
  // 是否隐藏菜单
  hideMenu?: boolean;
}
```

## 菜单模块

一个菜单文件会被当作一个模块

::: tip 提示

children 的 path 字段不需要以`/`开头

:::

```ts
import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';
const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t('routes.dashboard.dashboard'),
    path: '/dashboard',

    children: [
      {
        path: 'analysis',
        name: t('routes.dashboard.analysis'),
      },
      {
        path: 'workbench',
        name: t('routes.dashboard.workbench'),
      },
    ],
  },
};
export default menu;
```

以上模块会转化成以下结构

```ts
[
  path: '/dashboard',
  name: t('routes.dashboard.dashboard'),
  children: [
    {
      path: 'dashboard/analysis',
      name: t('routes.dashboard.analysis'),
    },
    {
      path: 'dashboard/workbench',
      name: t('routes.dashboard.workbench'),
    },
  ],
]
```

## 新增菜单

直接在 [src/router/menus/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus/modules) 内新增一个模块文件即可。

不需要手动引入，放在[src/router/routes/menus/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus/modules) 内的文件会自动被加载。

## 菜单排序

在菜单模块内，设置 `orderNo` 变量，数值越大，排序越靠后

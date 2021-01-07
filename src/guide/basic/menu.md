# 菜单

项目菜单配置存放于[/@/router/menus](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/menus) 下面

## 菜单项

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
    dot: true;
    // 内容
    content: '12';
    // 类型
    type: 'error' | 'primary' | 'warn' | 'success';
  };
}
```

## 菜单模块

::: tip 注意

children 的 path 字段不需要以`/`开头

:::

```ts
import type { MenuModule } from '/@/router/types.d';
const menu: MenuModule = {
  // 菜单排序。越大排名越后面
  orderNo: 50,
  menu: {
    path: '/tree',
    name: 'Tree',
    children: [
      {
        path: 'basic',
        name: '基础示例',
      },
      {
        path: 'editTree',
        name: '右键示例',
      },
      {
        path: 'actionTree',
        name: '函数操作示例',
      },
    ],
  },
};
export default menu;
```

以上模块会转化成以下结构

```ts

[
  path: '/tree',
  name: 'Tree',
  children: [
    {
      path: 'tree/basic',
      name: '基础示例',
    },
    {
      path: 'tree/editTree',
      name: '右键示例',
    },
    {
      path: 'tree/actionTree',
      name: '函数操作示例',
    },
  ],
]

```

## 新增菜单

1. 在[src/router/menus/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/menus/modules)内新增一个模块文件

::: tip 注意

- 菜单添加完成需要刷新页面或者重新运行项目(vite 重新运行项目很快)可以触发热更新。
- 自动导入的模块在删除后必须重新运行

:::

到这里你菜单已经添加完成，不需要手动引入，放在[src/router/routes/menus/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/menus/modules)内的文件会自动被加载

### 菜单排序

在菜单模块内，可以`orderNo` 变量

::: tip

orderNo 越大，排序越靠后

:::

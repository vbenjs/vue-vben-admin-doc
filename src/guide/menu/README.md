# 基础说明

项目菜单配置存放于`src/router/menus 下面`

## 相关配置

参考 [项目配置](/guide/setting/project)

## 菜单组成

```js
{
  // 菜单名
  name: string;

  // 菜单图标,如果没有，则会尝试使用route.meta.icon
  icon?: string;

  // 菜单路径
  path: string;

  // 是否禁用
  disabled?: boolean;

  // 子菜单
  children?: MenuItem[];
}


```

## 菜单模块

```js
import { NormMenuItem } from '@/router/types';
// 菜单模块排序
export const orderNo = 20;
export default {
  name: '权限管理',
  path: '/auth',
  children: [
    {
      name: '基于前端角色',
      path: '/role',
      children: [
        {
          name: '页面权限',
          path: '/page',
        },
        {
          name: '按钮权限',
          path: '/btn',
        },
        {
          name: 'admin可见',
          path: '/test1',
        },
        {
          name: 'normal可见',
          path: '/test2',
        },
      ],
    },
    {
      name: '基于后台',
      path: '/back',
      children: [
        {
          name: '页面权限',
          path: '/page',
        },
        {
          name: '按钮权限',
          path: '/btn',
        },
      ],
    },
  ],
} as NormMenuItem;

```

**以上模块会转化成以下结构**

```js
export default {
  name: '权限管理',
  path: '/auth',
  children: [
    {
      name: '基于前端角色',
      path: '/auth/role',
      children: [
        {
          name: '页面权限',
          path: '/auth/role/page',
        },
        {
          name: '按钮权限',
          path: '/auth/role/btn',
        },
        {
          name: 'admin可见',
          path: '/auth/role/test1',
        },
        {
          name: 'normal可见',
          path: '/auth/role/test2',
        },
      ],
    },
    {
      name: '基于后台',
      path: '/auth/back',
      children: [
        {
          name: '页面权限',
          path: '/auth/back/page',
        },
        {
          name: '按钮权限',
          path: '/auth/back/btn',
        },
      ],
    },
  ],
};
```

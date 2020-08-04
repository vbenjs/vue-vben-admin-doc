## 方式

在项目`src/router/menus 下面`新增文件，或者在原有的菜单模块内新增

**新增 test 模块菜单**

```js

import { NormMenuItem } from '@/router/types';
export default {
  name: '测试菜单',
  path: '/test',
  children: [
    {
      name: '测试菜单1-1',
      path: '/1-1',
    },
  ],
} as NormMenuItem;

// ==>  以上会自动转化为：
export default {
  name: '测试菜单',
  path: '/test',
  children: [
    {
      name: '测试菜单1-1',
      path: '/test/1-1',
    },
  ],
}
```

::: warning 注意

菜单添加完成需要手动刷新界面，才能自动加载

:::

::: tip 温馨提醒

这里自动加载会忽略以 `_`开头的文件

:::

到这里你菜单你已经添加完成，不需要手动引入，放在 `src/router/menu/`内的文件会自动被加载

## 菜单排序

在菜单模块内，可以单独 `export orderNo` 变量

```js
export const orderNo = 20;
```

::: tip

orderNo 越大，排序越靠后

:::

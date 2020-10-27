# 路由

## 说明

项目路由配置存放于[src/router/routes](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes) 下面。 [src/router/routes/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules)用于存放路由模块,在该文件下内的文件会自动注册为[src/router/routes/index.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/index.ts)内的`RootRoute`的子路由

## 路由配置

### 模块说明

在[src/router/routes/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules)内的一个`.ts`文件会被视为一个路由模块。

一个路由模块包含以下结构

**layout**: 为该路由模块的统一布局,一般是 `PAGE_LAYOUT_COMPONENT`

**routes**: 为路由列表。语法与[Vue-Router-Next](https://next.router.vuejs.org/)保持一致

```ts
import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

export default {
  layout: {
    path: '/dashboard',
    name: 'Dashboard',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/dashboard/welcome',
    meta: {
      icon: 'ant-design:home-outlined',
      title: 'Dashboard',
    },
  },

  routes: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('/@/views/dashboard/welcome/index.vue'),
      meta: {
        title: '首页',
      },
    },
  ],
} as AppRouteModule;
```

**上面的模块生成路由结构为**

```ts
{
  path: '/dashboard',
  component: PAGE_LAYOUT_COMPONENT,
  redirect: '/dashboard/welcome',
  meta: {
    title: 'Dashboard',
    icon: 'ant-design:home-outlined',
  },
  children:[{
    path: '/welcome',
    name: 'Welcome',
    component: () => import('/@/views/dashboard/welcome/index.vue'),
    meta: {
      title: '首页',
    },
  }]
}

```

### 多级路由

**项目中是放弃多级路由的**

项目中所有的多级路由会被转化为二级路由,原因是为了配置 KeepAlive 进行缓存。如果你没有这方面的需求。可以自行处理多级路由，可能需要对项目进行改造。

**示例**

```ts
import type { AppRouteModule } from '/@/router/types';
import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';
export default {
  layout: {
    path: '/charts',
    name: 'Charts',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/charts/apexChart',
    meta: {
      icon: 'ant-design:area-chart-outlined',
      title: '图表库',
    },
  },
  routes: [
    {
      path: '/echarts',
      name: 'Echarts',
      // 多级路由这里不需要写component
      meta: {
        title: 'Echarts',
      },
      children: [
        {
          // 子路由不加 /  会自动拼接父级路径
          path: 'map',
          name: 'Map',
          component: () => import('/@/views/demo/echarts/Map.vue'),
          meta: {
            title: '地图',
          },
        },
      ],
    },
  ],
} as AppRouteModule;
```

上面的路由会转化成以下结构

```ts
[
  {
    path: '/echarts/map',
    name: 'Map',
    component: () => import('/@/views/demo/echarts/Map.vue'),
    meta: {
      title: '地图',
    },
  },
];
```

::: tip 注意

1. routes 内如果有 children，需要注意子路由的路径,如果子路由 path 以`/开头`,vue-router 不会拼接父级路径。这可能会与菜单不起配。一般子路由不能以`/`开头。如果需要，需要注意修改菜单地址。
2. 所有路由的`Name`不能重复 :::

## Meta 配置说明

```ts
export interface RouteMeta {
  // 路由title  一般必填
  title: string;
  // 是否忽略权限，只在权限模式为Role的时候有效
  ignoreAuth?: boolean;
  // 可以访问的角色，只在权限模式为Role的时候有效
  roles?: RoleEnum[];
  // 是否忽略KeepAlive缓存
  ignoreKeepAlive?: boolean;
  // 是否固定标签
  affix?: boolean;
  // 图标，也是菜单图标
  icon?: string;
  // 内嵌iframe的地址
  frameSrc?: string;
  // 外部连接地址
  externalLink?: string;
  // 指定该路由切换的动画名
  transitionName?: string;
  // 隐藏该路由在面包屑上面的显示
  hideBreadcrumb?: boolean;
  // 禁止在面包屑点击跳转
  disabledRedirect?: boolean;
  // 如果有多个页面都用到同一个文件，则需要设置为true。防止页面切换后loading没有关闭
  afterCloseLoading?: boolean;
  // 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true
  carryParam?: boolean;
}
```

### 外部页面嵌套

只需要将 frameSrc 设置为需要跳转的地址即可

```ts
{
    path: '/doc',
    name: 'Doc',
    component: IFrame,
    meta: {
      frameSrc: 'https://vvbin.cn/docs/',
      title: '项目文档(内嵌)',
    },
  },
```

### 外链

只需要将 externalLink 设置为需要跳转的地址即可

```ts
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
{
    path: '/docExternal',
    name: 'DocExternal',
    component: IFrame,
    meta: {
      externalLink: 'https://vvbin.cn/docs/',
      title: '项目文档(外链)',
    },
  },
```

### icon 配置说明

这里的 icon 配置，会同步到 **菜单** 及**多标签页**的图标

icon 的值可以查看

## 新增路由

### 如何新增一个路由模块

1. 在[src/router/routes/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules)内新增一个模块文件

示例,在[src/router/routes/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules)下新增 test.ts 文件

```ts
import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

export default {
  layout: {
    path: '/test',
    name: 'TestDemo',
    component: PAGE_LAYOUT_COMPONENT,
    redirect: '/table/basic',
    meta: {
      icon: 'ant-design:table-outlined',
      title: 'Table',
    },
  },

  routes: [
    {
      path: '/basic',
      name: 'TableBasicDemo',
      component: () => import('/@/views/demo/table/Basic.vue'),
      meta: {
        title: '基础表格',
      },
    },
  ],
} as AppRouteModule;
```

::: tip 注意

菜单添加完成需要手动触发一次热更新。可以在你 `main.ts`内按保存或者重新运行项目(vite 重新运行项目很快)可以触发热更新。 :::

到这里你路由已经添加完成，不需要手动引入，放在[src/router/routes/modules](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules)内的文件会自动被加载

### 验证

您可以尝试访问 **ip:端口/test/basic**出现对应组件内容即代表成功

## 路由刷新

项目中采用的是**重定向**方式

### 具体实现

```ts
import { useRedo } from '/@/hooks/web/usePage';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const redo = useRedo();

    // 执行刷新
    redo();
    return {};
  },
});
```

### useRedo 实现

```ts
export const useRedo = () => {
  const { push, currentRoute } = useRouter();
  function redo() {
    push({
      path: '/redirect' + unref(currentRoute).fullPath,
    });
  }
  return redo;
};
```

### Redirect

[src/views/sys/redirect/index.vue](https://github.com/anncwb/vue-vben-admin/tree/main/src/views/sys/redirect/index.vue)

```ts
import { defineComponent, unref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Redirect',
  setup() {
    const { currentRoute, replace } = useRouter();
    const { params, query } = unref(currentRoute);
    const { path } = params;
    const _path = Array.isArray(path) ? path.join('/') : path;
    replace({
      path: '/' + _path,
      query,
    });
    return {};
  },
});
```

## 页面跳转

页面跳转建议采用项目提供的 **useGo**

### 具体方式

```ts
import { useGo } from '/@/hooks/web/usePage';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const go = useGo();

    // 执行刷新
    go();
    go(PageEnum.Home);
    return {};
  },
});
```

## 多标签页

标签页使用的是` keep-alive` 和 `router-view` 实现，实现切换 tab 后还能保存切换之前的状态

### 如何开启页面缓存

1. 在[项目配置](./setting.md#项目配置)内将 `openKeepAlive`设置为`true`.
2. 路由及对应的组件的 name 值需要保持一致

```ts
 {
   ...,
    // name
    name: 'Login',
    // 对应组件组件的name
    component: () => import('/@/views/sys/login/index.vue'),
    ...
  },

  // /@/views/sys/login/index.vue
  export default defineComponent({
    // 需要和路由的name一致
    name:"Login"
  });
```

:::tip 注意

keep-alive 生效的前提是

**include - 字符串或正则表达式。只有名称匹配的组件会被缓存。**

所以需要将路由的 name 属性及对应的页面的 name 设置成一样 :::

### 如何让某个页面不缓存

**可在 router.meta 下配置**

可以将 `ignoreKeepAlive`配置成`true`即可关闭缓存。

```ts
export interface RouteMeta {
  // 是否忽略KeepAlive缓存
  ignoreKeepAlive?: boolean;
}
```

### 如何操作多标签页

## 实现方式

::: tip 实现原理

该方式的实现原理是通过后台动态生成路由表，且遵循一定的结构返回给前端，如果不是前端需要自行转化为可识别的结构，在通过 router.addRoutes 添加到路由实例，实现权限的动态生成

:::

::: warning 缺点

需要后台配合，且前端 通过 `@import('@/views/${view}.vue')`的方式引入组件会导致 src/views 下面的文件不管有没有被使用到，都会被打包，且进行格式校验

:::

## 实现流程

- **将系统权限模式改为 BACK**

`src/settings/projectSetting.ts`

```js
const setting: ProjectConfig = {
  // 权限模式
  authMode: AuthModeEnum.BACK,
};
```

::: warning 注意事项

修改**projectSetting.ts**内的配置信息后，需要清空浏览器缓存

:::

- **通过接口请求菜单列表（见注释）**

```js
  // src/store/modules/permission.ts
  @Action
  function buildRoutesAction(id?: number | string): Promise<RouteConfigEx[]> {
    let routes: RouteConfigEx[] = [];
    const { authMode } = appStore.getProjCfg;
      // 动态请求菜单
    if (authMode === AuthModeEnum.BACK) {
      const userId = id || userStore.getUserInfoState.userId;
      if (!userId) {
        throw new Error('userId is undefined!');
      }
      // 这里接口请求后台菜单
      const routeList: RouteItem[] = await getUserInfoById({
        userId,
      });
      const res = transformObjToRoute(routeList);
      // ...xxxx
    }
    return routes;
  }
```

- **getUserInfoById 接口返回值**

```js

{
  // 如果是 PAGE_LAYOUT 则使用 src/layouts/page/index.vue
    component: 'PAGE_LAYOUT',
    name: 'Dashboard',
    path: '/dashboard',
    redirect: '/dashboard/analysis',
    meta: {
      title: 'Dashboard',
    },
    children: [
      {
        path: '/dashboard/welcome',
        name: 'Welcome',
        // 对应 @/views/dashboard/welcome/index
        component: 'dashboard/welcome/index',
        meta: {
          title: '欢迎页',
        },
      },
      {
        path: '/dashboard/analysis',
        name: 'Analysis',
        component: 'dashboard/analysis/index',
        meta: {
          title: '分析页',
          affix: true,
        },
      },
    ],
  },


```

## 动态更换菜单

系统提供[useAuth](/hooks/core/useAuth) 方便角色相关操作

```js
import { useAuth } from '@/hooks/core/useAuth';

const { changeMenu } = useAuth();

// 动态更改角色，传入id，具体逻辑可以自行修改
changeMenu('1');
```

## 细粒度权限

[useAuth](/hooks/core/useAuth) 还提供了细粒度判断

### 函数式权限

```js
const { hasCodeAuth } = useAuth();

// 可以判断当前角色是否有权限
// 拥有20020code可见
const isAuth = hasCodeAuth('20020');
```

### 组件式权限

Authority 组件使用请查看[Authority](/comp/authority/)

```tsx
import { Authority } from '@/components/authority/index';

<Authority authMode={AuthModeEnum.BACK} code="20020">
  <Button>拥有code: 20020可见</Button>
</Authority>;
```

### 如何初始化 code

```js
import { getBtnCodeListByUserId } from '@/api/sys/menu';
import { permissionStore } from '@/store/modules/permission';

// !模拟从后台获取权限编码， 该函数可能只需要执行一次，实际项目可以自行放到合适的时机
async function initPermissionCode(userId: string) {
  const codeList = await getBtnCodeListByUserId({ userId });
  permissionStore.commitPermCodeListState(codeList);
}
//
```

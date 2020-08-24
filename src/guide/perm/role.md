## 实现方式

::: tip 实现原理

该方式实现的原理是在前端固定写死路由的权限，指定路由有哪些权限可以查看，一开始只初始化通用的路由，需要权限才能访问的路由没有被加入路由表内，在登陆后或者其他方式获取用户角色后，通过角色去遍历路由表，获取该角色可以访问的路由表，生成路由表，在通过 router.addRoutes 添加到路由实例，实现权限的过滤

:::

::: warning 缺点

权限相对不自由，如果后台改动角色，前台也需要跟着改动。适合角色较固定的系统

:::

## 实现流程

- **将系统权限模式改为 ROLE**

`src/settings/projectSetting.ts`

```js
const setting: ProjectConfig = {
  // 权限模式
  authMode: AuthModeEnum.ROLE,
};
```

::: warning 注意事项

修改**projectSetting.ts**内的配置信息后，需要清空浏览器缓存

:::

- **在路由表配置路由所需的权限，如果不配置，默认可见(见注释)**

```js
// src/router/routes/**
const routes: RouteConfigEx[] = [
  {
    path: '/role',
    name: 'RoleAuth',
    meta: {
      title: '基于前端角色',
    },
    children: [
      {
        path: '/test2',
        name: 'AuthTest2',
        component: () => createAsyncComponent(import('@/views/examples/auth/AuthTest2.vue')),
        meta: {
          title: 'Normal角色可见',
          // 这里可以配置哪些角色可以访问
          roles: [RoleEnum.NORMAL],
        },
      },
    ],
  },
];
```

- **在路由钩子内动态判断**

```js
// src/router/guard/authGuard
export function createAuthGuard(): NavigationGuard {
  return (to, form, next) => {
    try {
      const token = getToken();

      // 已经过滤过路由，不再重复进行过滤
      if (permissionStore.getHasRouteState) {
        to.path === '/' ? next({ path: pageEnum.BASE_HOME, replace: true }) : next();
        return;
      }
      // 过滤路由表
      permissionStore.buildRoutesAction().then((addRoutes) => {
        if (addRoutes && addRoutes.length) {
          const { getRouteInstance } = routerInstance;
          getRouteInstance().addRoutes(addRoutes);
          permissionStore.commitHasRouteState(true);
          const redirectPath = (form.query.redirect || to.path) as string;
          const redirect = decodeURIComponent(redirectPath);
          const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
          next(nextData as Location);
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}


```

## 动态更换角色

系统提供[useAuth](/hooks/core/useAuth) 方便角色相关操作

```js
import { useAuth } from '@/hooks/core/useAuth';

const { changeRole } = useAuth();

// 动态更改角色，传入角色名称
changeRole(RoleEnum.ADMIN);
```

## 细粒度权限

[useAuth](/hooks/core/useAuth) 还提供了细粒度判断

### 函数式权限

```js
const { hasRoleAuth } = useAuth();

// 可以判断当前角色是否有权限
const isAuth = hasRoleAuth(RoleEnum.ADMIN);
```

### 组件式权限

Authority 组件使用请查看[Authority](/comp/authority/)

```tsx
import { Authority } from '@/components/authority/index';

<Authority roles={RoleEnum.ADMIN}>
  <Button>Admin角色可见</Button>
</Authority>;
```

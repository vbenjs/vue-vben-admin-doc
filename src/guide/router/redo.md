## 路由刷新

项目中采用的是 **重定向**方式

## 具体实现

```js
import { useRedo } from '@/hooks/core/useRouter';

// 使用该方法即可刷新当前路由
useRedo();
```

**useRedo**

跳转 `/redirect`页面

```js
export const useRedo = () => {
  const { routeRef, router } = useRouter();
  router.push({
    path: '/redirect' + unref(routeRef).fullPath,
  });
};
```

**redirect**

重定向回到原先页面

```tsx
import { defineComponent, onBeforeMount } from 'compatible-vue';

export default defineComponent({
  name: 'Redirect',
  setup(props, { root }) {
    const { $route, $router } = root;
    onBeforeMount(() => {
      const { params, query } = $route;
      const { path } = params;
      $router.replace({
        path: '/' + path,
        query,
      });
    });
    return () => null;
  },
});
```

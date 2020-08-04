### 说明

useRouter: 路由相关操作

```js
import { useRouter } from '@/hooks/core/useRouter';

const { routeRef, router } = useRouter();
```

| 状态     | 类型         | 说明              |
| -------- | ------------ | ----------------- |
| routeRef | `Ref<Route>` | 当前路由 ref 对象 |
| router   | `Router`     | 路由对象          |

```js
import { useRedo } from '@/hooks/core/useRouter';

// 刷新当前页面
useRedo();
```

```js
import { useGo } from '@/hooks/core/useRouter';

// 跳转指定页面
useGo({
  path: pageEnum,
  replace: boolean,
});
```

| 参数    | 类型       | 说明                                           |
| ------- | ---------- | ---------------------------------------------- |
| path    | `pageEnum` | 需要跳转的路由地址，最后放在 pageEnum 统一管理 |
| replace | `boolean`  | 路由是否覆盖当前页                             |

### 示例

```vue
<script>
  import { useRouter, useRedo, useGo } from '@/hooks/core/useRouter';

  export default {
    setup() {
      const { routeRef, router } = useRouter();

      return () => {
        return (
          <div>
            <button
              onClick={() => {
                router.push('/');
              }}
            >
              跳转首页
            </button>
            <button
              onClick={() => {
                useRedo();
              }}
            >
              刷新页面
            </button>
          </div>
        );
      };
    },
  };
</script>
```

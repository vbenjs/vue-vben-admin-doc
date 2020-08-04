### 说明

异步获取 promise 值

```js
import { useAsyncState } from '@/hooks/core/useAsyncState';

const { state, ready } =
  useAsyncState < T > ((promise: Promise<T>), (defaultState: T), (delay = 0), (catchFn = () => {}));
```

### 　状态

| 状态  | 类型    | 说明           |
| ----- | ------- | -------------- |
| state | any     | 异步函数返回值 |
| ready | boolean | 是否已执行完毕 |

### 参数

| 状态         | 类型     | 说明             |
| ------------ | -------- | ---------------- |
| promise      | Promise  | promise 执行对象 |
| defaultState | any      | 默认值           |
| delay        | Number   | 指定时间后执行   |
| catchFn      | Function | 执行错误函数     |

### 示例

```vue
<script>
  import { useAsyncState } from '@/hooks/core/useAsyncState';

  export default {
    setup() {
      const { state, ready } = useAsyncState(
        async () => {
          return { a: 1 };
        },
        { a: 2 }
      );

      return () => {
        return <div>{state}</div>;
      };
    },
  };
</script>
```

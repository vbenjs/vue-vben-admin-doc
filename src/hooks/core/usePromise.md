### 说明

异步获取 promise 值

```js
import { usePromise } from '@/hooks/core/usePromise';

const { resultRef, doneRef, loadingRef, errorRef, exec } = usePromise(fn, opt);
```

### 　状态

| 状态       | 类型     | 说明           |
| ---------- | -------- | -------------- |
| resultRef  | any      | 异步函数返回值 |
| doneRef    | boolean  | 是否已执行完毕 |
| loadingRef | boolean  | 执行状态       |
| errorRef   | any      | 执行错误信息   |
| exec       | Function | 执行一次函数   |

### 参数

| 状态 | 类型                | 说明                               |
| ---- | ------------------- | ---------------------------------- |
| fn   | Promise             | promise 执行对象                   |
| opt  | {immediate:boolean} | 配置对象，immediate：是否立即 执行 |

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';

  import { usePromise } from '@/hooks/core/usePromise';

  export default {
    setup() {
      const { resultRef, doneRef, loadingRef, errorRef, exec } = usePromise(
        async () => {
          return { a: 1 };
        },
        { immediate: true }
      );

      return () => {
        return (
          <div>
            result:{unref(resultRef)}
            done:{unref(doneRef)}
            loading:{unref(loadingRef)}
            error:{unref(errorRef)}
          </div>
        );
      };
    },
  };
</script>
```

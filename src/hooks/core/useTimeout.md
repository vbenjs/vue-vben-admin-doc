### 说明

定时器使用

```js
import { useTimeout } from '@/hooks/core/useTimeout';

const [clear, runAgain, readyRef] = useTimeout(handler, wait);
```

### 　状态

| 状态     | 类型        | 说明         |
| -------- | ----------- | ------------ |
| clear    | Function    | 删除定时任务 |
| runAgain | Function    | 重新执行一次 |
| readyRef | Ref boolean | 是否已经执行 |

### 参数

| 状态    | 类型       | 说明           |
| ------- | ---------- | -------------- |
| handler | `Function` | 定时任务函数   |
| wait    | Number     | 定时器定时时间 |

### 示例

```vue
<script>
  import { useTimeout } from '@/hooks/core/useTimeout';

  export default {
    setup() {
      useTimeout(() => {
        console.log('任务执行了');
      }, 100);

      return () => {
        return <div />;
      };
    },
  };
</script>
```

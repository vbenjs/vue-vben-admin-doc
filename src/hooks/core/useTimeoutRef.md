### 说明

定时器使用

```js
import { useTimeoutRef } from '@/hooks/core/useTimeoutRef';

const [readyRef, clear, openTimer] = useTimeout(wait);
```

### 　状态

| 状态      | 类型        | 说明         |
| --------- | ----------- | ------------ |
| clear     | Function    | 删除定时任务 |
| openTimer | Function    | 开启定时器   |
| readyRef  | Ref boolean | 是否已经执行 |

### 参数

| 状态 | 类型   | 说明           |
| ---- | ------ | -------------- |
| wait | Number | 定时器定时时间 |

### 示例

```vue
<script>
  import { useTimeoutRef } from '@/hooks/core/useTimeoutRef';

  export default {
    setup() {
      const [readyRef] = useTimeoutRef(100);

      return () => {
        return <div>{readyRef.value ? 'on' : 'off'}</div>;
      };
    },
  };
</script>
```

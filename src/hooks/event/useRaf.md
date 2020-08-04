### 说明

requestAnimationFrame 事件触发

```js
import { useRaf } from '@/hooks/core/useRaf';

const { stop, start } = useRaf(fn, options);
```

### 　状态

| 状态  | 类型     | 说明     |
| ----- | -------- | -------- |
| start | Function | 开始执行 |
| stop  | Function | 停止执行 |

### 参数

| 状态    | 类型   | 说明     |
| ------- | ------ | -------- |
| wait    | Number | 触发时间 |
| options | any    | 配置项   |

### options

```js
{
  immediate?: boolean;
}
```

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useRaf } from '@/hooks/core/useRaf';

  export default {
    setup() {
      const { start, stop } = useRaf(() => {
        console.log('run');
      });
      start();
      return () => {
        return <div></div>;
      };
    },
  };
</script>
```

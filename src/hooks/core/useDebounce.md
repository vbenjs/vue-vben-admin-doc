### 说明

节流函数

```js
import { useDebounce } from '@/hooks/core/useDebounce';

const [fn, cancel] = useDebounce(handle, wait, options);
```

### 　状态

| 状态   | 类型     | 说明                     |
| ------ | -------- | ------------------------ |
| fn     | Function | 节流函数包装过后的新函数 |
| cancel | Function | 删除节流执行任务         |

### 参数

| 状态    | 类型         | 说明                 |
| ------- | ------------ | -------------------- |
| wait    | Number       | 节流函数时间         |
| handle  | Function     | 节流函数要包装的函数 |
| options | 节流函数配置 | 定时器定时时间       |

### options

```js

{
  // 立即执行
  immediate?: boolean;
  // 只执行一次
  once?: boolean;
}

```

### 示例

```vue
<script>
  import { useDebounce } from '@/hooks/core/useDebounce';

  export default {
    setup() {
      const [handle] = useDebounce(() => {
        console.log('run');
      }, 100);

      return () => {
        return (
          <div>
            <button onClick={() => handle()}></button>
          </div>
        );
      };
    },
  };
</script>
```

### 说明

防抖函数

```js
import { useThrottle, throttle } from '@/hooks/core/useThrottle';

const [fn, cancel] = useThrottle(handle, wait, options);
```

### 　状态

| 状态   | 类型     | 说明                     |
| ------ | -------- | ------------------------ |
| fn     | Function | 防抖函数包装过后的新函数 |
| cancel | Function | 删除防抖执行任务         |

### 参数

| 状态    | 类型         | 说明                 |
| ------- | ------------ | -------------------- |
| wait    | Number       | 防抖函数时间         |
| handle  | Function     | 防抖函数要包装的函数 |
| options | 防抖函数配置 | 定时器定时时间       |

### options

```js

{
  // 立即执行
  immediate?: boolean;
  // 是否为debounce
  debounce?: boolean;
  // 只执行一次
  once?: boolean;
}

```

### 示例

```vue
<script>
  import { useThrottle } from '@/hooks/core/useThrottle';

  export default {
    setup() {
      const [handle] = useThrottle(() => {
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

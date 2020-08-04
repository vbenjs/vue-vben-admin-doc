### 说明

window size 改变事件

```js
import { useWindowSize } from '@/hooks/core/useWindowSize';

const { widthRef, heightRef } = useWindowSize(wait, options);
```

### 　状态

| 状态      | 类型       | 说明 |
| --------- | ---------- | ---- |
| widthRef  | Ref number | 宽度 |
| heightRef | Ref number | 长度 |

### 参数

| 状态    | 类型   | 说明     |
| ------- | ------ | -------- |
| wait    | Number | 触发时间 |
| options | any    | 配置项   |

```js
import { useWindowSizeFn } from '@/hooks/core/useWindowSize';

useWindowSizeFn(fn, wait, options);
```

### 参数

| 状态    | 类型     | 说明                     |
| ------- | -------- | ------------------------ |
| fn      | Function | 窗口大小改变时触发该函数 |
| wait    | Number   | 触发时间                 |
| options | any      | 配置项                   |

### options

```js
{
  once?: boolean;
  immediate?: boolean;
  listenerOptions?: AddEventListenerOptions | boolean;
}
```

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useWindowSize, useWindowSizeFn } from '@/hooks/core/useWindowSize';

  export default {
    setup() {
      const { widthRef, heightRef } = useWindowSize(10);
      useWindowSizeFn(() => {
        console.log('size change');
      }, 20);
      return () => {
        return (
          <div>
            width:{unref(widthRef)}
            height:{unref(heightRef)}
          </div>
        );
      };
    },
  };
</script>
```

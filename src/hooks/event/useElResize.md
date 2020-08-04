### 说明

dom resize 改变事件

```js
import { useElResize } from '@/hooks/core/useElResize';

const [start, stop] = useElResize(el, fn, wait, options);
```

### 　状态

| 状态  | 类型     | 说明     |
| ----- | -------- | -------- |
| start | Function | 开始监听 |
| stop  | Function | 停止监听 |

### 参数

| 状态    | 类型 | 说明            |
| ------- | ---- | --------------- |
| el      | any  | 监听的 dom 对象 |
| fn      | any  | 监听函数        |
| wait    | any  | debouce 时间    |
| options | any  | 配置项          |

### options

```js
{
  // 只执行一次
  once?: boolean;
  // 立即执行
  immediate?: boolean;
}
```

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useElResize } from '@/hooks/core/useElResize';

  export default {
    setup() {
      const elRef = ref(null);
      const [start, stop] = useElResize(unref(elRef), () => {
        console.log('dom resize');
      });
      start();
      return () => {
        return <div ref={elRef}></div>;
      };
    },
  };
</script>
```

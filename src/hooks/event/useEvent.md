### 说明

事件监听，自动销毁

```js
import { useEvent } from '@/hooks/core/useEvent';

const { removeEvent } = useEvent(UseEventParams);
```

### 　状态

| 状态        | 类型     | 说明             |
| ----------- | -------- | ---------------- |
| removeEvent | Function | 手动删除事件监听 |

### 参数

**UseEventParams**

```js
{
  // 监听的dom对象
  el,
  // 事件名称
  name,
  // 事件
  listener,
  // 配置
  options,
  // 自动删除
  autoRemove = true,
  // 是否开启debounce
  isDebounce = true,
  // debounce 时间
  wait = 150,
}
```

### 示例

```vue
<script>
  import { unref, onMounted } from 'compatible-vue';
  import { useEvent } from '@/hooks/core/useEvent';

  export default {
    setup() {
      useEvent({
        el: window,
        name: 'resize',
        listener: () => {
          console.log('onResize');
        },
        options: true,
      });
      return () => {
        return <div></div>;
      };
    },
  };
</script>
```

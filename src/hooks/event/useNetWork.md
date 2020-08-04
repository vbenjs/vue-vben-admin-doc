### 说明

监听网络状态

```js
import { useNetWork } from '@/hooks/event/useNetWork';

useNetWork({
  onLineFn,
  offLineFn,
});
```

### 参数

| 名称      | 类型     | 说明           |
| --------- | -------- | -------------- |
| onLineFn  | Function | 无网=>有网触发 |
| offLineFn | Function | 有网=>无网触发 |

### 示例

```js
import { unref, ref } from 'compatible-vue';
import { useNetWork } from '@/hooks/event/useNetWork';

export default {
  setup() {
    useNetWork({
      onLineFn: () => {
        console.log('on-line');
      },
      offLineFn: () => {
        console.log('off-line');
      },
    });
    return () => {
      return <div />;
    };
  },
};
```

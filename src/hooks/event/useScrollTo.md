### 说明

dom 滚动到指定位置

```js
import { useScrollTo } from '@/hooks/event/useScrollTo';

const { start, stop } = useScrollTo(ScrollToParams);
```

### 　状态

| 状态  | 类型     | 说明       |
| ----- | -------- | ---------- |
| start | Function | x 开始滚动 |
| stop  | Function | 停止监听   |

### 参数

**ScrollToParams**

```js
{
  // dom对象
  el,
    // 滚动位置
    to,
    // 滚动时间
    duration,
    // 滚动结束后触发
    callback;
}
```

### 示例

```js
import { unref, ref } from 'compatible-vue';
import { useScrollTo } from '@/hooks/event/useScrollTo';

export default {
  setup() {
    const elRef = ref(null);

    const { start } = useScrollTo({
      el: unref(elRef),
      to: 0,
    });
    return () => {
      return (
        <div
          ref={elRef}
          onClick={() => {
            start();
          }}
        ></div>
      );
    };
  },
};
```

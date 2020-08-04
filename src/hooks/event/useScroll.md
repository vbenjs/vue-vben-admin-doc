### 说明

dom 滚动事件监听

```js
import { useScroll } from '@/hooks/event/useScroll';

const { refX, refY, stop } = useScroll(refEl, options);
```

### 　状态

| 状态 | 类型       | 说明          |
| ---- | ---------- | ------------- |
| refX | Ref number |  y 轴滚动高度 |
| refY | Ref number | x 轴滚动宽度  |
| stop | Function   | 停止监听      |

### 参数

| 状态    | 类型   | 说明              |
| ------- | ------ | ----------------- |
| refEl   | ref el | 要监听的 dom 对象 |
| options | any    | 配置项            |

### options

```js

{
    wait?: number;
    leading?: boolean;
    trailing?: boolean;
}
```

### 示例

```js
import { unref, ref } from 'compatible-vue';
import { useScroll } from '@/hooks/event/useScroll';

export default {
  setup() {
    const elRef = ref(null);
    const { refX, refY, stop } = useScroll(elref);

    return () => {
      return (
        <div ref={elRef}>
          {unref(refX)}
          {unref(refY)}
        </div>
      );
    };
  },
};
```

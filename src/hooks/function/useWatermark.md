### 说明

水印插件

```js
import { useWatermark } from '@/hooks/event/useWatermark';

const { setWatermark, clear } = useWatermark(appendEl);
```

### 　状态

| 状态         | 类型     | 说明       |
| ------------ | -------- | ---------- |
| setWatermark | Function |   设置水印 |
| clear        | Function | 清空水印   |

### 参数

| 状态     | 类型 | 说明                             |
| -------- | ---- | -------------------------------- |
| appendEl | el   | 水印插入的 dom 对象，默认为 body |

### 示例

```js
import { unref, ref } from 'compatible-vue';

export default {
  setup() {
    const { setWatermark, clear } = useWatermark();
    useWatermark('水印内容');
    return () => {
      return <div ref={elRef}></div>;
    };
  },
};
```

### 说明

ecahrt 图表

```js
import { useCharts } from '@/hooks/event/useCharts';

const { setOptions, echarts } = useCharts(elRef, theme);
```

### 　状态

| 状态       | 类型       | 说明                |
| ---------- | ---------- | ------------------- |
| setOptions | Function   |   设置 echarts 配置 |
| echarts    | Ref number | echarts 实例        |

### 参数

| 状态  | 类型    | 说明            |
| ----- | ------- | --------------- |
| elRef | ref el  | 渲染的 dom 对象 |
| theme | 'light' | 'dark'          | 'default' | 主题 |

### 示例

```js
import { unref, ref } from 'compatible-vue';
import { useCharts } from '@/hooks/event/useCharts';

export default {
  setup() {
    const elRef = ref(null);
    const { setOptions } = useCharts(elref);

    setOptions({
      series: [],
      ...
    });
    return () => {
      return <div ref={elRef}></div>;
    };
  },
};
```

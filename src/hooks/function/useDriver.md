### 说明

driver 引导页

```js
import { useDriver } from '@/hooks/event/useDriver';

const { startDriver } = useDriver(steps);
```

### 　状态

| 状态        | 类型     | 说明       |
| ----------- | -------- | ---------- |
| startDriver | Function |   开始引导 |

### 参数

steps: 参考 Driver.Step[]

### 示例

```js
import { unref, ref } from 'compatible-vue';
import { useCharts } from '@/hooks/event/useCharts';

export default {
  setup() {
    const { startDriver } = useStepsDriver([
      {
        element: '#elem-driver-trigger',
        popover: {
          title: '收起菜单栏',
          description: '',
        },
      },
      {
        element: '#elem-driver-action-github',
        popover: {
          title: '获取帮助',
          description: '',
        },
      },
      {
        element: '#elem-driver-action-refresh',
        popover: {
          title: '刷新页面',
          description: '',
        },
      },
      {
        element: '#elem-driver-setting-btn',
        popover: {
          title: '更改系统配置',
          description: '',
          position: 'left',
        },
      },
    ]);

    return () => {
      return (
        <div
          onClick={() => {
            startDriver();
          }}
        ></div>
      );
    };
  },
};
```

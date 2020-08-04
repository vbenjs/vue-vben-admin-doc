### 说明

右键菜单

```js
import { useContextMenu } from '@/hooks/event/useContextMenu';

const [createContextMenu, offContextMenu] = useContextMenu();
```

### 　状态

| 状态              | 类型     | 说明           |
| ----------------- | -------- | -------------- |
| createContextMenu | Function |   创建右键菜单 |
| offContextMenu    | Function | 销毁右键菜单   |

### 示例

```js
import { unref, ref, onMounted, onumMounted } from 'compatible-vue';
import { useContextMenu } from '@/hooks/event/useContextMenu';

export default {
  setup() {
    const elRef = ref(null);
    const { createContextMenu } = useContextMenu();

    onMounted(() => {
      /**
       * event: MouseEvent;
       * styles?: any;
       * items?: ContextMenuItem[];
       *
       **/
      createContextMenu({
        event: unref(elRef),
        items:[{
            label: string;
            icon?: string;
            disabled?: boolean;
            handler?: (...arg) => any;
            divider?: boolean;
            children?: ContextMenuItem[];
        }]
      });
    });
    return () => {
      return <div ref={elRef}></div>;
    };
  },
};
```

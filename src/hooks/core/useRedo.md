### 说明

`useRedo`：在页面刷新前弹出确认框

```js
import { useRedo } from '@/hooks/core/useRedo';

useRedo();
```

### 示例

```vue
<script>
  import { useRedo } from '@/hooks/core/useRedo';

  export default {
    setup() {
      useRedo();
      return () => {
        return <div />;
      };
    },
  };
</script>
```

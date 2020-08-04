### 说明

响应式断点监听

```js
import { useBreakpoint } from '@/hooks/core/useBreakpoint';

const { screenRef, widthRef, screenEnum, realWidthRef } = useBreakpoint();
```

### 　状态

| 状态         | 类型       | 说明         |
| ------------ | ---------- | ------------ |
| screenRef    | ref string | 断点类型     |
| widthRef     | ref number | 断点宽度     |
| screenEnum   | screenEnum | 断点宽度集合 |
| realWidthRef | ref number | 真实宽度     |

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useBreakpoint } from '@/hooks/core/useBreakpoint';

  export default {
    setup() {
      const { screenRef, widthRef, screenEnum, realWidthRef } = useBreakpoint();
      return () => {
        return (
          <div>
            {unref(screenRef)}
            {unref(widthRef)}
            {unref(realWidthRef)}
          </div>
        );
      };
    },
  };
</script>
```

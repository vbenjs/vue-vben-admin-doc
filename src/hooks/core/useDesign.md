### 说明

使用`useDesign`可以统一管理项目 的 class 类名前缀

```js
import { useDesign } from '@/hooks/core/useDesign';

const { prefixCls, prefixVar } = useDesign('scope');
```

| 状态      | 类型     | 说明                      |
| --------- | -------- | ------------------------- |
| prefixCls | `String` | 包含前缀的 bem 风格样式名 |
| prefixVar | `String` | 前缀                      |

### 示例

```vue
<script>
  import { useDesign } from '@/hooks/core/useDesign';

  export default {
    setup() {
      const { prefixCls, prefixVar } = useDesign('scope');

      return () => {
        return <div class={prefixCls} />;
      };
    },
  };
</script>
```

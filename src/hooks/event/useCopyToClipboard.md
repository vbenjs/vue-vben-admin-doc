### 说明

复制到剪切板

```js
import { useCopyToClipboard } from '@/hooks/core/useCopyToClipboard';

const { clipboardRef, isSuccessRef, copiedRef } = useCopyToClipboard(initial);
```

### 　状态

| 状态         | 类型        | 说明           |
| ------------ | ----------- | -------------- |
| clipboardRef | ref string  | 需要复制的内容 |
| isSuccessRef | ref boolean | 是否复制成功   |
| copiedRef    | boolean     | 是否已经复制   |

### 参数

| 状态    | 类型   | 说明         |
| ------- | ------ | ------------ |
| initial | string | 默认复制内容 |

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useCopyToClipboard } from '@/hooks/core/useCopyToClipboard';

  export default {
    setup() {
      const { clipboardRef } = useCopyToClipboard();
      return () => {
        return (
          <div
            onClick={() => {
              clipboardRef.value = 'copy value';
            }}
          >
            复制内容
          </div>
        );
      };
    },
  };
</script>
```

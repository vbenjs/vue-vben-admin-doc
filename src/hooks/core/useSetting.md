### 说明

使用`useSetting`可以获取项目配置及全局配置

::: tip

该 hook 可以不在 setup 函数内使用

:::

```js
import { useSetting } from '@/hooks/core/useSetting';

const { globSetting, projectSetting, designSetting } = useSetting();
```

| 状态 | 类型 | 说明 |
| --- | --- | --- |
| globSetting | GlobConfig | 全局配置文件，注入到 window 内,参考[动态配置](/guide/setting/window) |
| projectSetting | ProjectConfig | 项目配置,参考[动态配置](/guide/setting/project) |
| designSetting | object | 样式配置 |

### 示例

```vue
<script>
  import { useSetting } from '@/hooks/core/useSetting';

  export default {
    setup() {
      const { globSetting, projectSetting, designSetting } = useSetting();

      return () => {
        return <div />;
      };
    },
  };
</script>
```

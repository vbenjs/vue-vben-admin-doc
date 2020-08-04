### 说明

权限相关

```js
import { useAuth } from '@/hooks/core/useAuth';

const { changeMenu, changeRole, hasCodeAuth, hasRoleAuth, toggleAuthMode } = useAuth();
```

### 　状态

| 状态           | 类型     | 说明                                           |
| -------------- | -------- | ---------------------------------------------- |
| changeMenu     | Function | 在 Mode=Back 模式下，更改菜单的逻辑            |
| changeRole     | Function | 在 Mode=Role 模式下，切换角色                  |
| hasCodeAuth    | Function | 在 Mode=Back 模式下,判断传入的 code 是否有权限 |
| hasRoleAuth    | Function | 在 Mode=Role 模式下,判断传入的角色是否有权限   |
| toggleAuthMode | Function | 切换 Mode                                      |

### 示例

```vue
<script>
  import { useAuth } from '@/hooks/core/useAuth';

  export default {
    setup() {
      const { changeMenu, changeRole, hasCodeAuth, hasRoleAuth, toggleAuthMode } = useAuth();
      return () => {
        return <div></div>;
      };
    },
  };
</script>
```

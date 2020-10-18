# 权限组件

用于项目权限的组件，一般用于按钮级等细粒度权限管理

## 使用

```tsx
import  Authority from '/@/components/Authority/index';
import { defineComponent } from 'compatible-vue';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <Authority value={RoleEnum.ADMIN}>
            <Button type="primary" block>
              只有admin角色可见
            </Button>
          </Authority>
        </div>
      );
    };
  },
});
```

## Props

| 属性     | 类型                   | 默认值            | 说明                                                         |
| -------- | ---------------------- | ----------------- | ------------------------------------------------------------ |
| value    | `RoleEnum | RoleEnum[] |string |string[]` | -                 | 角色信息或者权限编码。会自动区分权限模式

## 说明

用于项目权限的组件，一般用于按钮级等细粒度权限管理

## 使用

```tsx
import { Authority } from '@/components/authority/index';
import { defineComponent } from 'compatible-vue';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <Authority roles={RoleEnum.ADMIN}>
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
| roles    | RoleEnum or RoleEnum[] | -                 | 角色信息                                                     |
| code     | string                 | -                 | 权限编码                                                     |
| authMode | AuthModeEnum           | AuthModeEnum.ROLE | 权限模式，有 AuthModeEnum.ROLE 和 AuthModeEnum.BACK 两种模式 |

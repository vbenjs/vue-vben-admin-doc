## Svg-icon 说明

用于项目内组件的展示,支持默认图标及 svg 图标

**icon 组件**位于 `src/components/icon`内

## 使用

```tsx
import { SvgIcon } from '@/components/icon';
import { defineComponent } from 'compatible-vue';

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <SvgIcon type="home" size="2em"></SvgIcon>
        </div>
      );
    };
  },
});
```

## Props

| 属性 | 类型     | 默认值 | 说明     |
| ---- | -------- | ------ | -------- |
| type | `string` | -      | 图标名   |
| size | `string` | 1em    | 图标大小 |

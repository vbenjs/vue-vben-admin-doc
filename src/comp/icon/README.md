## 说明

用于项目内组件的展示,支持默认图标及 svg 图标

**icon 组件**位于 `src/components/icon`内

## 使用

```tsx
import { Icon } from '@/components/icon';
import { defineComponent } from 'compatible-vue';

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <Icon type="user"></Icon>
          // svg-icon
          <Icon type="home|svg"></Icon>
          <Icon type="home" isSvg={true}></Icon>
        </div>
      );
    };
  },
});
```

## Props

| 属性  | 类型      | 默认值 | 说明                                           |
| ----- | --------- | ------ | ---------------------------------------------- |
| type  | `string`  | -      | 图标名,如果以`|svg`结尾则会渲染成 SvgIcon 组件 |
| isSvg | `boolean` | false  | 是否是 svg 图标                                |

::: tip Props 兼容

如果 icon 不是 svg 类型，则组件除了以上属性外还兼容组件库内原本默认的属性，具体可以查看组件库内的文档说明

:::

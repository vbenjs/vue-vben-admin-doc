# help 组件

帮助按钮组件

## 使用

```tsx
import { defineComponent } from 'compatible-vue';
import { BaseHelp } from '@/components/base/index';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <BaseHelp text={['提示1', '提示2']} />
          <BaseHelp text="提示" />
        </div>
      );
    };
  },
});
```

## props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| fontSize | `string` | `14px` | - | 字体大小 |
| color | `string` | #fff | - | 颜色 |
| text | `string｜string[]` | - | - | 文本列表 |
| showIndex | `boolean` | true | - | 是否显示序号,在 text 为 string[]情况下生效 |
| maxWidth | `string` | `600px` | - | 最大宽度 |
| icon | `string` | `info-circle` | - | 图标 |

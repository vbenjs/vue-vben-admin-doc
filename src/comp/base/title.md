# Title 组件

同于标题显示，且带有 help 组件帮助按钮

## 使用

```tsx
import { defineComponent } from 'compatible-vue';
import { BaseTitle } from '@/components/base/index';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <BaseTitle helpMessage="提示1">标题</BaseTitle>
        </div>
      );
    };
  },
});
```

## props

| 属性        | 类型               | 默认值 | 可选值 | 说明                     |
| ----------- | ------------------ | ------ | ------ | ------------------------ |
| helpMessage | `string｜string[]` | -      | -      | 标题右侧帮助按钮信息     |
| showSpan    | `boolean`          | true   | -      | 是否显示标题左侧蓝色色块 |

## slots

| 名称    | 说明     |
| ------- | -------- |
| default | 标题文本 |

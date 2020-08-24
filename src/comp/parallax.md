## parallax 视差组件

## 使用

```tsx
import { defineComponent } from 'compatible-vue';
import { Parallax } from '@/components/parallax/index';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <Parallax src={parallax1Img} />
        </div>
      );
    };
  },
});
```

## props

| 属性         | 类型     | 默认值 | 可选值 | 说明     |
| ------------ | -------- | ------ | ------ | -------- |
| src          | `string` | -      | -      | 显示图片 |
| getContainer | `any`    | -      | -      | 滚动容器 |
| alt          | `string` | -      | -      | 图片 alt |
| height       | `number` | -      | -      | 图片高度 |

## slots

| 名称    | 说明 |
| ------- | ---- |
| default | 默认 |

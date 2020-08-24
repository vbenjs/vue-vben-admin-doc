## ScrollContainer 组件

滚动容器组件

## 使用

```tsx
import { defineComponent } from 'compatible-vue';
import { ScrollContainer } from '@/components/container/index';
export default defineComponent({
  setup() {
    return () => (
      <ScrollContainer>
        <div>content</div>
      </ScrollContainer>
    );
  },
});
```

## 函数

| 名称          | 回调参数                             | 说明            |
| ------------- | ------------------------------------ | --------------- |
| getScrollWrap | `Function`                           | 获取滚动容器 el |
| scrollBottom  | `Function`                           | 滚动到底部      |
| scrollTo      | `Function(to:number,duration = 500)` | 滚动到指定位置  |

## slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认区域 |

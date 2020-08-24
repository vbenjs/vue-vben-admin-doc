## 虚拟滚动

用于大量数据展示场景，不适用于频繁操作的列表(如勾选)

## 使用

```tsx
import { VirtualScroll } from '@/components/virtual-scroll/index';
import { defineComponent } from 'compatible-vue';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <VirtualScroll
            itemHeight={41}
            items={data}
            height={300}
            width={300}
            scopedSlots={{
              default: ({ item }) => {
                return <div class="virtual-scroll-demo__item">{item.title}</div>;
              },
            }}
          ></VirtualScroll>
        </div>
      );
    };
  },
});
<style lang="less" scoped>
  .virtual-scroll-demo {
    /deep/ &__item {
      height: 40px;
    }
  }
</style>
```

## props

| 属性       | 类型             | 默认值 | 可选值 | 说明               |
| ---------- | ---------------- | ------ | ------ | ------------------ |
| height     | `string｜number` | -      | -      | 高度               |
| width      | `string｜number` | -      | -      | 宽度               |
| maxHeight  | `string｜number` | -      | -      | 最大高度           |
| maxWidth   | `string｜number` | -      | -      | 最大宽度           |
| minHeight  | `string｜number` | -      | -      | 最小高度           |
| minWidth   | `string｜number` | -      | -      | 最小宽度           |
| itemHeight | `string｜number` | -      | -      | 每个选项高度，必传 |
| items      | `any[]`          | -      | -      | 选项列表           |

## slots

| 名称    | 说明 |
| ------- | ---- |
| default | 默认 |

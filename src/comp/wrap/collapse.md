## CollapseContainer 组件

区域折叠卡片容器

## 使用

```tsx
import { defineComponent } from 'compatible-vue';
import { CollapseContainer } from '@/components/container/index';
export default defineComponent({
  setup() {
    return () => (
      <CollapseContainer title="产品成交额" canExpan={false}>
        <div>内容。。。</div>
      </CollapseContainer>
    );
  },
});
```

## Props 说明

| 属性                | 类型         | 默认值 | 可选值 | 说明                                 |
| ------------------- | ------------ | ------ | ------ | ------------------------------------ |
| title               | `string`     | -      | -      | 标题                                 |
| canExpan            | `boolean`    | true   | -      | 是否可以展开                         |
| helpMessage         | `string｜[]` | -      | -      | 标题右侧温馨提醒                     |
| triggerWindowResize | `boolean`    | false  | -      | 展开收缩的时候是否触发 window.resize |
| loading             | `boolean`    | false  | -      | loading 状态                         |
| lazy                | `boolean`    | false  | -      | 是否开启延时加载                     |
| lazyTime            | `number`     | 3000   | -      | 延时加载时间，毫秒                   |

## slots

| 名称         | 说明               |
| ------------ | ------------------ |
| title        | 自定义标题         |
| action       | 自定义右侧操作按钮 |
| default      | 默认区域           |
| lazySkeleton | 懒加载骨架屏       |

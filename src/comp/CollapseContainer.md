## CollapseContainer 组件

区域折叠卡片容器

## 使用

```vue
<template>
  <div class="m-4">
    <CollapseContainer> content </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';

  export default defineComponent({
    components: {
      CollapseContainer,
    },
    setup() {
      return {};
    },
  });
</script>
```

## Props 说明

| 属性                | 类型         | 默认值 | 可选值 | 说明                                 |
| ------------------- | ------------ | ------ | ------ | ------------------------------------ |
| title               | `string`     | -      | -      | 标题                                 |
| canExpan            | `boolean`    | true   | -      | 是否可以展开                         |
| helpMessage         | `string｜[]` | -      | -      | 标题右侧温馨提醒                     |
| triggerWindowResize | `boolean`    | false  | -      | 展开收缩的时候是否触发 window.resize |
| loading             | `boolean`    | false  | -      | loading 状态                         |

## slots

| 名称    | 说明               |
| ------- | ------------------ |
| title   | 自定义标题         |
| action  | 自定义右侧操作按钮 |
| default | 默认区域           |

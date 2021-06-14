# CollapseContainer

区域折叠卡片容器

## Usage

```vue
<template>
  <div>
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
  });
</script>
```

## Props

| 属性                | 类型              | 默认值 | 可选值 | 说明                                 |
| ------------------- | ----------------- | ------ | ------ | ------------------------------------ |
| title               | `string`          | -      | -      | 标题                                 |
| canExpan            | `boolean`         | true   | -      | 是否可以展开，为`true`显示折叠按钮   |
| helpMessage         | `string[],string` | -      | -      | 标题右侧温馨提醒                     |
| triggerWindowResize | `boolean`         | false  | -      | 展开收缩的时候是否触发 window.resize |
| loading             | `boolean`         | false  | -      | 显示加载骨架屏                       |
| lazyTime            | `number`          | 0      | -      | 延迟加载时间                         |

## Slots

| 名称    | 说明               |
| ------- | ------------------ |
| title   | 自定义标题         |
| action  | 自定义右侧操作按钮 |
| default | 默认区域           |
| footer  | 自定义底部区域     |

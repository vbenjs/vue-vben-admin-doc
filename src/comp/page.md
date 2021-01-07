# Page 页面基础组件

## PageFooter

用于页面底部工具栏

### 使用

```vue
<template>
  <div>
    <PageFooter>
      <template #left>left</template>
      <template #right>right</template>
    </PageFooter>
  </div>
</template>
<script>
  import { PageFooter } from '/@/components/Page';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { PageFooter },
    setup() {
      return {};
    },
  });
</script>
```

### Slots

| 名称  | 说明     |
| ----- | -------- |
| left  | 左侧区域 |
| right | 右侧区域 |

## PageWrapper

用于包裹页面组件

### 使用

```vue
<template>
  <div>
    <PageWrapper>
      <template #left>left</template>
      <template #right>right</template>
    </PageWrapper>
  </div>
</template>
<script>
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { PageWrapper },
    setup() {
      return {};
    },
  });
</script>
```

### Props

| 属性              | 类型               | 默认值 | 说明                            |
| ----------------- | ------------------ | ------ | ------------------------------- |
| dense             | `是否缩小主体区域` | false  | 为 true 将会取消 padding/margin |
| content           | `string`           | -      | pageHeader Content 内容         |
| contentStyle      | `object`           | -      | 主体区域样式                    |
| contentClass      | `string`           | -      | 主体区域 class                  |
| contentBackground | `boolean`          | -      | 主体区域背景                    |

### Slots

pageHeader 的 slot 都支持

| 名称        | 说明                |
| ----------- | ------------------- |
| leftFooter  | PageFooter 左侧区域 |
| rightFooter | PageFooter 右侧区域 |

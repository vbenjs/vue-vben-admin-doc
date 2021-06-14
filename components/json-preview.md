# JsonPreview

json 数据预览组件

## Usage

```vue
<template>
  <JsonPreview :data="data" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { JsonPreview } from '/@/components/CodeEditor';

  export default defineComponent({
    components: { JsonPreview },
    setup() {
      return {
        data: {},
      };
    },
  });
</script>
```

## Props

| 属性 | 类型     | 默认值 | 可选值 | 说明                 |
| ---- | -------- | ------ | ------ | -------------------- |
| data | `object` | -      | -      | 需要预览的 Json 数据 |

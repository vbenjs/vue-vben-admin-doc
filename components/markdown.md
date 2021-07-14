# Markdown

基于 [Vditor](https://github.com/Vanessa219/vditor) 的 MarkDown 编辑器

## Usage

```vue
<template>
  <div class="p-4">
    <a-button @click="toggleTheme" class="mb-2" type="primary">黑暗主题</a-button>
    <MarkDown v-model:value="value" ref="markDownRef" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { MarkDown, MarkDownActionType } from '/@/components/Markdown';
  export default defineComponent({
    components: { MarkDown },
    setup() {
      const markDownRef = ref<Nullable<MarkDownActionType>>(null);
      const valueRef = ref(`
# title

# content
`);

      function toggleTheme() {
        const markDown = unref(markDownRef);
        if (!markDown) return;
        const vditor = markDown.getVditor();
        vditor.setTheme('dark');
      }
      return {
        value: valueRef,
        toggleTheme,
        markDownRef,
      };
    },
  });
</script>
```

## Props

::: tip

除以下两个外，props 还可以传入 vidtor 的所有属性。可用 v-bind 统一绑定

:::

| 属性    | 类型     | 默认值 | 可选值 | 说明           |
| ------- | -------- | ------ | ------ | -------------- |
| v-model | `string` | -      | -      | 双向绑定文本值 |
| height  | `number` | -      | -      | 高度           |

### Methods

| 名称      | 回调参数   | 说明             |
| --------- | ---------- | ---------------- |
| getVditor | `Function` | 获取 vditor 实例 |

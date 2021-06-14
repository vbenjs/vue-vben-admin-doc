# CodeEditor

代码编辑器

## Usage

```vue
<template>
  <CodeEditor v-model:value="value" :mode="modeValue" />
</template>
<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: { CodeEditor },
    setup() {
      const modeValue = ref('application/json');
      return { value, modeValue };
    },
  });
</script>
```

## Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| value(v-model:value) | `any` | - | - | 绑定值 |
| mode | `string` | `application/json` | `'application/json'`,`'htmlmixed'`,`'javascript'` | 代码类型 |
| readonly | `boolean` | - | - | 是否只读 |

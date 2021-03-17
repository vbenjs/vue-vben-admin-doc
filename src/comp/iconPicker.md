# IconPicker 图标选择器组件

图标选择器

## 使用

```vue
<template>
  <div>
    <IconPicker> </IconPicker>
  </div>
</template>
<script>
  import { IconPicker } from '/@/components/Icon';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { IconPicker },
  });
</script>
```

## Props

| 属性     | 类型             | 默认值    | 说明                                          |
| -------- | ---------------- | --------- | --------------------------------------------- |
| width    | `string`         | 100%      | 宽度                                          |
| pageSize | `number`         | 140       | 每页显示的图标数                              |
| copy     | `boolean`        | false     | 是否可以复制                                  |
| mode     | `svg or iconify` | `iconify` | 图标来源,为 svg 时,会读取所有 svg sprite 图标 |

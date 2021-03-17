# SvgIcon 组件

用于使用项目 svg 雪碧图

## 使用

```vue
<template>
  <div>
    <SvgIcon name="test"> </SvgIcon>
  </div>
</template>
<script>
  import { SvgIcon } from '/@/components/Icon';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { SvgIcon },
  });
</script>
```

## Props

| 属性 | 类型     | 默认值 | 说明       |
| ---- | -------- | ------ | ---------- |
| name | `string` | -      | svg 图标名 |
| size | `number` | 16     | 图标大小   |

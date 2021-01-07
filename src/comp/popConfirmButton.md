# PopConfirmButton 按钮

带有 PopConfirm 功能的按钮

## 使用

```vue
<template>
  <PopConfirmButton>按钮文本</PopConfirmButton>
</template>

<script>
  import { defineComponent } from 'vue';
  import { PopConfirmButton } from '/@/components/Button';
  export default defineComponent({
    components: { PopConfirmButton },
  });
</script>
```

**保持**

[anvt popconfirm](https://2x.antdv.com/components/popconfirm-cn/) **原有功能**的情况下扩展以下属性

## props

| 属性       | 类型      | 默认值 | 说明                              |
| ---------- | --------- | ------ | --------------------------------- |
| enable     | `boolean` | true   | 是否启用，为 false 则显示默认按钮 |
| okText     | `string`  | -      | 弹出框确认文本                    |
| cancelText | `string`  | -      | 弹出框关闭文本                    |

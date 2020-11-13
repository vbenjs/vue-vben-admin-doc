# button 按钮

**保持** [anvt button](https://2x.antdv.com/components/button-cn/) **原有功能**的情况下扩展以下属性

::: tip

1. 按钮不需要 import ,已经全局注册，直接使用 a-button 标签即可
2. 如果是 Tsx 文件,需要手动 import

:::

## 使用

```vue
<template>
  <a-button color="success">成功按钮</a-button>
  <a-button color="error">错误按钮</a-button>
  <a-button color="warning">警告按钮</a-button>
</template>
```

## props

| 属性     | 类型     | 默认值    | 说明                                        |
| -------- | -------- | --------- | ------------------------------------------- |
| color    | `'error' | 'warning' | 'success'`                                  | - | 按钮的颜色场景状态颜色， |
| preIcon  | `string` | -         | 按钮文本前图标,[参考 Icon 组件](./icon.md)  |
| postIcon | `string` | -         | 按钮文本后图标，[参考 Icon 组件](./icon.md) |

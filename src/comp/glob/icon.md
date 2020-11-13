# icon 图标组件

用于项目内组件的展示,基本支持所有图标库

支持按需加载,只打包所用到的图标

icon 组件位于 [/@/components/Icon](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Icon)内

::: tip

icon 的值可以在[Iconify](https://iconify.design) 上面查询

:::

## 使用

```vue
<template>
  <g-icon icon="gg:loadbar-doc"></g-icon>
</template>
```

## Props

| 属性 | 类型     | 默认值 | 说明   |
| ---- | -------- | ------ | ------ |
| icon | `string` | -      | 图标名 |

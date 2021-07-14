# icon 图标组件

## Icon

用于项目内组件的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标）

icon 组件位于 [src/components/Icon](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Icon) 内

::: tip

icon 的值可以在 [Iconify](https://iconify.design) 上查询

:::

### Usage

```vue
<template>
  <Icon icon="gg:loadbar-doc"></Icon>
</template>

<script>
  import { defineComponent } from 'vue';
  import { Icon } from '/@/components/Icon';
  export default defineComponent({
    components: { Icon },
  });
</script>
```

### Props

| 属性   | 类型     | 默认值 | 说明     |
| ------ | -------- | ------ | -------- |
| icon   | `string` | -      | 图标名   |
| color  | `string` | -      | 图标颜色 |
| size   | `number` | 16     | 图标大小 |
| prefix | `string` | -      | 图标前缀 |

::: tip 提示

如果 `icon` 值以 `|svg` 结尾，则会渲染成 [SvgIcon 组件](#SvgIcon)

:::

## SvgIcon

用于使用项目 svg 雪碧图

### Usage

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

### Props

| 属性 | 类型     | 默认值 | 说明       |
| ---- | -------- | ------ | ---------- |
| name | `string` | -      | svg 图标名 |
| size | `number` | 16     | 图标大小   |

## IconPicker

图标选择器

### Usage

```vue
<template>
  <div>
    <IconPicker />
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

### Props

| 属性     | 类型      | 默认值    | 说明                                          |
| -------- | --------- | --------- | --------------------------------------------- |
| width    | `string`  | 100%      | 宽度                                          |
| pageSize | `number`  | 140       | 每页显示的图标数                              |
| copy     | `boolean` | false     | 是否可以复制                                  |
| mode     | `string`  | `iconify` | 图标来源，为 svg 时，会读取所有 svg sprite 图标 |

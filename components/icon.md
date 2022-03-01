# icon 图标组件

## Icon

用于项目内组件的展示，基本支持所有图标库（支持按需加载，只打包所用到的图标）

icon 组件位于 [src/components/Icon](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Icon) 内

::: tip

icon 的值可以在 [Iconify](https://iconify.design) 或 [Netlify](https://icones.netlify.app/collection/ant-design) 上查询

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

本组件详细说明请参阅[图标选择器](../dep/icon.html#图标选择器)

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
| mode     | `string`  | `iconify` | 备选图标池，为 svg 时，会读取所有 svg sprite 图标。详见下方说明 |


::: tip mode 说明

- `mode`为`iconify`时，会使用预生成的[图标集数据](../dep/icon.html#图标集预生成)作为备选图标池
- `mode`为`svg`时，会使用 `/src/assets/icons` 下的所有svg图标（可包含一级子目录）作为备选图标池，详见[vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md#vite-plugin-svg-icons)。

:::

# Basic 基础组件

一些比较基础的通用组件使用方式

## BasicTitle

用于显示标题，可以显示帮助按钮及文本

### Usage

```vue
<template>
  <div>
    <BasicTitle helpMessage="提示1">标题</BasicTitle>
    <BasicTitle :helpMessage="['提示1', '提示2']">标题</BasicTitle>
  </div>
</template>
<script>
  import { BasicTitle } from '/@/components/Basic/index';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicTitle },
  });
</script>
```

### Props

| 属性        | 类型               | 默认值  | 说明                     |
| ----------- | ------------------ | ------- | ------------------------ |
| helpMessage | `string｜string[]` | -       | 标题右侧帮助按钮信息     |
| span        | `boolean`          | `false` | 是否显示标题左侧蓝色色块 |
| normal      | `boolean`          | `false` | 将文字默认化，不加粗     |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 标题文本 |

## BasicArrow

带动画的箭头组件

### Usage

```vue
<template>
  <div>
    <BasicArrow :expand="false" />
  </div>
</template>
<script>
  import { BasicArrow } from '/@/components/Basic/index';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicArrow },
  });
</script>
```

### Props

| 属性   | 类型      | 默认值  | 说明                          |
| ------ | --------- | ------- | ----------------------------- |
| expand | `boolean` | `false` | 箭头展开状态                  |
| top    | `boolean` | `false` | 箭头默认向上                  |
| bottom | `boolean` | `false` | 箭头默认向下                  |
| inset  | `boolean` | `false` | 取消 padding/margin，用于内嵌 |

## BasicHelp

帮助按钮组件

### Usage

```vue
<template>
  <div>
    <BasicHelp :text="['提示1', '提示2']" />
    <BasicHelp text="提示" />
  </div>
</template>
<script>
  import { BasicHelp } from '/@/components/Basic/index';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { BasicHelp },
  });
</script>
```

### Props

| 属性      | 类型               | 默认值  | 可选值 | 说明                                       |
| --------- | ------------------ | ------- | ------ | ------------------------------------------ |
| fontSize  | `string`           | `14px`  | -      | 字体大小                                   |
| color     | `string`           | #fff    | -      | 颜色                                       |
| text      | `string｜string[]` | -       | -      | 文本列表                                   |
| showIndex | `boolean`          | true    | -      | 是否显示序号,在 text 为 string[]情况下生效 |
| maxWidth  | `string`           | `600px` | -      | 最大宽度                                   |
| placement | `string`           | `right` | -      | 显示方向，参考 Tooltip 组件                |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认图标 |

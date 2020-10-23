# Basic 基础组件

一些比较基础的通用组件

## BasicTitle

用于显示标题

### 使用

```vue
<template>
 <div>
    <BasicTitle helpMessage="提示1">标题</BasicTitle>
    <BasicTitle :helpMessage="['提示1','提示2']">标题</BasicTitle>
 </div>
</template>
<script>
import  { BasicTitle } from '/@/components/Baisc/index';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { BasicTitle },
  setup() {
    return {};
  },
});
</script>
```

### Props

| 属性     | 类型                   | 默认值            | 说明                                                         |
| -------- | ---------------------- | ----------------- | ------------------------------------------------------------ |
| helpMessage    | `string｜string[]` | -                 | 标题右侧帮助按钮信息
| showSpan    | `boolean` | `true`               | 是否显示标题左侧蓝色色块

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 标题文本 |


## BasicArrow

箭头组件,带动画

### 使用

```vue
<template>
 <div>
    <BasicArrow :expand="false"/>
 </div>
</template>
<script>
import  { BaseArrow } from '/@/components/Baisc/index';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { BasicArrow },
  setup() {
    return {};
  },
});
</script>
```

### Props

| 属性     | 类型                   | 默认值            | 说明                                                         |
| -------- | ---------------------- | ----------------- | ------------------------------------------------------------ |
| expand    | `boolean` | `true`               | 箭头展开状态

## BasicHelp

帮助按钮组件

### 使用

```vue
<template>
 <div>
    <BaseHelp text="['提示1', '提示2']" />
    <BaseHelp text="提示" />
 </div>
</template>
<script>
import  { BasicHelp } from '/@/components/Baisc/index';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { BasicHelp },
  setup() {
    return {};
  },
});
</script>
```

### Props
| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| fontSize | `string` | `14px` | - | 字体大小 |
| color | `string` | #fff | - | 颜色 |
| text | `string｜string[]` | - | - | 文本列表 |
| showIndex | `boolean` | true | - | 是否显示序号,在 text 为 string[]情况下生效 |
| maxWidth | `string` | `600px` | - | 最大宽度 |
| icon | `string` | `info-circle` | - | 图标 |

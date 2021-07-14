# CountTo

数字动画组件

该组件对 [vue-countTo](https://github.com/PanJiaChen/vue-countTo) 进行了重构，改造成适配 vue3 语法的组件。

## Usage

```vue
<template>
  <CountTo prefix="$" :color="'#409EFF'" :startVal="1" :endVal="200000" :duration="8000" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountTo } from '/@/components/CountTo/index';

  export default defineComponent({
    components: {
      CountTo,
    },
  });
</script>
```

## Props

| 属性       | 类型      | 默认值   | 说明           |
| ---------- | --------- | -------- | -------------- |
| startVal   | `number`  | `0`      | 起始值         |
| endVal     | `number`  | `2021`   | 结束值         |
| duration   | `number`  | `1500`   | 动画持续时间   |
| autoplay   | `boolean` | `true`   | 自动执行       |
| prefix     | `string`  | -        | 前缀           |
| suffix     | `string`  | -        | 后缀           |
| separator  | `string`  | `,`      | 分隔符         |
| color      | `string`  | -        | 字体颜色       |
| useEasing  | `boolean` | `true`   | 是否开启动画   |
| transition | `string`  | `linear` | 动画效果       |
| decimals   | `number`  | `0`      | 保留小数点位数 |

## Methods

| 名称  | 回调参数   | 说明         |
| ----- | ---------- | ------------ |
| start | `()=>void` | 开始执行动画 |
| reset | `()=>void` | 重置         |

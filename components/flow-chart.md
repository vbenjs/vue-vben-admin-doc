# FlowChart

流程图组件

## Usage

```vue
<template>
  <FlowChart :data="demoData" />
</template>

<script lang="ts">
  import { FlowChart } from '/@/components/FlowChart';
  import { PageWrapper } from '/@/components/Page';

  import demoData from './dataTurbo.json';
  export default {
    components: { FlowChart, PageWrapper },
    setup() {
      return { demoData };
    },
  };
</script>
```

## Props

| 属性         | 类型      | 默认值 | 可选值 | 说明              |
| ------------ | --------- | ------ | ------ | ----------------- |
| flowOptionsl | `object`  | -      | -      | FlowCharts 配置项 |
| data         | `object`  | -      | -      | 流程数据          |
| toolbar      | `boolean` | `true` | -      | 是否显示工具栏    |
| patternItems | `[]`      | -      | -      | 左侧拖拽列表数据  |

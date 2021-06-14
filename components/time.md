# Time

相对时间组件

## Usage

```vue
<template>
  <Time :value="time" />
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue';
  import { Time } from '/@/components/Time';

  export default defineComponent({
    components: { Time },
    setup() {
      const now = new Date().getTime();
      const state = reactive({
        time: now - 60 * 3 * 1000,
      });
      return {
        ...toRefs(state),
        now,
      };
    },
  });
</script>
```

## Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| value | `string,Date,number` | - | - | 时间值 |
| step | `number` | `60` | - | 刷新时间 |
| mode | `string` | `relative` | - | 模式，date:日期，datetime:时间戳，relative:相对时间 |

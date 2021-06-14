# StrengthMeter

用于校验密码强度

## Usage

```vue
<template>
  <div class="p-4 flex justify-center">
    <div class="demo-wrap p-10">
      <StrengthMeter placeholder="默认" />
      <StrengthMeter placeholder="禁用" disabled />
      <br />
      <StrengthMeter placeholder="隐藏input" :show-input="false" value="!@#qwe12345" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import StrengthMeter from '/@/components/StrengthMeter/index';
  export default defineComponent({
    components: {
      StrengthMeter,
    },
  });
</script>
<style lang="less" scoped>
  .demo-wrap {
    width: 50%;
    background: #fff;
    border-radius: 10px;
  }
</style>
```

## Props

| 属性      | 类型      | 默认值 | 可选值 | 说明           |
| --------- | --------- | ------ | ------ | -------------- |
| value     | `string`  | -      | -      | 校验的值       |
| showInput | `boolean` | true   | -      | 是否显示 input |
| disabled  | `boolean` | false  | -      | 是否禁用       |

## Events

| 事件         | 回调参数 | 说明             |
| ------------ | -------- | ---------------- |
| score-change | `number` | 强度值改变触发   |
| change       | `string` | input 值改变触发 |

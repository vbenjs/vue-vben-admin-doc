# CountDown

倒计时组件

## CountButton

倒计时按钮组件

### Usage

```vue
<template>
  <CountButton />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountButton } from '/@/components/CountDown';

  export default defineComponent({
    components: { CountButton },
  });
</script>
```

### Props

| 属性            | 类型          | 默认值 | 可选值 | 说明                                         |
| --------------- | ------------- | ------ | ------ | -------------------------------------------- |
| value           | `any`         | -      | -      | 绑定值                                       |
| count           | `number`      | `60`   | -      | 倒计时时间                                   |
| beforeStartFunc | `()=>promise` | -      | -      | 倒计时之前执行的函数，返回 true 才会开始执行 |

## CountDownInput

倒计时输入框按钮组件

### Usage

```vue
<template>
  <CountdownInput />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountdownInput } from '/@/components/CountDown';

  export default defineComponent({
    components: { CountdownInput },
  });
</script>
```

### Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| value | `any` | - | - | 绑定值 |
| size | `string` | `'default', 'large', 'small'` | - | 输入框即按钮大小 |
| count | `number` | `60` | - | 倒计时时间 |
| sendCodeApi | `()=>promise` | - | - | 倒计时之前执行的函数，返回 true 才会开始执行 |

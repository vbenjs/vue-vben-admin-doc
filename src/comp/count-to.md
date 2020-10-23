# CountTo 数字动画组件

该组件只是对于 [vue-countTo](https://github.com/PanJiaChen/vue-countTo) 进行调整，改造成适配vue3语法的组件。

```vue
<template>
  <div class="p-4 count-to-demo">
    <CountTo prefix="$" :startVal="1" :endVal="200000" :duration="8000" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CountTo } from '/@/components/CountTo/index';
  export default defineComponent({
    components: {
      CountTo,
    },
    setup() {
      return {};
    },
  });
</script>
```

相关**Props**及**Methods**请查看 [vue-countTo](https://github.com/PanJiaChen/vue-countTo)

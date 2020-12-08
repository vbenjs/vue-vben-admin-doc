# repeatClick 指令

防止重复点击

## 使用

```vue
<template>
  <div v-repeat-click="handler"></div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import repeatDirective from '/@/setup/directives/repeatClick';

  export default defineComponent({
    directives: {
      repeatDirective,
    },
    setup() {
      return {
        handler() {
          // xxxx
        },
      };
    },
  });
</script>
```

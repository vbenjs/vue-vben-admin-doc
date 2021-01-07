# clickOutside 指令

防止重复点击

## 使用

```vue
<template>
  <div v-click-outside="handler"></div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import clickOutside from '/@/directives/clickOutside';

  export default defineComponent({
    directives: {
      clickOutside,
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

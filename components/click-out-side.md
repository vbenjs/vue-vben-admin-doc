# ClickOutSide

用于监听包裹的元素点击外部触发事件

## Usage

```vue
<template>
  <div>
    <ClickOutSide @clickOutside="() => (showRef.value = false)">
      <div @click="() => (showRef.value = true)">
        {{ showRef ? '鼠标点击那部（点击边框外可以恢复）' : '点击该区域状态(初始状态)' }}
      </div>
    </ClickOutSide>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue';
  import { ClickOutSide } from '@/components/ClickOutSide/index.vue';
  export default defineComponent({
    components: { ClickOutSide },
    setup() {
      const showRef = ref(false);
      return {
        showRef,
      };
    },
  });
</script>
```

## Events

| 事件         | 回调参数   | 说明                     |
| ------------ | ---------- | ------------------------ |
| clickOutside | `()=>void` | 点击包裹元素外部区域触发 |

## Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 被包裹的元素 |

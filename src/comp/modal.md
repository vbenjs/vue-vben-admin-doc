# Modal 弹窗

对antv的 modal 组件进行封装，扩展拖拽，全屏，自适应高度等功能

代码路径[@/components/Modal](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Modal)


## 使用

**由于弹窗内部代码一般独立成单独文件，也推荐独立成组件来进行开发，所以示例都是以独立的文件来进行说明**


**独立组件代码，用于写组件内部的内容**

::: tip 注意
`v-bind="$attrs"`记得写
:::

```vue
// Modal.vue
<template>
  <BasicModal v-bind="$attrs" title="Modal Title" :helpMessage="['提示1', '提示2']">
    Modal Info.
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      return {};
    },
  });
</script>

```

**页面引用弹窗**
```vue
// Page.vue
<template>
  <div class="px-10">
    <Modal @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModal } from '/@/components/Modal';
  import Modal from './Modal.vue';
  export default defineComponent({
    components: { Modal },
    setup() {
      const [register, { openModal }] = useModal();
      return {
        register,
        openModal,
      };
    },
  });
</script>
```

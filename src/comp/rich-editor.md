# Tinymce 富文本组件

富文本组件位于 [/@/components/TinyMce](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Tinymce))

::: tip 富文本组件使用的是 CDN 方式引入。可以自行更改 CDN 地址

在 [/@/components/TinyMce/src/Editor.vue](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Tinymce/src/Editor.vue)更改下面 CDN 地址即可

```ts
const CDN_URL = 'https://cdn.bootcdn.net/ajax/libs/tinymce/5.5.1';
```

:::

## 使用

```vue
<template>
  <div class="p-4">
    <Tinymce v-model="value" @change="handleChange" width="100%" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Tinymce } from '/@/components/Tinymce/index';

  export default defineComponent({
    components: { Tinymce },
    setup() {
      const value = ref('hello world!');
      function handleChange(value: string) {
        console.log(value);
      }
      return { handleChange, value };
    },
  });
</script>
```

## Props

| 属性    | 类型     | 默认值  | 说明             |
| ------- | -------- | ------- | ---------------- |
| options | `any`    | {}      | tinymce 的配置项 |
| v-model | `string` | -       | 双向绑定值       |
| height  | `number  | string` | 400              | 高度 |
| width   | `number  | string` | auto             | 宽度 |

## Events

| 事件   | 回调参数           | 返回值 | 说明                   |
| ------ | ------------------ | ------ | ---------------------- |
| change | `(str:string)=>{}` |        | 富文本内容改变触发事件 |

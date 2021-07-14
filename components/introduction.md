# 前言

::: danger 注意事项

组件的 `defaultXXX` 属性不要使用，`ant-design-vue 2.2` 版本之后将会逐步移除。二次封装的组件也不兼容 `defaultXXX` 属性。

:::

## Usage

该项目的组件大部分没有进行全局注册。采用了按需引入注册方式，如下

```vue
<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ConfigProvider } from 'ant-design-vue';
  export default defineComponent({
    name: 'App',
    components: { ConfigProvider },
  });
</script>
```

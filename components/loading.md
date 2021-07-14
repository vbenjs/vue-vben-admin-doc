# Loading

## Usage

```vue
<template>
  <div class="p-5" ref="wrapEl" v-loading="loadingRef" loading-tip="加载中...">
    <a-button class="my-4 mr-4" type="primary" @click="openCompFullLoading">全屏 Loading</a-button>
    <a-button class="my-4" type="primary" @click="openCompAbsolute">容器内 Loading</a-button>
    <Loading :loading="loading" :absolute="absolute" :tip="tip" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { Loading } from '/@/components/Loading';
  export default defineComponent({
    components: { Loading },
    setup() {
      const compState = reactive({
        absolute: false,
        loading: false,
        tip: '加载中...',
      });

      function openLoading(absolute: boolean) {
        compState.absolute = absolute;
        compState.loading = true;
        setTimeout(() => {
          compState.loading = false;
        }, 2000);
      }

      function openCompFullLoading() {
        openLoading(false);
      }

      function openCompAbsolute() {
        openLoading(true);
      }

      return {
        openCompFullLoading,
        openCompAbsolute,
        ...toRefs(compState),
      };
    },
  });
</script>
```

### Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| tip | `string` | - | - | 加载文本 |
| size | `default, small , large` | `default` | - | 大小 |
| absolute | `boolean` | false | - | 绝对定位，为 `false` 时可以全屏 |
| loading | `boolean` | - | - | 当前加载状态 |
| background | `string` | - | - | 背景色 |
| theme | `'dark' or 'light'` | `light` | - | 背景色主题，当背景色不为空时使用背景色 |

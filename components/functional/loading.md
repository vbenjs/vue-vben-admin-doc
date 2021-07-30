# Loading

## Usage

```vue
<template>
  <div class="p-5" ref="wrapEl" v-loading="loadingRef" loading-tip="加载中...">
    <a-alert message="函数方式" />

    <a-button class="my-4 mr-4" type="primary" @click="openFnFullLoading">全屏 Loading</a-button>
    <a-button class="my-4" type="primary" @click="openFnWrapLoading">容器内 Loading</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { Loading, useLoading } from '/@/components/Loading';
  export default defineComponent({
    components: { Loading },
    setup() {
      const [openFullLoading, closeFullLoading] = useLoading({
        tip: '加载中...',
      });

      const [openWrapLoading, closeWrapLoading] = useLoading({
        target: wrapEl,
        props: {
          tip: '加载中...',
          absolute: true,
        },
      });

      function openFnFullLoading() {
        openFullLoading();

        setTimeout(() => {
          closeFullLoading();
        }, 2000);
      }

      function openFnWrapLoading() {
        openWrapLoading();

        setTimeout(() => {
          closeWrapLoading();
        }, 2000);
      }

      return {
        openFnFullLoading,
        openFnWrapLoading,
        ...toRefs(compState),
      };
    },
  });
</script>
```

## useLoading

使用

```ts
import { useLoading } from '/@/components/Loading';

const [open, close, setTip] = useLoading(opt: Partial<LoadingProps> | Partial<UseLoadingOptions>);
```

### UseLoadingOptions

| 属性   | 类型                              | 默认值 | 可选值 | 说明             |
| ------ | --------------------------------- | ------ | ------ | ---------------- |
| target | `HTMLElement or Ref<HTMLElement>` | -      | -      | 挂载的 dom 节点  |
| props  | `LoadingProps`                    | -      | -      | loading 组件参数 |

### LoadingProps

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| tip | `string` | - | - | 加载文本 |
| size | `default, small , large` | `default` | - | 大小 |
| absolute | `boolean` | false | - | 绝对定位，为 `false` 时可以全屏 |
| loading | `boolean` | - | - | 当前加载状态 |
| background | `string` | - | - | 背景色， |
| theme | `'dark' or 'light'` | `light` | - | 背景色主题 ，当背景色不为空时使用背景色 |

### 返回值

**open**

打开 loading

**close**

关闭 loading

**setTip**

设置加在提示文案(v2.6.2以上版本)

# VirtualScroll

虚拟滚动组件（用于大量数据纯展示时使用）

## Usage

```vue
<template>
  <div class="p-4 virtual-scroll-demo">
    <Divider>基础滚动示例</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VirtualScroll :itemHeight="41" :items="data" :height="300" :width="300">
        <template v-slot="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VirtualScroll>
    </div>

    <Divider>即使不可见，也预先加载50条数据，防止空白</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VirtualScroll :itemHeight="41" :items="data" :height="300" :width="300" :bench="50">
        <template v-slot="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VirtualScroll>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { VirtualScroll } from '/@/components/VirtualScroll/index';

  import { Divider } from 'ant-design-vue';
  const data: any[] = (() => {
    const arr: any[] = [];
    for (let index = 1; index < 20000; index++) {
      arr.push({
        title: '列表项' + index,
      });
    }
    return arr;
  })();
  export default defineComponent({
    components: { VirtualScroll, Divider },
    setup() {
      return { data: data };
    },
  });
</script>
<style lang="less" scoped>
  .virtual-scroll-demo {
    &-wrap {
      display: flex;
      margin: 0 30%;
      background: #fff;
      justify-content: center;
    }

    /deep/ &__item {
      height: 40px;
      padding: 0 20px;
      line-height: 40px;
      border-bottom: 1px solid #ddd;
    }
  }
</style>
```

## Props

| 属性       | 类型             | 默认值 | 可选值 | 说明               |
| ---------- | ---------------- | ------ | ------ | ------------------ |
| height     | `string｜number` | -      | -      | 高度               |
| width      | `string｜number` | -      | -      | 宽度               |
| maxHeight  | `string｜number` | -      | -      | 最大高度           |
| maxWidth   | `string｜number` | -      | -      | 最大宽度           |
| minHeight  | `string｜number` | -      | -      | 最小高度           |
| minWidth   | `string｜number` | -      | -      | 最小宽度           |
| itemHeight | `string｜number` | -      | -      | 每个选项高度，必传 |
| items      | `any[]`          | -      | -      | 选项列表           |

## Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 默认 |

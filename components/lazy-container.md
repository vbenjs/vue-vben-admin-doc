# LazyContainer

延时加载/懒加载组件, 只在组件可见或者延迟一段时间才进行加载

## Usage

```vue
<template>
  <div class="p-4 lazy-base-demo">
    <div class="lazy-base-demo-wrap">
      <h1>向下滚动</h1>
      <LazyContainer @init="() => {}">
        <TargetContent />
        <template #skeleton>
          <Skeleton :rows="10" />
        </template>
      </LazyContainer>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Skeleton } from 'ant-design-vue';
  import TargetContent from './TargetContent.vue';
  import { LazyContainer } from '/@/components/Container/index';
  export default defineComponent({
    components: { LazyContainer, TargetContent, Skeleton },
  });
</script>
<style lang="less" scoped>
  .lazy-base-demo {
    &-wrap {
      display: flex;
      width: 50%;
      height: 2000px;
      margin: 20px auto;
      text-align: center;
      background: #fff;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      height: 1300px;
      margin: 20px 0;
    }
  }
</style>
```

## Props

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| timeout | `number` | - | - | 等待时间，如果指定了时间，不论可见与否，在指定时间之后自动加载 |
| viewport | `HTMLElement` | - | - | 组件所在的视口，如果组件是在页面容器内滚动，视口就是该容器 |
| threshold | `string` | `0px` | - | 预加载阈值, css 单位 |
| direction | `'vertical', 'horizontal'` , `vertical` | - | 视口的滚动方向, vertical 代表垂直方向，horizontal 代表水平方向 |
| tag | `string'` | `div` | - | 包裹组件的外层容器的标签名 |
| transitionName | `string'` | lazy-container | - | transition 动画 name |
| maxWaitingTime | `number'` | `80` | - | 最大等待时间 |

## Events

| 事件 | 回调参数   | 说明       |
| ---- | ---------- | ---------- |
| init | `()=>void` | 初始化之后 |

## Slots

| 名称     | 说明         |
| -------- | ------------ |
| default  | 默认区域     |
| skeleton | 懒加载骨架屏 |

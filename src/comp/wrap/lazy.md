## LazyContainer 组件

延时加载组件

## 使用

```tsx
import { defineComponent } from 'compatible-vue';
import { LazyContainer } from '@/components/container/index';
export default defineComponent({
  setup() {
    return () => (
      <LazyContainer>
        <div>content</div>
      </LazyContainer>
    );
  },
});
```

## Props 说明

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| timeout | `number` | - | - | 等待时间，如果指定了时间，不论可见与否，在指定时间之后自动加载 |
| viewport | `HTMLElement` | - | - | 组件所在的视口，如果组件是在页面容器内滚动，视口就是该容器 |
| threshold | `string` | `0px` | - | 预加载阈值, css 单位 |
| direction | `'vertical' | 'horizontal'` | `vertical` | - | 视口的滚动方向, vertical 代表垂直方向，horizontal 代表水平方向 |
| tag | `string'` | `div` | - | 包裹组件的外层容器的标签名 |
| autoDestory | `boolean'` | false | - | 是否在不可见的时候销毁 |
| transitionName | `string'` | lazy-container | - | transition 动画 name |

## 事件

| 事件       | 回调参数   | 说明       |
| ---------- | ---------- | ---------- |
| beforeInit | `Function` | 初始化之前 |
| init       | `Function` | 初始化之后 |

## slots

| 名称     | 说明         |
| -------- | ------------ |
| default  | 默认区域     |
| skeleton | 懒加载骨架屏 |

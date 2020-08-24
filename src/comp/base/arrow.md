# Arrow 组件

箭头组件,带动画

## 使用

```tsx
import { defineComponent, ref } from 'compatible-vue';
import { BaseArrow } from '@/components/base/index';
export default defineComponent({
  setup() {
    const showRef = ref(false);
    return () => {
      return (
        <div>
          <BaseArrow expand={false}></BaseArrow>
        </div>
      );
    };
  },
});
```

## props

| 属性   | 类型      | 默认值 | 可选值 | 说明         |
| ------ | --------- | ------ | ------ | ------------ |
| expand | `boolean` | true   | -      | 箭头展开状态 |

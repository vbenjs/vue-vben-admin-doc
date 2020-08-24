## strengthMeter 组件

用于校验密码强度

## 使用

```tsx
import { defineComponent, ref } from 'compatible-vue';
import { StrengthMeter } from '@/components/strength-meter/index';
export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <StrengthMeter placeholder="默认" />
          <StrengthMeter placeholder="禁用" disabled />
          <br />
          <StrengthMeter placeholder="隐藏input" show-input={false} value="!@#qwe12345" />
        </div>
      );
    };
  },
});
```

## props

| 属性      | 类型      | 默认值 | 可选值 | 说明           |
| --------- | --------- | ------ | ------ | -------------- |
| value     | `string`  | -      | -      | 校验的值       |
| showInput | `boolean` | true   | -      | 是否显示 input |
| disabled  | `boolean` | false  | -      | 是否禁用       |

## 事件

| 事件         | 回调参数 | 说明             |
| ------------ | -------- | ---------------- |
| score-change | `number` | 强度值改变触发   |
| change       | `string` | input 值改变触发 |

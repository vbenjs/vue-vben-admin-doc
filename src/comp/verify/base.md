## 拖拽校验

基础拖拽校验组件

## 使用

```tsx
import { defineComponent, ref } from 'compatible-vue';
import { BasicDragVerify, DragVerifyActionType, PassingData } from '@/components/verify/index';
export default defineComponent({
  setup() {
    const elRef = ref<DragVerifyRef>(null);

    function handleChange(data: PassingData) {
      const { time } = data;
      createMessage.success(`校验成功,耗时${time}秒`);
    }
    return () => {
      return (
        <div>
          <BasicDragVerify ref={elRef} onSuccess={handleChange} />
        </div>
      );
    };
  },
});
```

## props

| 属性         | 类型             | 默认值           | 说明               |
| ------------ | ---------------- | ---------------- | ------------------ |
| value        | `boolean`        | -                | 是否通过           |
| text         | `string`         | `请按住滑块拖动` | 未拖动时候显示文字 |
| successText  | `string`         | `验证通过`       | 验证成功后显示文本 |
| height       | `string｜string` | 40               | 高度               |
| width        | `string｜string` | 260              | 宽度               |
| circle       | `boolean`        | false            | 是否圆角           |
| wrapStyle    | `any`            | -                | 外层容器样式       |
| contentStyle | `any`            | -                | 主体内容样式       |
| barStyle     | `any`            | -                | bar 样式           |
| actionStyle  | `any`            | -                | 拖拽按钮样式       |

## 函数

| 名称   | 回调参数   | 说明       |
| ------ | ---------- | ---------- |
| resume | `Function` | 还原初始值 |

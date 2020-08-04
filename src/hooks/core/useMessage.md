### 说明

页面消息工具,由于 vue3 没有了 this 对象，所以直接使用函数式调用即可

::: tip

该 hook 可以不放在 setup 内部使用

:::

```js
import { useMessage } from '@/hooks/core/useMessage';

const {
  createMessage,
  createConfirm,
  createSuccessModal,
  createErrorModal,
  createInfoModal,
  createWarningModal,
} = useMessage();
```

### 　状态

| 状态 | 类型 | 说明 |
| --- | --- | --- |
| createMessage | Function | 打开一个消息通知 ,对应 ant-design-vue 的 message |
| createConfirm | Function` | 打开一个确认框 |
| createSuccessModal | Function` | 打开一个成功提示框 |
| createErrorModal | Function` | 打开一个错误提示框 |
| createInfoModal | Function` | 打开一个普通提示框 |
| createWarningModal | Function` | 打开一个警告提示框 |

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useMessage } from '@/hooks/core/useMessage';

  export default {
    setup() {
      const {
        createMessage,
        createConfirm,
        createSuccessModal,
        createErrorModal,
        createInfoModal,
        createWarningModal,
      } = useMessage();

      createMessage.error('错误提示');
      createMessage.success('成功提示');
      return () => {
        return <div></div>;
      };
    },
  };
</script>
```

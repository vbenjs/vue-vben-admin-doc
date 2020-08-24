## click-out-side 组件

用于监听包裹的元素点击外部触发事件

## 使用

```tsx
import { defineComponent, ref } from 'compatible-vue';
import { ClickOutSide } from '@/components/click-out-side/index';
export default defineComponent({
  setup() {
    const showRef = ref(false);
    return () => {
      return (
        <div>
          <ClickOutSide onClickOutside={() => (showRef.value = false)}>
            <div class="click-out-side-demo-content" onClick={() => (showRef.value = true)}>
              {unref(showRef) ? '鼠标点击那部（点击边框外可以恢复）' : '点击该区域状态(初始状态)'}
            </div>
          </ClickOutSide>
        </div>
      );
    };
  },
});
```

## events

| 事件         | 回调参数   | 说明                     |
| ------------ | ---------- | ------------------------ |
| clickOutside | `Function` | 点击包裹元素外部区域触发 |

## slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 被包裹的元素 |

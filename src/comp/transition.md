## 动画组件

用于页面/组件切换动画

## 使用

**示例只列举一个组件使用方法，适用于所有动画组件**

```tsx
import {
  ExpandTransition,
  ExpandXTransition,
  FadeTransition,
  ScaleTransition,
  ScaleRotateTransition,
  SlideXTransition,
  SlideXReverseTransition,
  SlideYReverseTransition,
  SlideYTransition,
  ScrollYTransition,
  ScrollYReverseTransition,
  ScrollXTransition,
  ScrollXReverseTransition,
} from '@/components/transition/index';
import { defineComponent, ref, unref } from 'compatible-vue';
export default defineComponent({
  setup() {
    const flagRef = ref(true);
    return () => {
      return (
        <div>
          <a-button type="primary" onClick={() => (flag1.value = !unref(flagRef))}>
            显示/隐藏
          </a-button>
          <ExpandTransition>
            <div class="box" v-show={unref(flagRef)} />
          </ExpandTransition>
        </div>
      );
    };
  },
});
```

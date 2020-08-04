### 说明

全屏事件

```js
import { useFullScreen } from '@/hooks/core/useFullScreen';

const {
  watchFullscreen,
  toggleFullscreen,
  exitFullscreen,
  isFullscreen,
  enterFullscreen,
  isFullscreenRef,
} = useFullScreen(target, options);
```

### 　状态

| 状态             | 类型     | 说明           |
| ---------------- | -------- | -------------- |
| watchFullscreen  | Function | 监听全屏状态   |
| toggleFullscreen | Function | 切换全屏状态   |
| exitFullscreen   | Function | 退出全屏       |
| enterFullscreen  | Function | 进入全屏       |
| isFullscreenRef  | Function | 是否为全屏状态 |

### 参数

| 状态    | 类型              | 说明                |
| ------- | ----------------- | ------------------- |
| target  | Ref dom           | 需要全屏的 dom 对象 |
| options | FullscreenOptions | 配置项              |

### 示例

```vue
<script>
  import { unref, onMounted } from 'compatible-vue';
  import { useFullScreen } from '@/hooks/core/useFullScreen';

  export default {
    setup() {
      const { toggleFullscreen } = useFullScreen();

      onMounted(() => {
        toggleFullscreen();
      });
      return () => {
        return <div></div>;
      };
    },
  };
</script>
```

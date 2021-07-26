# Preview

将图片预览组件组件函数化。通过函数方便创建组件

## Usage

```vue
<template>
  <div class="p-4">
    <Alert message="有预览图" type="info" />
    <div class="flex justify-center mt-4">
      <img :src="img" v-for="img in imgList" :key="img" class="mr-2" @click="handleClick(img)" />
    </div>
    <Alert message="无预览图" type="info" />
    <a-button @click="handlePreview" type="primary" class="mt-4">预览图片</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { createImgPreview } from '/@/components/Preview/index';
  const imgList: string[] = [
    'https://picsum.photos/id/66/346/216',
    'https://picsum.photos/id/67/346/216',
    'https://picsum.photos/id/68/346/216',
  ];
  export default defineComponent({
    components: { Alert },
    setup() {
      function handleClick(img: string) {
        createImgPreview({ imageList: [img] });
      }

      function handlePreview() {
        createImgPreview({ imageList: imgList });
      }
      return { imgList, handleClick, handlePreview };
    },
  });
</script>
```

## createImgPreview

### 参数/Options

| 属性    | 类型       | 默认值 | 可选值 | 说明     |
| ------- | ---------- | ------ | ------ | -------- |
| imgList | `string[]` | -      | -      | 图片列表 |
| index | `number` | 0      | -      | 初始预览时的图片索引 |
| scaleStep | `number` | -      | -      | 缩放步进值（每次缩放的幅度）。默认为自动（当前缩放值的10%） |
| defaultWidth | `number` | -      | -      | 默认宽度（单位px）。当提供此值时，所有图片初始时都会被缩放至此宽度 |
| maskClosable | `boolean` | false      | `true/false`     | 点击遮罩时是否自动关闭预览 |
| rememberState | `boolean` | false | `true/false` | 是否记住每张图片各自的缩放状态 |
| onImgLoad | `({ index: number, url: string, dom: HTMLImageElement }) => void` | - | - | 图片加载成功时的回调函数 |
| onImgError | `({ index: number, url: string, dom: HTMLImageElement }) => void` | - | - | 图片加载失败时的回调函数 |

### 返回值/PreviewActions

可用于控制当前预览状态
```typescript
interface PreviewActions {
  // 重置状态
  resume: () => void;
  // 关闭预览
  close: () => void;
  // 显示前一张
  prev: () => void;
  // 显示后一张
  next: () => void;
  // 设置缩放比例(针对当前图片)
  setScale: (scale: number) => void;
  // 设置旋转角度(针对当前图片)
  setRotate: (rotate: number) => void;
}
```

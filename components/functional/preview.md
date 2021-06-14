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

## createImgPreview Options

| 属性    | 类型       | 默认值 | 可选值 | 说明     |
| ------- | ---------- | ------ | ------ | -------- |
| imgList | `string[]` | -      | -      | 图片列表 |

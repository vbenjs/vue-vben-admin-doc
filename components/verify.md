# BasicDragVerify

拖动校验组件

## BasicDragVerify

### Usage

```vue
<template>
  <div class="p-10">
    <BasicDragVerify @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDragVerify, DragVerifyActionType, PassingData } from '/@/components/Verify/index';
  export default defineComponent({
    components: { BasicDragVerify },
    setup() {
      function handleSuccess(data: PassingData) {
        const { time } = data;
        createMessage.success(`校验成功,耗时${time}秒`);
      }
      return {
        handleSuccess,
        handleBtnClick,
      };
    },
  });
</script>
```

### Props

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

### Methods

| 名称   | 回调参数 | 说明       |
| ------ | -------- | ---------- |
| resume | `()=>{}` | 还原初始值 |

## RotateDragVerify

图片还原正方向校验组件

### Usage

```vue
<template>
  <div class="p-10">
    <RotateDragVerify :src="img" ref="el" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { RotateDragVerify } from '/@/components/Verify/index';

  import img from '/@/assets/images/header.jpg';
  export default defineComponent({
    components: { RotateDragVerify },
    setup() {
      const handleSuccess = () => {
        console.log('success!');
      };
      return {
        handleSuccess,
        img,
      };
    },
  });
</script>
```

### props

| 属性         | 类型             | 默认值           | 说明               |
| ------------ | ---------------- | ---------------- | ------------------ |
| src          | `string`         | -                | 图片地址           |
| imgWidth     | `number`         | -                | 图片宽度           |
| imgWrapStyle | `any`            | -                | 图片外层容器样式   |
| minDegree    | `number`         | -                | 最小旋转角度       |
| maxDegree    | `number`         | -                | 最大旋转角度       |
| diffDegree   | `number`         | -                | 误差角度           |
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

### Methods

| 名称   | 回调参数   | 说明       |
| ------ | ---------- | ---------- |
| resume | `Function` | 还原初始值 |

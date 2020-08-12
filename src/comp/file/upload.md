## 说明

用于项目内上传文件

**UploadContainer 组件**位于 `src/components/file`内

## 使用

```js
  import { defineComponent } from 'compatible-vue';
  import { Alert } from 'ant-design-vue';
  import { UploadContainer } from '@/components/file/index';

  export default defineComponent({
    name: 'UploadImageDemo',
    setup() {
      function handleImgChange(fileList) {
        console.log('---img----');
        console.log(fileList);
      }
      function handleFileChange(fileList) {
        console.log('---file----');
        console.log(fileList);
      }
      return () => (
        <div class="m-4">
          <Alert message="上传与预览功能，默认图片上传" />
          <UploadContainer maxSize={1} maxNumber={3} onChange={handleImgChange} class="m-4" />
          <Alert message="上传与预览功能，文件上传" />
          <UploadContainer
            class="m-4"
            maxSize={2}
            maxNumber={20}
            isUploadImg={false}
            onChange={handleFileChange}
          />
        </div>
      );
    },
  });
```

## Props

| 属性        | 类型      | 默认值 | 说明                                                           |
| ----------- | --------- | ------ | -------------------------------------------------------------- |
| helpText    | `string`  | ‘’     | 提示帮助文字                                                   |
| maxSize     | `number`  | 0      | 单个文件最大上传的MB，大于0才生效                              |
| maxNumber   | `number`  | 0      | 上传文件的对大数量 ，大于0才生效                               |
| accept      | `Array`   | []     | 接受上传文件的格式                                             |
| isUploadImg | `boolean` | true   | 默认只能上传图片,支持的后缀名'jpg', 'jpeg', 'png', 'gif'       |
| multiple    | `boolean` | false  | 是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。 |

## 事件

| 事件   | 回调参数                   | 返回值 | 说明                             |
| ------ | -------------------------- | ------ | -------------------------------- |
| change | `Function(UploadResult[])` |        | 点击保存触发事件，可配合form使用 |

::: tip 上传弹窗/预览弹窗

上传弹窗，保存后，清空弹窗；文件可在预览弹窗查看；

预览弹窗，可查看图片，下载文件，删除文件；删除文件后，点击保存才会生效；

:::

## 说明

用于项目内下载文件

**downloadByUrl, downloadByData 组件**位于 `src/components/file`内

## 使用

```js
   import { defineComponent } from 'compatible-vue';
  import { Alert } from 'ant-design-vue';
  import { downloadByUrl, downloadByData } from '@/components/file/index';
  // import { downloadApi } from '@/api/demo/file';

  export default defineComponent({
    name: 'ComponentBaseDemo',
    setup() {
      async function handleDownload() {
        // const data = await downloadApi();
        downloadByData('测试二进制流下载', 'testName.txt');
      }
      return () => (
        <div class="p-4">
          <Alert message="根据后台接口文件流下载" />
          <a-button type="primary" class="my-4" onClick={handleDownload}>
            文件流下载
          </a-button>
          <Alert message="根据文件地址下载文件" />
          <a-button
            type="primary"
            class="my-4"
            onClick={() => {
              downloadByUrl(
                'https://codeload.github.com/anncwb/vue-vben-admin-doc/zip/master',
                '_self'
              );
            }}
          >
            文件地址下载
          </a-button>
        </div>
      );
    },
  });
```

## 根据文件地址下载文件

downloadByUrl函数

| 参数   | 类型            | 默认值 | 说明                           |
| ------ | --------------- | ------ | ------------------------------ |
| sUrl   | `string`        | -      | 要下载的文件地址               |
| target | `_blank｜_self` | _blank | 新标签页打开，还是当前页面打开 |

## 根据后台接口文件流下载

downloadByData函数

| 参数     | 类型                                            | 默认值 | 说明                                                                                                                       |
| -------- | ----------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| data     | `string | ArrayBufferView | ArrayBuffer | Blob` | -      | 文件流                                                                                                                     |
| filename | `string`                                        | -      | 文件名                                                                                                                     |
| mime     | `string`                                        | 可选   | 媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式 |

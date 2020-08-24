## 说明

富文本编辑

**tinymce 组件**位于 `src/components/tinymce`内

## 使用

```tsx
  import { defineComponent, ref, unref } from 'compatible-vue';
  import { Tinymce, TinymceActionType } from '@/components/tinymce/index';
  import { Switch } from 'ant-design-vue';

  export default defineComponent({
    name: 'TinymceDemo',
    setup() {
      const defaultValue = 'defaultValue';
      const tinymceContent = ref('content value');
      const tinymceElRef = ref<TinymceActionType | null>(null);

      function handleChange(value) {
        tinymceContent.value = value;
      }
      function handleSetContent() {
        unref(tinymceElRef)!.setContent('set content value' + Math.random());
      }

      const showUploadImageRef = ref(true);
      function handleChangeUpload(checked) {
        showUploadImageRef.value = checked;
      }
      return () => (
        <div class="m-4">
          <Tinymce
            ref={tinymceElRef}
            value={defaultValue}
            onChange={handleChange}
            maxSize={1}
            maxNumber={3}
          />
        </div>
      );
    },
  });
```

## Props

| 属性            | 类型            | 默认值                               | 说明                               |
| --------------- | --------------- | ------------------------------------ | ---------------------------------- |
| id              | `string`        | 随机值                               | tinymce的唯一标示                  |
| options         | `Settings`      | null                                 | tinymce的配置项                    |
| menubar         | `string`        | 'file edit insert view format table' | tinymce的menubar                   |
| value           | `string`        | -                                    | 用于设置初始值，用于集成到form组件 |
| height          | `number|string` | 400                                  | 高度                               |
| width           | `number|string` | auto                                 | 宽度                               |
| showUploadImage | `boolean`       | true                                 | 是否显示上传按钮                   |


## 事件

| 事件   | 回调参数           | 返回值 | 说明                                   |
| ------ | ------------------ | ------ | -------------------------------------- |
| change | `Function(string)` |        | 富文本内容改变触发事件，可配合form使用 |

## 实例方法

| 方法       | 回调参数           | 返回值 | 说明     |
| ---------- | ------------------ | ------ | -------- |
| setContent | `Function(string)` |        | 设置内容 |
| getContent | `Function`         | string | 获取内容 |

::: tip tinymce/plugins

`tinymce/plugins`插件可按需要选择引入

:::

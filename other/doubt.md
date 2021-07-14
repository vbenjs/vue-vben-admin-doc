# 常见疑点说明

该分类主要说明一些地方为什么这样做，以及原因是什么

## 项目别名

`/@/` 是 `vite` 内配置的别名

`/@/settings` 等同于 `src/settings`

::: tip 为什么是/@/

因为项目是从 `vite1.0` 过渡过来的，`vite1.0` 只能以 `/` 开头，所以有一部分从 `webpack` 用户转过来的可能不习惯。

:::

## 为什么在本地没有按需引入组件库样式，在生产才引入

在 main.ts 内可以看到，本地开发会全量引入 antd.less，vite-plugin-style-import 在本地是没有作用的。

这样做的原因主要是加快本地开发刷新速度。如果在本地开发中也按需按需引入，则在浏览器控制台内可以看到，平均一个页面大概增加了 100 次 http 请求。如果全量引入，只增加了一个请求，所以为了减少请求数量，才这样种。

```ts
// src/main.ts
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

// build/vite/plugin/styleImport
import styleImport from 'vite-plugin-style-import';
export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
```

## 为什么单独把 moment 放到 dataUtil 内

在 `src/utils/dataUtil` 内，使用的是 moment，其次在页面中对时间的操作也是使用 dateUtil，而不是直接 `import moment from 'moment'`。

这样做主要是方便后续切换到 `dayjs`，因为 api 一样，所以在后续切换中，只需更改 dataUtil 内的 import 即可，而不用全部更改。

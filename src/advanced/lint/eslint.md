## 说明

ESLint 是一个代码规范和错误检查工具，有以下几个特性

- 所有东西都是可以插拔的。你可以调用任意的 rule api 或者 formatter api 去打包或者定义 rule or formatter。
- 任意的 rule 都是独立的
- 没有特定的 coding style，你可以自己配置

## 配置项

项目的 eslint 配置位于根目录下 **.eslintrc.js**内，可以根据团队自行修改代码规范

## 如何取消 eslint 配置

如果不需要或者不习惯使用 eslint 开发的话，可以管理 eslint 校验

只需要改成以下代码即可

```js
// config/vue/index.js
function createVueConfig() {
  return {
    lintOnSave: false,
  };
}
```

::: tip

建议不要关闭，养成良好的 eslint 开发习惯也很重要

:::

## 编辑器配合

推荐使用 vscode 进行开发，vscode 自带 eslint 插件，可以自动修改一些错误

同时项目内也自带了 vscode eslint 配置，具体在`.vscode/setting.json`文件夹内部

只要使用 vscode 开发就可以不用任何设置即可使用

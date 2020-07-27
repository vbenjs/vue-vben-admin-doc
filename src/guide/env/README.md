## IDE

开发工具建议使用 [vscode](https://code.visualstudio.com/),项目内已经集成了相关的代码格式化校验，如果不是，您可能需要手动更改代码格式来满足 [eslint](https://eslint.org/)的规范，可能会影响你的开发体验

## node

`node` 版本建议 大于 10.0

如果你的版本过低，可以安装 [nvm](https://github.com/nvm-sh/nvm)来管理你电脑的 node 版本

## 包管理工具

推荐使用 `yarn`或者 `npm`，不建议用`cnpm`,cnpm 可能会造成一些依赖问题及热加载问题。

项目内已经将 npm 和 yarn 的仓库改为淘宝，如果不需要，可以将 `.npmrc`内的 registry 字段注释即可

::: tip yarn 安装

npm install -g yarn

yarn install

:::

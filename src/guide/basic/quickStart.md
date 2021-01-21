# 快速上手

::: tip 前提条件

[Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin)需要 [Node.js](https://nodejs.org/en/)版本>=`12`

:::

本文会帮助你从头启动项目。

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)的话,可以安装以下工具来提高开发效率就代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally) - i18n 插件
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotNev](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

::: tip

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格。否则安装依赖后启动会出错。

:::

### 从 github 获取代码

```bash
# clone 代码
git clone https://github.com/anncwb/vue-vben-admin

```

### 从 gitee 获取代码

如果从 github clone 代码较慢的话，可以尝试用 gitee 同步代码到自己的仓库，在 clone 下来即可。

也可以通过下方地址进行 clone

```bash
git clone https://gitee.com/annsion/vue-vben-admin-next
```

::: tip 注意

[vue-vben-admin-next](https://gitee.com/annsion/vue-vben-admin-next)在 gitee 的代码可能不是最新的

:::

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v

# 出现相应node版本即可
node -v

```

如果你需要同时存在多个 node 版本，可以使用[Nvm](https://github.com/nvm-sh/nvm)或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

**yarn 安装**

推荐使用 [Yarn](https://github.com/yarnpkg/yarn)进行依赖安装。

如果未安装`yarn`，可以用下面命令来进行全局安装

```bash
# 全局安装yarn
npm i -g yarn

# 验证
yarn -v # 出现对应版本号即代表安装成功
```

其他包管理工具类似

**依赖安装**

在项目根目录下,打开命令窗口执行,耐心等待安装完成即可

```bash
# 安装依赖
yarn install
```

## npm Script

**安装依赖**

```bash
yarn bootstrap
```

**运行项目**

```bash
yarn serve
```

**打包项目**

```bash
yarn build
```

**清空缓存后构建**

```bash
yarn build:no-cache
```

**生成打包分析**

在`Mac`电脑上执行完成后会自动打开界面

在`Window`电脑上执行完成后需要打开`./build/.cache/stats.html`查看

```bash
yarn report
```

**预览打包后的内容**

```bash
# 先打包在进行预览
yarn preview

# 直接预览本地 dist 文件目录
yarn preview:dist
```

**生成 ChangeLog**

```bash
yarn log
```

**删除缓存**

```bash
yarn clean:cache
```

**删除 node_modules**

`window`系统手动删除该目录较慢，可以使用该命令来进行删除

```bash
yarn clean:lib
```

**重新安装依赖**

该命令会先删除 `node_modules`、`yarn.lock`、`package.lock.json`后在进行依赖重新安装

速度会明显变慢

```bash
yarn reinstall
```

接下来你可以修改代码进行业务开发了，我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等等各种实用的功能辅助开发，你可以继续阅读其他文档进行了解。

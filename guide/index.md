# 开始

本文会帮助你从头启动项目

## 前言

::: tip 关于组件

项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。

:::

## 环境准备

本地环境需要安装 [pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- 推荐使用[pnpm](https://pnpm.io/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`14.x`以上，这里推荐 `20.x` 及以上。
- 推荐安装 [nvm](https://github.com/nvm-sh/nvm/tree/master) 来管理 `Node.js` 版本。

:::

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - 用于让 TS 识别 \*.vue 文件。

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 GitHub 获取代码

```bash
# clone 代码
git clone https://github.com/vbenjs/vue-vben-admin.git

```

### 从 Gitee 获取代码

如果从 github clone 代码较慢的话，可以尝试用 [Gitee](https://gitee.com/annsion/vue-vben-admin) 同步代码到自己的仓库，再 clone 下来即可。

也可以通过下方地址进行 clone

```bash
git clone https://gitee.com/annsion/vue-vben-admin.git
```

::: warning 注意

[Gitee](https://gitee.com/annsion/vue-vben-admin)的代码可能不是最新的

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

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

#### pnpm 安装

必须使用 [pnpm](https://pnpm.io/)进行依赖安装（若其他包管理器安装不了需要自行处理）。

如果未安装`pnpm`，可以用下面命令来进行全局安装

```bash
# 全局安装pnpm
npm install -g pnpm
# 验证
pnpm -v # 出现对应版本号即代表安装成功
```

#### 依赖安装命令

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
pnpm i
```

::: tip 安装依赖时 husky 安装失败

请查看你的源码是否从 github 直接下载的，直接下载是没有 `.git` 文件夹的，而 `husky` 需要依赖 `git` 才能安装。此时需使用 `git init` 初始化项目，再尝试重新安装即可。

:::

## npm script

```bash
"scripts": {
  # 安装依赖
  "bootstrap": "pnpm install",
  # 构建项目
  "build": "cross-env NODE_ENV=production NODE_OPTIONS=--max-old-space-size=8192 pnpm vite build",
  # 生成打包分析，在电脑上执行完成后会自动打开界面
  "build:analyze": "cross-env NODE_OPTIONS=--max-old-space-size=8192 pnpm vite build --mode analyze",
  # 构建成docker镜像
  "build:docker": "vite build --mode docker",
  # 清空缓存后构建项目
  "build:no-cache": "pnpm clean:cache && npm run build",
  "build:test": "cross-env NODE_OPTIONS=--max-old-space-size=8192 pnpm vite build --mode test",
  # 用于生成标准化的git commit message
  "commit": "czg",
  # 运行项目
  "dev": "pnpm vite",
  "preinstall": "npx only-allow pnpm",
  "postinstall": "turbo run stub",
  "lint": "turbo run lint",
  # 执行 eslint 校验，并修复部分问题
  "lint:eslint": "eslint --cache --max-warnings 0  \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  "lint:prettier": "prettier --write .",
  # 执行 stylelint 格式化
  "lint:stylelint": "stylelint \"**/*.{vue,css,less,scss}\" --fix --cache --cache-location node_modules/.cache/stylelint/",
  # 安装git hooks
  "prepare": "husky install",
  # 预览打包后的内容（先打包在进行预览）
  "preview": "npm run build && vite preview",
  # 重新安装依赖
  "reinstall": "rimraf pnpm-lock.yaml && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
  # 运行项目
  "serve": "npm run dev",
  # 对打包结果进行 gzip 测试
  "test:gzip": "npx http-server dist --cors --gzip -c-1",
  # 类型检查
  "type:check": "vue-tsc --noEmit --skipLibCheck"
},
```

### 生成图标集

该命令会生成所选择的图标集，提供给图标选择器使用。具体使用方式请查看 [图标集生成](../dep/icon.md#图标集预生成)

### 重新安装依赖

该命令会先删除 `node_modules`、`yarn.lock`、`package.lock.json` 后再进行依赖重新安装（安装速度会明显变慢）。

接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。

## 目录说明

```bash

.
├── build # 打包脚本相关
│   ├── config # 配置文件
│   ├── generate # 生成器
│   ├── script # 脚本
│   └── vite # vite配置
├── mock # mock文件夹
├── public # 公共静态资源目录
├── src # 主目录
│   ├── api # 接口文件
│   ├── assets # 资源文件
│   │   ├── icons # icon sprite 图标文件夹
│   │   ├── images # 项目存放图片的文件夹
│   │   └── svg # 项目存放svg图片的文件夹
│   ├── components # 公共组件
│   ├── design # 样式文件
│   ├── directives # 指令
│   ├── enums # 枚举/常量
│   ├── hooks # hook
│   │   ├── component # 组件相关hook
│   │   ├── core # 基础hook
│   │   ├── event # 事件相关hook
│   │   ├── setting # 配置相关hook
│   │   └── web # web相关hook
│   ├── layouts # 布局文件
│   │   ├── default # 默认布局
│   │   ├── iframe # iframe布局
│   │   └── page # 页面布局
│   ├── locales # 多语言
│   ├── logics # 逻辑
│   ├── main.ts # 主入口
│   ├── router # 路由配置
│   ├── settings # 项目配置
│   │   ├── componentSetting.ts # 组件配置
│   │   ├── designSetting.ts # 样式配置
│   │   ├── encryptionSetting.ts # 加密配置
│   │   ├── localeSetting.ts # 多语言配置
│   │   ├── projectSetting.ts # 项目配置
│   │   └── siteSetting.ts # 站点配置
│   ├── store # 数据仓库
│   ├── utils # 工具类
│   └── views # 页面
├── types # 类型文件
├── vite.config.ts # vite配置文件
└── windi.config.ts # windcss配置文件

```

# 介绍

[Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin)是一个基于[Vue3.0](https://github.com/vuejs/vue-next)、[Vite](https://github.com/vitejs/vite)、 [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)、[TypeScript](https://www.typescriptlang.org/)的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案，二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目所使用的技术都是前端较新的技术栈，可以用来作为项目的启动模版，可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习`vue3`，`vite`，`ts`等等主流技术。尽管还有很多使用到的技术处于`beta`|`rc`状态，但是该项目会一直持续跟进,将最新的东西应用与项目之中。

::: tip 为什么是 Vite

很多人都觉得用[Vite](https://github.com/vitejs/vite)可能是感觉她的速度快。确实，速度跟 webpack 项目相比快了很多。同时我自己也是比较喜欢尝试新的技术，虽然她还不成熟。很多插件生态都需要完善，但是该项目会尽量将 vue-cli 的功能迁移过来。

:::

## 前言

::: tip 关于组件

项目虽然封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写。不必坚持使用项目自带的组件

:::

你的本地环境需要安装 [yarn](https://yarnpkg.com/)、[node](http://nodejs.org/) 和 [git](https://git-scm.com/)

整个项目需要一定基础才能理解，所以在开发前可以先学一下以下内容,方便对项目的理解,提前了解和学习这些知识会非常有帮助:

- [Vue3 文档](https://v3.cn.vuejs.org/guide/installation.html#%E4%BD%BF%E7%94%A8-cdn-%E6%88%96%E6%B2%A1%E6%9C%89%E6%9E%84%E5%BB%BA%E5%B7%A5%E5%85%B7)

- [Vue-RFCS](https://github.com/vuejs/rfcs)

- [Vue2 迁移到 3](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)

- [TypeScript](https://www.typescriptlang.org/)

- [Vue-Router-Next](https://next.router.vuejs.org/)

- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)

- [Es6](https://es6.ruanyifeng.com/)

- [Vite 文档](https://vitejs.dev/guide/)

## 模版

- [Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin)

该版本主要是提供一些 Demo 示例及插件的使用集成方式，主要用于参考。如果对项目不是很熟悉，不建议在这基础上进行开发，可以使用下方提供的精简版本。

- [Vue-Vben-Admin-Thin-Next](https://github.com/anncwb/vben-admin-thin-next)

`Vue-Vben-Admin`精简版本。删除了相关示例，无用文件及功能、依赖。可以根据自身要求安装对应的依赖。因为使用的是`vite`，依赖删除不会导致相关组件或者`hook`发出及警告。只在需要的时候安装对应的库即可。

## 功能

具体可以查看代码或者预览网站

### 已完成功能

```
 项目搭建（基于 vite）
 登录和注销
 菜单（可以搜索及拖拽以及菜单布局）
 多标签页/面包屑
 基于角色的权限管理
 基于后台的权限管理
 分离的路由和菜单设置
 可折叠侧边栏
 可拖拽侧边栏
 多标签页模式/全局控制
 多级路由缓存
 菜单搜索
 页面加载 loading
 滚动条组件
 弹窗扩展（可拖拽,全屏,自适应高度）
 模拟数据
 hook 封装
 表单组件
 右键菜单
 loading组件/指令
 水印插件
 动画组件
 二维码插件
 国际化插件
 详情组件
 验证组件
 树组件
 图片预览组件
 表格组件
 图表库
 数字动画
 首屏加载等待动画
 抽取生产环境配置文件
 打包 Gzip
 富文本组件
 数据导入导出
 全局错误处理
 系统性能优化
 上传组件
```

### 正在开发的功能

```
 主题配置
 黑暗主题
 打包 CDN
```

更多组件/功能/建议/bug/欢迎提交 pr 或者 issue

## 生态

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html)

## 目录结构

```bash

.
├── build # 构建相关脚本
├── commitlint.config.js # git message配置文件
├── lint-staged.config.js # lint-staged配置文件
├── mock # 模拟数据
├── postcss.config.js # postcss配置文件呢
├── prettier.config.js # prettier配置文件
├── public # 静态资源
├── src # 项目代码
│   ├── api #请求相关
│   ├── assets # 静态资源
│   ├── components # 组件
│   ├── design  # 样式
│   ├── enums # 常量，枚举
│   ├── hooks # hooks
│   ├── logics # 逻辑相关
│   ├── layouts # 布局
│   ├── main.ts # 入口文件
│   ├── router #路由，菜单等
│   ├── locale #多语言文件
│   ├── settings # 配置文件
│   ├── setup # 第三方库配置
│   ├── store # vuex
│   ├── types # 类型定义
│   ├── utils # 工具类
│   └── views # 页面
├── stylelint.config.js # stylelint配置文件
├── tsconfig.json # ts配置文件呢
├── vite.config.ts # vite配置文件
└── yarn.lock
```

## 浏览器支持

本地开发推荐使用`Chrome`浏览器,在火狐浏览器进行开发相对卡顿。

支持现代浏览器, IE 暂不支持，后续考虑支持 ie11

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ES%20Module)

## 加入

[Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin) 还在持续更新中,本项目欢迎您的参与，共同维护,逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，不会收取任何费用及版权，可以放心使用。

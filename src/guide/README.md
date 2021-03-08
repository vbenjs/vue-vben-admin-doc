# 介绍

[Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin)是一个基于[Vue3.0](https://github.com/vuejs/vue-next)、[Vite](https://github.com/vitejs/vite)、 [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)、[TypeScript](https://www.typescriptlang.org/)的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案，二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目所使用的技术都是前端较新的技术栈，可以用来作为项目的启动模版，可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习`vue3`，`vite`，`ts`等等主流技术。该项目会一直持续跟进最新技术,将最新的东西应用与项目之中。

## 前言

::: tip 关于组件

项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写。不必坚持使用项目自带的组件

:::

## 环境准备

你的本地环境需要安装 [yarn](https://yarnpkg.com/)、[node](http://nodejs.org/) 和 [git](https://git-scm.com/)

## 掌握知识

整个项目需要一定基础才能理解，所以在开发前可以先学一下以下内容,方便对项目的理解,提前了解和学习这些知识会非常有帮助:

- [Vue3 文档](https://v3.vuejs.org/)

- [Vue-RFCS](https://github.com/vuejs/rfcs)
- [Vue2 迁移到 3](https://v3.vuejs.org/guide/migration/introduction.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-Router-Next](https://next.router.vuejs.org/)
- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Es6](https://es6.ruanyifeng.com/)
- [Vite](https://vitejs.dev/)
- [WindiCss](https://windicss.netlify.app/)

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
 主题色修改
```

### 正在开发的功能

```
 黑暗主题
 打包 CDN
```

更多组件/功能/建议/bug/欢迎提交 pr 或者 issue

## 生态

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 mock
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 html 模版转换
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色等颜色相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-theme) - 用于打包输入`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 svg 雪碧图

## 目录结构

```bash

.
├── build # 构建相关脚本
├── mock # 模拟数据
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
│   ├── plugins # 插件
│   ├── store # vuex
│   ├── utils # 工具类
│   └── views # 页面
└── types # 类型定义
```

## 浏览器支持

本地开发推荐使用`Chrome 80+`浏览器,在火狐浏览器进行开发相对卡顿。

支持现代浏览器, IE 不支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ES%20Module)

## 加入

[Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin) 还在持续更新中,本项目欢迎您的参与，共同维护,逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，不会收取任何费用及版权，可以放心使用。

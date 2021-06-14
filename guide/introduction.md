# 介绍

## 简介

[Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin)是一个基于[Vue3.0](https://github.com/vuejs/vue-next)、[Vite](https://github.com/vitejs/vite)、 [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)、[TypeScript](https://www.typescriptlang.org/)的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案，二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目所使用的技术都是前端较新的技术栈，可以用来作为项目的启动模版，可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习`vue3`，`vite`，`ts`等等主流技术。该项目会一直持续跟进最新技术,将最新的东西应用与项目之中。

## 文档

- 中文文档地址为[vben-admin-doc](https://github.com/anncwb/vue-vben-admin-doc)，采用 Vitepress 开发，如果文档有错误或者不对的，可以提交 pr 帮助我们进行修复。
- 英文文档暂时没有时间来写，欢迎有时间的同学来帮忙写英文文档。

### 本地运行文档

如果需要本地运行文档，只需要将代码拉取到本地进行运行即可。

```bash
# 拉取代码
git clone https://github.com/vbenjs/vben-admin-docs-cn.git

# 安装依赖
yarn

# 运行项目
yarn dev
```

## 需要掌握的基础知识

整个项目需要一定基础才能理解，不建议对 vue 不会的新手使用，需要能处理一些常见的 vue 问题。

所以在开发前可以先学一下以下内容,方便对项目的理解,提前了解和学习这些知识会非常有帮助:

- [Vue3 文档](https://v3.vuejs.org/)
- [Vue-RFCS](https://github.com/vuejs/rfcs)
- [Vue2 迁移到 3](https://v3.vuejs.org/guide/migration/introduction.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://next.router.vuejs.org/)
- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)
- [WindiCss](https://windicss.netlify.app/)

## 模版

- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin)

该版本主要是提供一些 `Demo` 示例及插件的使用集成方式，主要用于参考。如果对项目不是很熟悉，不建议在这基础上进行开发，可以使用下方提供的精简版本。

- [vue-vben-admin-thin](https://github.com/anncwb/vben-admin-thin-next)

`vue-vben-admin`精简版本。删除了相关示例，无用文件及功能、依赖。可以根据自身要求安装对应的依赖。因为使用的是`vite`，依赖删除不会导致相关组件或者`hook`发出及警告。只在需要的时候**安装对应的库**即可。

## vite 插件推荐

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 `html` 模版转换,可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-theme) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器,**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器, 不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 如何加入我们

- [Vue-Vben-Admin](https://github.com/anncwb/vue-vben-admin) 还在持续更新中,本项目欢迎您的参与，共同维护,逐步完善，将项目做得更强。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，请可以放心使用。
- 如果你想加入我们，可以多提供一些好的建议或者 提交 pull request, 会根据你的活跃度邀请你加入我们。

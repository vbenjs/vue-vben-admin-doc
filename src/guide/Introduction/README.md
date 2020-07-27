## 介绍

[vue-vben-admin](https://github.com/anncwb/vue-vben-admin) 是一个基于 [vue-composition-api](https://github.com/vuejs/composition-api)，[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/),`typescript`的后台解决方案，适合中大型项目，提供现成的开箱解决方案。项目中提供了多个封装的组件（包含二次封装）,hooks,utils,国际化方案,权限校验，动态路由，动态菜单等功能，她是基于`vue-cli4`的脚手架进行开发的，更多的功能可以详细看代码实现，相信能对学习 vue3 有一定的帮助！

## 准备

项目难度可能不适合新入手的开发者，需要有一定的基础，对 [es6](https://es6.ruanyifeng.com/),[Typescript](https://www.runoob.com/typescript/ts-tutorial.html),[ant-design-vue](https://www.antdv.com/docs/vue/introduce-cn/),[vue-cli4](https://cli.vuejs.org/),[vue-composition-api](https://github.com/vuejs/composition-api),[vue-router](https://router.vuejs.org/zh/),[vuex](https://vuex.vuejs.org/zh/),`Tsx`有一定的使用经验，如果以上技术没有问题，您将很快理解该项目开发，对您学习该项目有很大的帮助,如果你未掌握上述的技能，您可以边看文档边学习。

## 安装

```bash
# clone 代码
git clone https://github.com/anncwb/vue-vben-admin

# 进入代码目录
cd vue-vben-admin

# 安装依赖
yarn install
# or
npm install

# 运行
yarn serve

```

## 目录结构

```bash
.
├── build # 项目打包配置
├── commitlint.config.js # git hooks
├── config # 配置文件
│   ├── glob #全局配置
│   ├── lint # git hooks，prettier,stylelint 配置
│   └── vue # vue cli 配置
├── dist # 打包输入
├── docs # 项目文档
├── lint-staged.config.js # 代码提交校验配置
├── mock # mock
│   ├── _util # mock工具
├── prettier.config.js # prettier配置
├── public # 静态资源
├── src # 员目录
│   ├── api # 与后台通信的接口服务
│   ├── assets # 项目资源
│   │   ├── icons # 图标
│   │   │   ├── setupIcon.ts # 按需引入 ant-design-vue 图标
│   │   │   ├── setupSvgIcon.ts # 自动引入svg 图标
│   │   │   └── svg # 项目那用到的sv图标
│   │   └── images # 图片资源
│   ├── common # 公共资源
│   │   ├── factory # 工厂函数
│   │   ├── libs # 第三方库
│   │   ├── model # 接口模型
│   │   └── plugins # 插件
│   ├── components # 组件
│   ├── design # 样式
│   ├── enums # 枚举
│   ├── hooks # hooks
│   ├── layouts # 项目布局
│   ├── router   # 路由
│   │   ├── menus  # 菜单
│   ├── settings # 项目配置
│   ├── setup # 初始化配置
│   ├── store # vuex
│   ├── types # types
│   ├── utils # utils
│   ├── views # 页面
│   │   ├── dashboard # dashboard
│   │   ├── examples # 示例
│   │   ├── sys # 系统相关
│   └── workers # web workers
├── stylelint.config.js
├── tests # 单元测试



```

## 浏览器支持

支持现代浏览器及 IE10+

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

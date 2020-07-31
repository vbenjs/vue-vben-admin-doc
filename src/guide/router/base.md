# 路由

项目路由配置存放于`src/router/routes 下面`

在 router 下面, 组件的引入方式为

```js
component: () => createAsyncComponent(import('@/views/examples/auth/role/PageAuth.vue')),
```

**注意点**

组件地址必须有`.vue`,项目默认去除了 webpack 的 resolve.extensions 内包含的 `.vue`格式，只保留 `['.js', '.jsx', '.tsx', '.ts']`,目的是为了方便 vscode 跳转页面

## createAsyncComponent 函数说明

**createAsyncComponent** 函数本质是路由`懒加载`，效果跟下面一样

```js
() => import('@/views/examples/auth/role/PageAuth.vue');
```

`createAsyncComponent`函数在保持懒加载的前提下，使用了 vue 的动态组件，可以配置组件的加载的 loading 状态, 错误页，加载超时等

具体配置可以参考 `src/settings/asyncComponentSetting.ts`及`src/common/factory/AsyncComponentFactory.ts`

```js
/**
 * @description:  页面切换显示的加载页面
 */
export const LOADING_PAGE = FullLoading;

/**
 * @description:  切换切换超时页面
 */
export const TIMEOUT_PAGE = LoadTimeOut;

/**
 * @description: 切换页面如果指定时间没响应,则显示loading页面
 * 400毫秒
 */
export const DELAY = 400;

/**
 * @description: 切换页面如果超过指定时间没响应,则显示超时页面
 * 10秒
 */
export const TIMEOUT = 60 * 1000;
```

## 多级路由

关于多级路由，可能会导致的问题就是多级路由页面 keep-alive 问题，导致缓存出现问题,本项目不建议页不推荐使用多级路由，因为多级路由的需求页面其实可以自行实现，不需要使用到多级路由

## 说明

`window-glob.js` 会在打包的时候自动生成，并且插入`index.html`

**注意:开发环境不会生成**

```js
// window-glob.js
// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的GLOB_APP_SHORT_NAME
window.__PRODUCTION__VUE_VBEN_ADMIN__CONF__ = {
  GLOB_APP_TITLE: 'vben admin',
  GLOB_APP_SHORT_NAME: 'vue_vben_admin',
  GLOB_API_URL: '/app',
  GLOB_API_URL_PREFIX: '/v1.0',
};
```

## 作用

`window-glob.js` 用于项目在打包后需要动态修改的需求，如接口地址, 可在打包后通过修改`/dist/window-glob.js`内的变量,刷新即可更新代码内的局部变量

## 如何获取全局变量

想要获取 `window-glob.js` 内的变量

可以使用`/config/getGlobConfig.ts`提供的函数来进行获取

## 如何新增

1. 首先在`.env`或者对应的开发环境配置文件内新增需要可动态配置的变量 需要以 `GLOB_`开头

2. `GLOB_`开头的变量会自动加入环境变量，通过在 `src/types/config.d.ts`内修改 `GlobEnvConfig`和`GlobConfig`两个环境变量的值来定义新添加的类型

3. `/config/getGlobConfig.ts`函数新增你刚才新增的返回值即可

# 项目配置项

## 主题色配置

默认全局主题色配置位于[build/config/glob/lessModifyVars.ts](https://github.com/anncwb/vue-vben-admin/tree/main/build/config/glob/lessModifyVars.ts)内

只需要修改 primaryColor 为您需要的配色，然后重新执行`yarn serve`即可

```js
/**
 * less global variable
 */
const primaryColor = '#018ffb';
//{
const modifyVars = {
  'primary-color': primaryColor, //  Global dominant color
  'info-color': primaryColor, //  Default color
  'success-color': '#55D187', //  Success color
  'error-color': '#ED6F6F', //  False color
  'warning-color': '#EFBD47', //   Warning color
  'link-color': primaryColor, //   Link color
  'disabled-color': '#C2C2CC', //  Failure color
  'heading-color': '#2C3A61', //  Title color
  'text-color': '#2C3A61', //  Main text color
  'text-color-secondary ': '#606266', // Subtext color
  'background-color-base': '#F0F2F5', // background color
  'font-size-base': '14px', //  Main font size
  'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', //  Floating shadow
  'border-color-base': '#cececd', //  Border color,
  'border-color-split': '#cececd', //  Border color,
  'border-radius-base': '2px', //  Component/float fillet
};
//}

export { modifyVars, primaryColor };
```

## 样式配置

### css 前缀设置

1. css 在 [/@/settings/designSetting.ts](https://github.com/anncwb/vue-vben-admin/blob/main/src/settings/designSetting.ts)内配置

```ts
export default {
  prefixCls: 'vben',
};
```

2. 在[/@/design/var/index.less](https://github.com/anncwb/vue-vben-admin/blob/main/src/design/var/index.less)配置 css 前缀

```less
@namespace: vben;
```

### 前缀使用

**在 css 内**

```css

<style lang="less" scoped>
  @import (reference) '../../../design/index.less';
  @prefix-cls: ~'@{namespace}-app-logo';
  .@{prefix-cls} {
    width: 100%
  }
</style>

```

**在 js 内**

```ts
import { useDesign } from '/@/hooks/web/useDesign';

const { prefixCls } = useDesign('app-logo');

// prefixCls => vben-app-logo
```

## 缓存配置

在[/@/settings/encryptionSetting.ts](https://github.com/anncwb/vue-vben-admin/blob/main/src/settings/encryptionSetting.ts)内可以配置 localStorage 及 sessionStorage 缓存信息

**前提** 使用项目自带的缓存工具类 [/@/utils/cache](https://github.com/anncwb/vue-vben-admin/blob/main/src/utils/cache)来进行缓存操作

```ts
import { isDevMode } from '/@/utils/env';

// 缓存默认过期时间
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// 开启缓存加密后，加密密钥。采用aes加密
export const cacheCipher = {
  key: '_12345678901234@',
  iv: '@12345678901234_',
};

// 是否加密缓存，默认生产环境加密
export const enableStorageEncryption = !isDevMode();
```

## 环境变量配置

项目的环境变量配置位于 项目根目录 [.env](https://github.com/anncwb/vue-vben-admin/blob/main/.env)、[.env.development](https://github.com/anncwb/vue-vben-admin/blob/main/.env)、[.env.production](https://github.com/anncwb/vue-vben-admin/blob/main/.env)

具体可以参考[Vite 介绍](https://github.com/vitejs/vite#modes-and-environment-variables)

```bash
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略

```

::: tip 温馨提醒

只有以 \_VITE\_\_ 开头的变量会被嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：

```js
console.log(import.meta.env.VITE_PROT);
```

:::

::: tip 温馨提醒

以 `VITE_GLOB_*` 开头的的变量，在打包的时候，会被加入[\_app.config.js](#生产环境动态配置)配置文件当中.

:::

### 变量说明

### .env 文件

所有环境适用

```bash
# 端口号
VITE_PORT=3100

# 标题 logo title
VITE_GLOB_APP_TITLE=vben admin

# 简称，用于配置文件名字 不要出现空格等特殊字符
VITE_GLOB_APP_SHORT_NAME=vben_admin

# 是否开启动态引入。开启后src/views所有`.vue`和`.tsx`文件都会被打包
VITE_DYNAMIC_IMPORT=true


```

**.env.development 开发环境适用**

```bash
# 是否开启mock
VITE_USE_MOCK=true



# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=

# 是否删除Console.log
VITE_DROP_CONSOLE=false

# 资源公共路径
VITE_PUBLIC_PATH=/

# 本地开发代理，可以解决跨域及多地址代理
# 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题
# 可以有多个
VITE_PROXY=[["/api","http://localhost:3000"],["api1","http://localhost:3001"],["/upload","http://localhost:3001/upload"]]

# 接口地址
# 如果没有跨域问题，直接在这里配置即可
VITE_GLOB_API_URL=/api

# 文件上传接口  可选
VITE_GLOB_UPLOAD_URL=/upload

```

**.env.production 生产环境适用**

```bash
# 是否开启mock
VITE_USE_MOCK=true

# 接口地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_API_URL=/api

# 文件上传地址 可以由nginx做转发或者直接写实际地址
VITE_GLOB_UPLOAD_URL=/upload

# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=

# 是否删除Console.log
VITE_DROP_CONSOLE=true

# 资源公共路径
VITE_PUBLIC_PATH=./

# 打包是否输出gz文件
VITE_BUILD_GZIP = false

# 打包是否开启pwa功能
VITE_USE_PWA = false

```

## 生产环境动态配置

### 说明

`_app.config.js` 会在打包的时候自动生成，并且插入`index.html`

**注意:开发环境不会生成**

```js
// _app.config.js
// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME
window.__PRODUCTION__VUE_VBEN_ADMIN__CONF__ = {
  VITE_GLOB_APP_TITLE: 'vben admin',
  VITE_GLOB_APP_SHORT_NAME: 'vue_vben_admin',
  VITE_GLOB_API_URL: '/app',
  VITE_GLOB_API_URL_PREFIX: '/',
};
```

### 作用

`_app.config.js` 用于项目在打包后需要动态修改的需求，如接口地址, 可在打包后通过修改`/dist/_app.config.js`内的变量,刷新即可更新代码内的局部变量

### 如何获取全局变量

想要获取 `_app.config.js` 内的变量

可以使用[useSetting](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/core/useSetting.ts)提供的函数来进行获取

### 如何新增

1. 首先在`.env`或者对应的开发环境配置文件内新增需要可动态配置的变量 需要以 `VITE_GLOB_`开头

2. `VITE_GLOB_`开头的变量会自动加入环境变量，通过在 `src/types/config.d.ts`内修改 `GlobEnvConfig`和`GlobConfig`两个环境变量的值来定义新添加的类型

3. [useGlobSetting](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/setting/index.ts)函数新增你刚才新增的返回值即可

```js
// useSetting
const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
} = ENV;

export const useGlobSetting = (): SettingWrap => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
  };
  return glob as Readonly<GlobConfig>;
};

```

## 项目配置

::: tip

项目配置用于配置项目内展示的内容/布局/文本等效果，存于`localStorage`中,在代码内更改之后需要清空`localStorage`缓存

如果更改了项目配置,需要手动清空`localStorage`缓存刷新重新登录后方可生效

:::

### 配置文件路径

[src/settings/projectSetting.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/settings/projectSetting.ts)

### 说明

```js
// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
  // 是否显示SettingButton
  showSettingButton: true,
  // 权限模式
  permissionMode: PermissionModeEnum.ROLE,
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: false,
  // 色弱模式
  colorWeak: false,
  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: false,
  // 主题内容宽度
  contentMode: ContentEnum.FULL,
  // 是否显示logo
  showLogo: true,
  // 是否显示底部信息 copyright
  showFooter: true,

  // 多语言配置
  locale: {
    // 是否显示
    show: true,
    // 当前语言
    lang: 'zh_CN',
    // 默认语言
    fallback: 'zh_CN',
    //允许的语言
    availableLocales: ['zh_CN', 'en'],
  },
  // 头部配置
  headerSetting: {
    // 背景色
    bgColor: '#ffffff',
    // 固定头部
    fixed: true,
    // 是否显示顶部
    show: true,
    // 主题
    theme: MenuThemeEnum.LIGHT,
    // 开启锁屏功能
    useLockPage: true,
    // 显示刷新按钮
    showRedo: true,
    // 显示全屏按钮
    showFullScreen: true,
    // 显示文档按钮
    showDoc: true,
    // 显示消息中心按钮
    showNotice: true,
  },
  // 菜单配置
  menuSetting: {
    // 背景色
    bgColor: '#273352',
    // 是否固定住菜单
    fixed: true,
    // 菜单折叠
    collapsed: false,
    // 折叠菜单时候是否显示菜单名
    collapsedShowTitle: false,
    // 是否可拖拽
    canDrag: true,
    // 是否显示
    show: true,
    // 菜单宽度
    menuWidth: 180,
    // 菜单模式
    mode: MenuModeEnum.INLINE,
    // 菜单类型
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题
    theme: MenuThemeEnum.DARK,
    // 分割菜单
    split: false,
    // 顶部菜单布局
    topMenuAlign: 'start',
    // 折叠菜单时候隐藏搜索框
    collapsedShowSearch: false,
    // 折叠触发器的位置
    trigger: TriggerEnum.HEADER,
    // 手风琴模式，只展示一个菜单
    accordion: true,
  },
  // 多标签
  multiTabsSetting: {
    // 开启
    show: true,
    // 开启快速操作
    showQuick: true,
    // 是否可以拖拽
    canDrag: true,
  },

  // 动画配置
  transitionSetting: {
    //  是否开启切换动画
    enable: true,

    // 动画名
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // 是否打开页面切换loading
    openPageLoading: true,

    //是否打开页面切换顶部进度条
    openNProgress: false,
  },

  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: true,

  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
  lockTime: 0,
  // 显示面包屑
  showBreadCrumb: true,
  // 显示面包屑图标
  showBreadCrumbIcon: false,
  //  开启页面切换动画
  openRouterTransition: true,

  // 路由切换动画
  routerTransition: RouterTransitionEnum.ZOOM_FADE,

  // 是否开启回到顶部
  useOpenBackTop: true,

  //  是否可以嵌入iframe页面
  canEmbedIFramePage: true,

  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,

  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: true,
};
```

## 颜色配置

用于预设一些颜色数组

```ts
// 顶部背景色预设
export const HEADER_PRESET_BG_COLOR_LIST: string[] = [
  '#ffffff',
  '#009688',
  '#18bc9c',
  '#1E9FFF',
  '#018ffb',
  '#409eff',
  '#4e73df',
  '#e74c3c',
  '#24292e',
  '#394664',
  '#001529',
];

//左侧菜单背景色预设
export const SIDE_BAR_BG_COLOR_LIST: string[] = [
  '#273352',
  '#ffffff',
  '#191b24',
  '#191a23',
  '#001529',
  '#304156',
  '#001628',
  '#28333E',
  '#344058',
];
```

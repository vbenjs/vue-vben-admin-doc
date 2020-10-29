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
```

**.env.development 开发环境适用**

```bash
# 是否开启mock
VITE_USE_MOCK=true

# 接口地址
# 如果没有跨域问题，直接在这里配置即可
VITE_GLOB_API_URL=/app

# 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换
VITE_GLOB_API_URL_PREFIX=

# 是否删除Console.log
VITE_DROP_CONSOLE=false

# 资源公共路径
VITE_PUBLIC_PATH=/

# 本地开发代理，可以解决跨域及多地址代理
# 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题
# 可以有多个
VITE_PROXY=[["/app","http://localhost:3000"],["api1","http://localhost:3001"]]

```

**.env.production 生产环境适用**

```bash
# 是否开启mock
VITE_USE_MOCK=true

# 接口地址
VITE_GLOB_API_URL=/app

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

3. [useSetting](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/core/useSetting.ts)函数新增你刚才新增的返回值即可

```js
// useSetting
const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
} = ENV;

export const useSetting = (): SettingWrap => {
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
  };
  return {
    globSetting: glob as Readonly<GlobConfig>,
    projectSetting,
  };
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
  // 头部配置
  headerSetting: {
    // 固定头部
    fixed: true,
    // 是否显示顶部
    show: true,
    // 主题
    theme: MenuThemeEnum.LIGHT,
    // 开启锁屏功能
    useLockPage: isProdMode(),
    // 显示刷新按钮
    showRedo: true,
    // 显示全屏按钮
    showFullScreen: true,
    // 显示文档按钮
    showDoc: true,
    //  是否显示github
    showGithub: true,
    // 显示消息中心按钮
    showNotice: true,
  },
  // 菜单配置
  menuSetting: {
    // 菜单折叠
    collapsed: false,
    // 折叠菜单时候是否显示菜单名
    collapsedShowTitle: false,
    // 是否可拖拽
    hasDrag: true,
    // 是否显示
    show: true,
    // 是否显示搜索框
    showSearch: true,
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
  },
  // 消息配置
  messageSetting: {
    // 弹窗title
    title: '操作提示',
    // 取消按钮的文子,
    cancelText: '取消',
    // 确认按钮的文字
    okText: '确定',
  },
  // 多标签
  multiTabsSetting: {
    // 开启
    show: true,
    // 开启快速操作
    showQuick: true,
    // 显示icon
    showIcon: true,
    // 标签页缓存最大数量
    max: 12,
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

  // 是否开启登录安全校验
  openLoginVerify: true,

  // 是否监听网络变化
  listenNetWork: false,

  // 是否开启页面切换loading
  openPageLoading: true,

  // 是否开启回到顶部
  useOpenBackTop: true,

  // 开启顶部进度条
  openNProgress: isProdMode(),

  //  是否可以嵌入iframe页面
  canEmbedIFramePage: true,

  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,

  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: true,
};
```

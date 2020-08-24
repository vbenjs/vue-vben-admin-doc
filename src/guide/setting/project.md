## 项目配置

::: warning 注意

项目配置用于配置项目内展示的内容/布局/文本等效果，存于`localStorage`中,在代码内更改之后需要清空`localStorage`缓存

:::

## 路径

**src/settings/projectSetting.ts**

## 配置说明

```js
// 是否显示配置按钮
  showSettingButton: true,
  // 显示github
  showGithubButton: true,
  // 权限模式
  authMode: AuthModeEnum.ROLE,
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: false,
  // 色弱模式
  colorWeak: false,
  // 主题色
  themeColor: primaryColor,
  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: false,
  // 主题区域类型
  contentMode: ContentEnum.FULL,
  // 是否显示logo
  showLogo: true,

  headerSetting: {
    // 是否显示顶部
    show: true,
    // 头部主题
    theme: MenuThemeEnum.LIGHT,
    // 是否固定header
    fixed: true,
    // 开启锁屏功能
    useLockPage: isProdMode(),
    // 显示刷新按钮
    showRedo: true,
    // 显示全屏按钮
    showFullScreen: true,
    // 显示文档按钮
    showDoc: true,
  },
  // 菜单类型
  menuSetting: {
    // 是否折叠
    collapsed: false,
    // 是否可以拖拽
    hasDrag: true,
    // 是否显示
    show: true,
    // 是否显示搜索
    showSearch: true,
    // 菜单宽度
    menuWidth: 210,
    // 菜单模式
    mode: MenuModeEnum.INLINE,
    // 菜单类型
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题
    theme: MenuThemeEnum.DARK,
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
  },
  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: true,

  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
  lockTime: 60,
  // 显示面包屑
  showBreadCrumb: true,

  // 使用error-handler-plugin
  useErrorHandle: isProdMode(),

  // 路由切换动画
  routerTransition:'zoom-fade'


  // 是否开启登陆安全校验
  openLoginVerify: true,

  // 是否监听网络变化
  listenNetWork: true,

  // 是否开启页面切换loading
  openPageLoading: true,

  // 是否开启回到顶部
  useOpenBackTop: true,

```

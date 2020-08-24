# META 配置说明

**meta**配置如下

```js
// src/routes/types
export interface Meta {
  // 名称
  title: string;
  // 是否忽略权限
  ignoreAuth?: boolean;
  // 角色权限
  roles?: RoleEnum[];
  // 为true不缓存
  noKeepAlive?: boolean;
  // 是否固定在tab上
  affix?: boolean;
  // tab上的图标
  icon?: string;
  // 内嵌iframe的地址
  frameSrc?: string;
  // 外链跳转地址
  externalLink?: string;
}
```

## 外部页面嵌套

只需要将**frameSrc**设置为需要跳转的地址即可

```js
  {
    path: '/doc',
    name: 'Doc',
    component: IFrame,
    meta: {
      frameSrc: 'https://vvbin.cn/docs/',
      title: '项目文档(内嵌)',
    },
  },
```

## 外链

只需要将**externalLink**设置为需要跳转的地址即可

```js
const IFrame = () => createAsyncComponent(import('@/views/sys/iframe/FrameBlank.vue'));
{
    path: '/docExternal',
    name: 'DocExternal',
    component: IFrame,
    meta: {
      externalLink: 'https://vvbin.cn/docs/',
      title: '项目文档(外链)',
    },
  },
```

## affix 固定

在开启了多标签页的时候当在声明路由是 添加了`affix`属性，则当前 tab 会被固定在 标签页上方，并且不能删除。

## icon 配置说明

这里的 icon 配置，会同步到 **菜单** 及 **多标签页**的图标

**如何使用**

请查看 [图标组件使用](/comp/icon/)

icon 组件使用到的是`src/components/index`内的 icon 组件

如果你需要用到的是[ant-design-vue](https://www.antdv.com/components/icon-cn/) 所提供的 icon，您可以直接传递图标名,如下

```js
icon: 'user';
```

如果你需要使用到 svg 图片，在项目 svg 图片已经引用的前提下，可以直接使用下面语法

```js
// svg图标 加上｜svg则会将 icon组件转化成 svgIcon组件
icon: 'home|svg';
```

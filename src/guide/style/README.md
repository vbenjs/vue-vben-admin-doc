## 目录结构

项目中使用的通用样式，mixin，utils，color，var 都存放于 `@/design/`下面

```js
.
├── ant // ant-design-vue 相关组件样式修改
├── color // 系统颜色变量
├── default.less// 基础变量
├── helper // css工具函数
├── index.less
├── mixins // mixin函数
├── normalize.less // css初始化
├── public // 公共样式
├── reset.less // css reset
├── transition // 动画相关
└── var 变量相关
```

## 修改统一前缀

项目当前 css 统一前缀为 `vben`

如果需要统一修改，只需要修改以下 2 处即可

1. 修改**src/settings/designSetting.ts**内的前缀

```js
// 全局样式前缀
export const prefixCls = 'vben';
```

2. 修改**src/design/default.less**内的前缀

```less
// 页面及组件样式前缀
@namespace: vben;
```

## 组件样式

项目中除了全局或者一些常用的 css 外,其余 css 一般放在`.vue`文件内`

**scoped**

没有加 scoped 属性，默认会编译成全局样式，造成全局污染

```js

<style>
</style>

<style scoped>
</style>


```

::: tip 温馨提醒

使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

:::

## 深度选择器

因为使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决

**css**

```js
<style scoped>
  .a >>> .b
  {
    // ...
  }
</style>
```

**less**

```js
<style scoped lang="less">
  .a {
    /deep/ .b{
     // ...
    }
  }
</style>
```

**scss**

```js
<style scoped lang="scss">
  .a {
    ::v-deep .b{
     // ...
    }
  }
</style>
```

## 常用全局 css 类

步长默认是 4，可以在`@/design/default.less`内修改

数值最大是 10，可以在`@/design/default.less`内修改

```js

// m-1 表示 margin: 4px
// mr-1 表示 margin-right: 4px
// ml-1 表示 margin-left: 4px
// mt-1 表示 margin-top: 4px
// mb-1 表示 margin-bottom: 4px
<div class="m-1"/>


// p-1 表示 padding: 4px
// pr-1 表示 padding-right: 4px
// pl-1 表示 padding-left: 4px
// pt-1 表示 padding-top: 4px
// pb-1 表示 padding-bottom: 4px
<div class="p-1">

```

## 页面使用

**reference**

可以解决页面内重复引用导致实际生成的 style 样式表重复的问题

**scopedName**

scopedName 需要跟[useDesign](/hooks/core/useDesign)保持一致

```vue

<style lang="less" scoped>
  @import (reference) '~@design';
  @prefix-cls: ~'@{namespace}-scopedName';
  .@{prefix-cls} {}
<style>

```

## postcss

css 样式兼容在 `.browserslistrc`文件内 可以自行修改样式兼容性

**默认**

```json

> 1%
last 3 versions
ie > 8

```

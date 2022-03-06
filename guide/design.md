# 样式

## 介绍

主要介绍如何在项目中使用和规划样式文件。

默认使用 less 作为预处理语言，建议在使用前或者遇到疑问时学习一下 [Less](http://lesscss.org/) 的相关特性（如果想获取基础的 CSS 知识或查阅属性，请参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)）。

项目中使用的通用样式，都存放于 [src/design/](https://github.com/vbenjs/vue-vben-admin/tree/main/src/design) 下面。

```bash
.
├── ant # ant design 一些样式覆盖
├── color.less # 颜色
├── index.less # 入口
├── public.less # 公共类
├── theme.less # 主题相关
├── config.less  # 每个组件都会自动引入样式
├── transition # 动画相关
└── var # 变量

```

::: tip 全局注入

config.less 这个文件会被全局注入到所有文件，所以在页面内可以直接使用变量而不需要手动引入

:::

```html
<style lang="less" scoped>
  // 这里已经隐式注入了 config.less
</style>
```

## tailwindcss(2.5.0+)

项目中引用到了 [tailwindcss](https://tailwindcss.com/docs),具体可以见文件使用说明。

语法如下:

```html
<div class="relative w-full h-full px-4"></div>
```

## windicss(2.5.0 已弃用)

项目中使用了 [windicss](https://windicss.org/)，具体参见文件使用说明。

语法如下:

```html
<div class="relative w-full h-full px-4"></div>
```

::: danger 注意事项

windcss 目前会造成本地开发内存溢出，所以后续可能会考虑切换到 TailwindCss，两者基本相同。

所以尽量少用 Windicss 新增的特性，防止后续切换成本高。

:::

## 为什么使用 Less

主要是因为 Ant Design 默认使用 less 作为样式语言，使用 Less 可以跟其保持一致。

## 开启 scoped

没有加 `scoped` 属性，默认会编译成全局样式，可能会造成全局污染

```vue
<style></style>

<style scoped></style>
```

::: tip 温馨提醒

使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。

:::

## 深度选择器

有时我们可能想明确地制定一个针对子组件的规则。

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符。有些像 Sass 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作。

详情可以查看 RFC[0023-scoped-styles-changes](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)。

使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：

```vue
<style scoped>
  /* deep selectors */
  ::v-deep(.foo) {
  }
  /* shorthand */
  :deep(.foo) {
  }

  /* targeting slot content */
  ::v-slotted(.foo) {
  }
  /* shorthand */
  :slotted(.foo) {
  }

  /* one-off global rule */
  ::v-global(.foo) {
  }
  /* shorthand */
  :global(.foo) {
  }
</style>
```

## CSS Modules

针对样式覆盖问题，还有一种方案是使用 CSS Modules 模块化方案。使用方式如下。

```vue
<template>
  <span :class="$style.span1">hello</span>
</template>

<script>
  import { useCSSModule } from 'vue';

  export default {
    setup(props, context) {
      const $style = useCSSModule();
      const moduleAStyle = useCSSModule('moduleA');
      return {
        $style,
        moduleAStyle,
      };
    },
  };
</script>

<style lang="less" module>
  .span1 {
    color: green;
    font-size: 30px;
  }
</style>

<style lang="less" module="moduleA">
  .span1 {
    color: green;
    font-size: 30px;
  }
</style>
```

## 重复引用问题

加上 **reference** 可以解决页面内重复引用导致实际生成的 style 样式表重复的问题。

这步已经全局引入了。所以**可以不写**，直接使用变量

```vue
<style lang="less" scoped>
  /* 该行代码已全局引用。可以不用单独引入 */
  @import (reference) '../../design/config.less';
<style>
```

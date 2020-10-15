::: tip

遇到问题之前，可以先行查看 对应模块或者项目的 issue，查看之前有没有人遇到相关的问题

或者查询下方有没有相关的问题后在进行提问

:::

## 依赖安装问题

如果依赖安装出现问题，可以尝试 `yarn reinstall` 或者`npm run reinstall` 进行依赖重装

改操作会删除 `node_modules`和`yarn.lock`文件,速度较慢，请耐心等待。

## 关于打包文件过大

[vue-vben-admin](https://github.com/anncwb/vue-vben-admin)主要是集中展示一些 demo 和组件用法，不建议在这上面直接开发，可以使用精简版的模版[vue-vben-admin-thin](https://github.com/anncwb/vue-vben-admin-thin) 内部已经删除了一些不必要的模块。有需要可以自行安装

同时也建议开启`gizp`,加大大减小加载的体积

## 如何修改全局 loading 和一些全局样式

全局 loading 及全局的表格空字符默认显示,全局组件国际化 locale，可以在`src/setup/main/App.vue`内配置

```tsx
<ConfigProvider locale={zhCN} renderEmpty={renderEmpty} transformCellText={transformCellText}>
  <router-view />
</ConfigProvider>
```

## 如何改造成 template 写法

项目内使用的是 tsx 写法，好处是类型进行类型校验及联想，坏处是 vue 自带的一些指令可能用不了。对于有些人可能不习惯

::: tip

**src/views/** 下面提供两个文件 方便复制新建页面

**PageTemplate.vue** template 写法

**PageTempTsx.vue** tsx 写法

:::

**如何改造**

```vue
<template>
  <div :class="prefixCls">
    content
  </div>
</template>

<script lang="tsx">
  import { defineComponent } from 'compatible-vue';
  import { useDesign } from '@/hooks/core/useDesign';

  export default defineComponent({
    name: 'Index',
    setup() {
      const { prefixCls } = useDesign('index');

      return { prefixCls };
    },
  });
</script>
<style scoped lang="less">
  @import (reference) '~@design';
  @prefix-cls: ~'@{namespace}-index';

  .@{prefix-cls} {
    position: relative;
  }
</style>
```

## ie 支持问题

如果需要支持 ie ，只需要在对应的环境变量配置文件内,修改即可

```bash
# .env.development
# TRUE or FALSE
VUE_APP_SUPPORT_IE=TRUE
```

## REF 类型问题

遇到很多人在学习 composition-api 的时候，常常会将 ref，computed 等类型混淆

建议在命名的时候，变量名有一定的规范

例如：

```js
// good
const countRef = ref(0);
// bad
const count = ref(0);

const getCountRef = computed(() => 0);
```

这样就不会是使用的取值忘记 xxx.value 来进行数据获取

## 依赖安装问题

推荐使用 yarn 进行依赖安装

在项目根目录下有 **.npmrc**配置了依赖安装源

`yarn`与`npm`都会使用该源进行安装

```bash

registry = https://registry.npm.taobao.org

```

## 跨域问题

参考[跨域处理](/advanced/)

## 路径别名问题

目前项目路径别名有以下,在代码内会常常遇见 compatible-vue，其实是通过 [alias](https://webpack.js.org/configuration/resolve/#resolve-alias) 来出来的

```js
  config: 'config',
  '#': 'src/types',
  '@': 'src',
  '@design': 'src/design/index.less',
  'compatible-vue': 'src/setup/vue/index.ts',
```

## 打包后图片消失或者打包报错

如果打包后图片消失或者出现错误信息，在确保代码没有问题的情况下

可以尝试清空 `node_modules/.cache/` 目录后重新进行打包

## 图片路径问题

**template**

需要以 `~@/`开头即可

```vue
<template>
  <div>
    <img src="~@/assets/images" />
  </div>
</template>
```

**Tsx**

```vue
<script lang="tsx">
  import { defineComponent } from 'compatible-vue';
  import img from '@/assets/img/xxxx.png';
  export default defineComponent({
    name: 'Index',
    setup() {
      return () => {
        return (
          <div>
            <img src={img} />
          </div>
        );
      };
    },
  });
</script>
```

## 文件路径问题

当文件重命名或者删除并且在路由有引用到的情况下，报如下错误

```js

no files matching the pattern 'path/xxxx'

```

出现这种情况需要**重新运行**项目

目前暂不知如何修改，待后续改善

## 辅助文章

[Vue 2.x 脱坑记 - 查漏补缺(汇总下群里高频询问的 xxx 及给出不靠谱的解决方案)](https://juejin.im/post/6844903509331181575#heading-56)

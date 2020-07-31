## 基础

## 组件库图标的使用

**项目中采用的是图标按需引入的方式**

在项目文件夹下面 `src/assets/icon/setupIcon.ts`内，按需引入了 [ant-design-vue](https://www.antdv.com/components/icon-cn/) 所提供的 icon，目前只引入了一些项目必须的图标，如果你在使用图标的时候发现图标不能出现，请查看**setupIcon**文件内是否已经引入图标

### 如何新增一个组件库图标

以引入 `shrink`图标为例子，只需要在 **setupIcon.ts** 内添加以下内容即可完成图标的按需引入新增

```js
export { default as ShrinkOutline } from '@ant-design/icons/lib/outline/ShrinkOutline';
```

## svg 图标使用

使用的是[svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader)

### 如何新增一个 svg 图标

在项目文件夹下面 `src/assets/icon/svg`内,添加您所需要的 svg 图标即可使用，可以自行建立文件夹归类，

::: warning 注意

注意文件名不能重复

:::

### 如何使用

请查看 [svg 组件使用](/comp/icon/svg)

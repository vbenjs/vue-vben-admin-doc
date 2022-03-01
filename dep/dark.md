# 黑暗主题

## 介绍

项目已经内置了黑暗主题切换，只需配置自己需要的颜色变量，即可在项目中使用

## 原理

通过 [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) 插件，将所有的颜色变量抽取到独立的 css 文件，并且全部在 html 上面加上 css 选择器。通过改变 html 标签的 `data-theme` 属性来进行黑暗主题切换

## 配置

黑暗主题颜色配置通过 [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) 实现，具体代码在 `build/vite/plugin/theme`

```ts
antdDarkThemePlugin({
  darkModifyVars: {
    ...generateModifyVars(true),
    'text-color': '#c9d1d9',
    'text-color-base': '#c9d1d9',
    'component-background': '#151515',
    'text-color-secondary': '#8b949e',
    'border-color-base': '#303030',
    'item-active-bg': '#111b26',
    'app-content-background': 'rgb(255 255 255 / 4%)',
  },
});
```

## 切换

只需要使用 [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) 提供的函数来进行切换即可

```ts
import { darkCssIsReady, loadDarkThemeCss } from 'vite-plugin-theme/es/client';

export async function updateDarkTheme(mode: string | null = 'light') {
  const htmlRoot = document.getElementById('htmlRoot');
  if (mode === 'dark') {
    if (import.meta.env.PROD && !darkCssIsReady) {
      await loadDarkThemeCss();
    }
    htmlRoot?.setAttribute('data-theme', 'dark');
  } else {
    htmlRoot?.setAttribute('data-theme', 'light');
  }
}
```

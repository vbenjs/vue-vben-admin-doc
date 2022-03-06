# Electron

## URL 模式

这种模式会先启动 vite 服务，Electron 使用 Url 地址来进行渲染

### 使用

### 从 GitHub 获取代码

**Electron** 代码在 **electron-main** 分支

```bash
# clone electron-main分支代码
git clone -b electron-main https://github.com/vbenjs/vue-vben-admin vben-admin-electron
```

### 安装依赖

```bash
yarn
```

::: tip 提示

首次下载 Electron 依赖会比较慢，可以在项目根目录下新建`.npmrc`文件，填入下方内容即可

```bash
ELETRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

:::

### 运行

```bash
yarn dev:app
```

### 打包

```bash
yarn build:app
```

## 标准模式

TODO: 待适配

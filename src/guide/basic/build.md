# 构建

::: tip

由于是展示项目，所以打包后相对较大，如果项目中没有用到的插件，可以删除对应的文件或者路由不引用即可，没有引用就不会打包

当然，你也可以使用精简版 [vue-vben-admin-thin](https://github.com/anncwb/vben-admin-thin-next)进行开发

:::

项目开发完成之后，可以执行以下命令进行构建

```bash
yarn build
# or
npm run build

```

构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件

## 预览

发布之前可以在本地进行预览，有多种方式，这里介绍两种

- 本地服务器预览(通过 live-server)

```bash
# 1.全局安装live-server

yarn global add live-server
# or
npm i -g live-server

# 2. 进入打包的后目录
cd ./dist

# 本地预览，默认端口8080

live-server
# 指定端口
live-server --port 9000

```

- 使用项目自定的命令进行预览（使用 koa）

```bash

# 先打包在进行预览
yarn preview

# 直接预览本地 dist 文件目录
yarn preview:dist

```

## 开启 gzip

开启 gizp,并配合 nginx 的 gzip_static 功能可以大大加快页面访问速度

::: tip

只需开启 `VITE_BUILD_COMPRESS='gzip'` 即可在打包的同时生成.gz 文件

nginx 配置文件可以查看[nginx 配置](/guide/dep/nginx)

```bash

# 根据自己路径来配置更改
# 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/
VITE_PUBLIC_PATH=/
```

:::

## 发布

只需要将最终生成的静态文件，dist 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 index.html 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

::: tip

部署时可能会发现资源路径不对 只需要修改`.env.production`文件即可。

```bash

# 根据自己路径来配置更改
VITE_PUBLIC_PATH=/
```

:::

## 旧版浏览器兼容

在**.env.production**内

设置`VITE_LEGACY=true`即可打包出兼容旧版浏览器的代码

```bash
VITE_LEGACY = true
```

## 分析构建文件体积

如果你的构建文件很大，你可以通过 项目内置[rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer)插件进行代码体积分析，从而优化你的代码。

```bash

yarn report
# or
npm run report

```

运行之后你就可以在会自动打开页面看到具体的体积分布,分析哪些体积有问题

![](../../images/report.png)

# 前端路由与服务端的结合

vue-vben-admin 中，前端路由使用的是 vue-router，所以你可以选择两种方式：history 和 hash。

**hash** 默认会在 url 后面拼接`#`

**history** 则不会，不过 `history` 需要服务器配合

可在 [/@/router/index.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/router/index.ts) 内进行 mode 修改

```ts
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// app router
const router = createRouter({
  history: createWebHashHistory(),
  // or
  history: createWebHistory(),
  routes: [],
});
```

### 模式服务器配置

**Apache**

```

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

```

**nginx**

nginx 配置文件可以查看[nginx 配置](/guide/dep/nginx)

```bash

location / {
  try_files $uri $uri/ /index.html;
}

```

**原生 node**

```js
const http = require('http');
const fs = require('fs');
const httpPort = 80;

http
  .createServer((req, res) => {
    fs.readFile('index.htm', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.htm" file.');
      }

      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });

      res.end(content);
    });
  })
  .listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort);
  });
```

::: tip

具体可以参考[vue-router](https://router.vuejs.org/zh/guide/essentials/history-mode.html#html5-history-%E6%A8%A1%E5%BC%8F)

:::

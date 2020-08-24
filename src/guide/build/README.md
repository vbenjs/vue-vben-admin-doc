## 构建命令

::: tip

由于是展示项目，所以打包后相对较大，如果项目中没有用到的插件，可以删除对应的文件或者路由不引用即可，没有引用就不会打包

如果路由是动态由后台生成，`src/views`下面的文件不管有没有用到都会进行打包，这点需要注意

当然，你也可以使用精简版 [vue-vben-admin-thin](https://github.com/anncwb/vue-vben-admin-thin)进行开发

:::

项目开发完成之后，可以执行以下命令进行构建

```bash
yarn build
# or
npm run build

```

如果打包后图片丢失或者跟开发环境不一样，可能是缓存问题，此时可以使用下面命令进行打包

```bash
yarn build:no-cache
# or
npm run build:no-cache
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

yarn preview
# or
npm run preview

```

命令执行后会出现两个选项

1. **Preview after packaging**: 先打包，打包后在开启预览
2. **No packaging, preview directly (need to have dist file after packaging)**: 不需要打包，直接使用本地 dist 打包后的资源进行预览

## 开启 gzip

开启 gizp,并配合 nginx 的 gzip_static 功能可以大大加快页面访问速度

::: tip

只需开启 BUILD_ON_GZIP=TRUE 即可在打包的同时生成.gz 文件

nginx 配置文件可以查看[nginx 配置](/advanced/nginx)

```bash

# 根据自己路径来配置更改
VUE_APP_PUBLIC_PATH=./
```

:::

::: danger 注意

gzip 开启后，打包速度会比平时慢 2-3 倍左右，这是因为打包的同时还需要生成 `.gz`文件

:::

## 发布

只需要将最终生成的静态文件，dist 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 index.html 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

::: tip

部署时可能会发现资源路径不对 只需要修改`.env.production`文件即可。

```bash

# 根据自己路径来配置更改
VUE_APP_PUBLIC_PATH=./
```

:::

## 分析构建文件体积

如果你的构建文件很大，你可以通过 项目内置 `webpack-bundle-analyzer`插件进行代码体积分析，从而优化你的代码。

```bash

yarn report
# or
npm run report

```

运行之后你就可以在 [http://localhost:10010](http://localhost:10010) 页面看到具体的体积分布,分析哪些体积有问题

![](/img/build/report.jpg)

# 前端路由与服务端的结合

vue-vben-admin 中，前端路由使用的是 vue-router，所以你可以选择两种方式：history 和 hash。

**hash** 默认会在 url 后面拼接`#`

**history** 则不会，不过 `history` 需要服务器配合

可在`src/router/index.ts`内进行 mode 修改

```js
const createRouter = (options: CreateRouterOptions = {}): Router => {
  return new Router({
    // 这里可选  hash｜history
    mode: 'hash',
    base: process.env.VUE_APP_PUBLIC_PATH,
  });
};
```

**history 模式服务器配置**

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

nginx 配置文件可以查看[nginx 配置](/advanced/nginx)

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

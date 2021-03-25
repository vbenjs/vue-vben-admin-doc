# 服务器部署

部署服务器分两种场景:

1. 打包后上传到服务器部署

该场景比较简单。只需将打包后的 dist 上传到服务器对应的目录即可.

例如上传到[nginx](nginx.md)

`/usr/local/nginx/html/web/index.html`

```bash
  location /web {
      # 不缓存html，防止程序更新后缓存继续生效
      if ($request_filename ~* .*\.(?:htm|html)$)
        {
          add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
          access_log on;
        }
        # 这里是vue打包文件dist内的文件的存放路径
        root   /usr/local/nginx/html/web;
        index  index.html index.htm;
  }

```

2. 通过 CI/CD 自动打包部署

这种方式有很多,可以通过 github/gitlab/jenkins 等方式

这里要说的是**注意事项:**

如果是 linux 服务器需要配置下环境,否则 `imagemin`这个会导致依赖安装失败

执行`yarn install`会出现以下错误：

```bash
gifsicle pre-build test failed
compiling from source
```

这里以`Centos`为例

- 解决方式 1:

1. 将以下内容添加到 yum 源

```bash
[nasm]
name=The Netwide Assembler
baseurl=http://www.nasm.us/pub/nasm/stable/linux/
enabled=1
gpgcheck=0

[nasm-testing]
name=The Netwide Assembler (release candidate builds)
baseurl=http://www.nasm.us/pub/nasm/testing/linux/
enabled=0
gpgcheck=0

[nasm-snapshot]
name=The Netwide Assembler (daily snapshot builds)
baseurl=http://www.nasm.us/pub/nasm/snapshots/latest/linux/
enabled=0
gpgcheck=0
```

在`/etc/yum.repos.d/`下新建`Centos-Nasm.repo`，将以上内容复制到这个文件即可

2. 执行`yum install libtool automake autoconf nasm`
3. 重新执行`yarn install`即可

- 解决方式 2:

1. 删除`vite-plugin-imagemin`这个依赖。这会导致图片没有压缩。但是可以手动到在线网站进行压缩。这里推荐[tinypng](https://tinypng.com/)
2. 注释`vite-plugin-imagemin`插件引用

在项目`/build/vite/plugin/index.ts`内注释以下代码即可

```ts
import { configImageminPlugin } from './imagemin';
VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin());
```

::: tip

图片压缩对于项目优化还是很重要的

:::

## 本地开发环境接口地址修改

本地开发时候,接口地址在项目根目录下 `.env.development`文件配置

::: warning 注意

.env 文件如果是字符串 不需要加引号

:::

```bash
# 接口代理，会将以/app开头的接口代理到 http://localhost:3000
VUE_APP_PROXY=[["/app","http://localhost:3000"]]

# 接口地址
GLOB_API_URL=/app

```

**这里还区分是否跨域**，

如果**没有跨域**问题，可以直接忽略 `VUE_APP_PROXY` 配置，直接将接口地址设置在 `GLOB_API_URL`

```bash
# 例如接口地址为 http://localhost:3000 则
GLOB_API_URL=http://localhost:3000
```

如果**有跨域**问题，将`GLOB_API_URL`设置为跟 PROXY 内其中一个数组的第一个项一致的值即可

下方的 接口地址设置为`/app`,当请求发出的时候会经过 webpack-dev-server 的 proxy 代理

匹配到了我们设置的 `VUE_APP_PROXY` 规则，将`/app`转化为`http://localhost:3000`进行请求

```bash
# 例如接口地址为 http://localhost:3000 则
VUE_APP_PROXY=[["/app","http://localhost:3000"]]
# 接口地址
GLOB_API_URL=/app
```

**本地开发代理示例**

如果你在`src/api/`下面的接口为下方代码，且`.env.development`文件配置如下注释

则在控制台看到的地址为**http://localhost:9988/app/login**

由于 **/app** 匹配到了我们设置的 `VUE_APP_PROXY`

所以上方的请求实际是请求**http://localhost:3000/login**,这样同时也解决了跨域问题

::: tip

9988 为项目端口号

:::

```js

// .env.development
// VUE_APP_PROXY=[["/app","http://localhost:3000"]]
// GLOB_API_URL=/app

enum Api {
  Login = '/login',
}

/**
 * @description: 用户登陆
 */
export function loginApi(params: LoginParams) {
  return http.request<LoginResultModel>({
    url: Api.Login,
    method: 'POST',
    params,
  });
}

```

## 正式环境开发接口地址修改

正式环境接口地址在项目根目录下 `.env.production`文件配置

正式环境接口地址值需要修改`GLOB_API_URL`即可，如果出现跨域问题，可以使用 nginx 或者后台开启 cors 进行处理

具体请查看[跨域处理](/advanced/)

```bash
# 接口地址
GLOB_API_URL=/app

```

::: tip 打包后如何进行地址修改

`GLOB_*`开头的变量会在打包的时候注入`window-glob.js`文件内

只需要在`dist/window-glob.js`修改相应的接口地址即可，不需要在根据不同环境打包多次,一次打包，可以用于多个不同接口环境的部署

:::

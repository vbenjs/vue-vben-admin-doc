**项目内 mock 服务分本地和线上**

## 本地 mock

本地 mock 采用 `webpack dev serve` 中间件(本地不采用 `mock.js` 的原因是本地开发看不到请求参数和响应结果)

线上采用 `mock.js`

### 本地 mock 原理

在**config/vue/devServer.js**内部，devServe 的 before 属性上面挂载服务中间件，通过中间件启用一个本地服务进行 mock 数据处理

**中间件位置**

`build/middleware/mockMiddleware.js`

**本地如何开启 mock**

```js
// 修改 .env.development文件内的VUE_APP_USE_MOCK即可

// TRUE/FALSE
VUE_APP_USE_MOCK = TRUE;
```

**如何新增一个 mock 接口**

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的接口，对其进行拦截和模拟数据。

在 mock 文件夹内新建文件

::: tip

文件新增后会自动更新，不需要手动重启，可以在代码控制台查看日志信息

mock 文件夹内会自动注册，排除以`_`开头的文件夹及文件

:::

例：

```js
// mock/test.js
const ResultUtil = require('../_util/resultUtil');
module.exports = {
  'GET /getMenuListByUserId 20': ({ query }) => {
    const { userId } = query;
    return ResultUtil.success(userId ? fakeList[~~userId] || {} : {});
  },

  'POST /login 300': ({ body }) => {
    return ResultUtil.success({
      avatar: 'xxxx',
      time: 'xxxx',
    });
  },
};
```

**接口格式说明**

```js
'GET /getMenuListByUserId 20';

GET 接口请求类型

getMenuListByUserId 接口地址

20 响应时间，单位毫秒
```

**参数获取**

GET 接口： ({ query }) => { }

POST 接口： ({ body }) => { }

**ResultUtil 说明**

::: tip

```ts
{
  code: number;
  result: any;
  message: string;
  type: string;
}
```

这里需要自行修改成自己项目内后台返回的字段结构

:::

```js
// ResultUtil 是为了方便返回统格式的工具类

// 接口请求成功
ResultUtil.success((result: any), ({ message = 'ok' } = {}));

ResultUtil.success({data:{}})
// 会转换成以下值=>
{
   code: 0,
   result:{data:{}},
   message:'ok',
   type: 'success',
}

// 分页接口请求成功
ResultUtil.pageSuccess(items, total, { message = 'ok' } = {});

ResultUtil.success([{}],100)
// 会转换成以下值=>
{
   code: 0,
   result:{
     items:[{}],
     total:100
   },
   message:'ok',
   type: 'success',
}

// 接口请求错误
ResultUtil.error(message = 'Request failed', { code = -1, result = null } = {});

ResultUtil.error()
// 会转换成以下值=>
{
   code: -1,
   result:null,
   message:'Request failed',
   type: 'error',
}

// 分页工具
ResultUtil.pagination(pageNo, pageSize, array);

ResultUtil.pagination(1，10,[{},{}])

// =>
会返回数组1到第10条的数据

```

**匹配**

在 src/api 下面，如果接口匹配到 mock，则会优先使用 mock 进行响应

```js
// src/api
enum Api {
  Login = '/login',
}
/**
 * @description: 用户登陆
 */
export function loginApi(params: LoginParams) {
  return (
    http.request <
    LoginResultModel >
    {
      url: Api.Login,
      method: 'POST',
      params,
    }
  );
}

// =>

// 会匹配到上方的
  'POST /login 300': ({ body }) => {
    return ResultUtil.success({
      avatar: 'xxxx',
      time: 'xxxx',
    });
  }
```

**接口有了，如果去掉 mock**

当后台接口已经开发完成之后，只需要将相应的 mock 函数去掉即可

以上方接口为例，假如后台接口**login**已经开发完成

则只需要删除/注释掉下方代码即可

```js

'POST /login 300': ({ body }) => {
    return ResultUtil.success({
      avatar: 'xxxx',
      time: 'xxxx',
    });
  }
```

## 线上 mock

由于该项目是一个展示类项目，线上也是用 mock 数据，所以在打包后同时也集成了 mock

一般正常项目,线上一般为正式接口

项目线上 mock 采用的是 `mockjs`来进行 mock 数据模拟

**线上如何开启 mock**

```js
// 修改 .env.production文件内的VUE_APP_USE_MOCK即可

// TRUE/FALSE
VUE_APP_USE_MOCK = TRUE;
```

线上与本地差异不大，比较大的区别是线上在控制台内看不到接口请求日志

# Mock 与联调

## 本地开发环境接口地址修改

本地开发时候,接口地址在项目根目录下

[.env.development](https://github.com/anncwb/vue-vben-admin/tree/main/.env.development)文件配置

```bash
# Vite本地跨域代理
VITE_PROXY=[["/api","http://localhost:3000"]]
# 接口地址
VITE_GLOB_API_URL=/api
```

::: tip .env 文件如果是字符串 不需要加引号,默认全部为字符串 :::

**这里还区分是否跨域**

如果没有跨域问题，可以直接忽略 **VITE_PROXY** 配置，直接将接口地址设置在 **VITE_GLOB_API_URL**

```bash
# 例如接口地址为 http://localhost:3000 则
VITE_GLOB_API_URL=http://localhost:3000
```

如果有跨域问题，将**VITE_GLOB_API_URL**设置为跟 **VITE_PROXY** 内其中一个数组的第一个项一致的值即可

下方的 接口地址设置为`/api`,当请求发出的时候会经过 Vite 的 proxy 代理

匹配到了我们设置的 **VITE_PROXY** 规则，将`/api`转化为 http://localhost:3000 进行请求

```bash
# 例如接口地址为 http://localhost:3000 则
VITE_PROXY=[["/api","http://localhost:3000"]]
# 接口地址
VITE_GLOB_API_URL=/api

```

**本地开发代理示例**

如果你在**src/api/**下面的接口为下方代码，且 **.env.development**文件配置如下注释

则在控制台看到的地址为 http://localhost:3100/api/login

由于 /app 匹配到了我们设置的 VUE_APP_PROXY

所以上方的请求实际是请求 http://localhost:3100/login,这样同时也解决了跨域问题

::: tip 3100 为项目端口号 :::

```ts
// .env.development
// VITE_PROXY=[["/api","http://localhost:3000"]]
// VITE_GLOB_API_URL=/api

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

## 正式环境接口地址修改

正式环境接口地址在项目根目录下 [.env.production 文件配置](https://github.com/anncwb/vue-vben-admin/tree/main/.env.production文件配置)文件配置

正式环境接口地址值需要修改**VITE_GLOB_API_URL**即可，如果出现跨域问题，可以使用 nginx 或者后台开启 cors 进行处理

::: tip 打包后如何进行地址修改

**VITE*GLOB*\***开头的变量会在打包的时候注入`_app.config.js`文件内

只需要在`dist/_app.config.js`修改相应的接口地址然后刷新页面即可，不需要在根据不同环境打包多次,一次打包，可以用于多个不同接口环境的部署 :::

## 接口请求

在 vue-vben-admin 中:

1. 页面交互操作；
2. 调用统一管理的 api 请求函数；
3. 使用封装的 axios.ts 发送请求；
4. 获取服务端返回数据
5. 更新 data；

接口统一存放于[/@/api/](https://github.com/anncwb/vue-vben-admin/tree/main/src/api)下面管理

### 请求使用方法

以登陆接口为例

在 **src/api/** 内新建模块文件

其中参数与返回值最好定义一下类型，方便校验。虽然麻烦，但是后续维护字段很方便

::: tip

类型定义文件可以抽取出去统一管理，具体参考项目

:::

```ts
import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/login',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}
```

### axios 请求封装及配置

**axios** 请求封装存放于[/@/utils/http/axios](https://github.com/anncwb/vue-vben-admin/tree/main/src/utils/http/axios)文件夹内部

除 `index.ts`文件内容需要根据项目自行修改外，其余文件无需修改

```js

├── Axios.ts // axios实例
├── axiosCancel.ts // axiosCancel实例，取消重复请求
├── axiosTransform.ts // 数据转换类
├── checkStatus.ts // 返回状态值校验
├── index.ts // 接口返回统一处理

```

### index.ts 配置说明

```ts
const axios = new VAxios({
  // 接口超时时间 单位毫秒
  timeout: 10 * 1000,
  // 接口可能会有通用的地址部分，可以统一抽取出来
  prefixUrl: prefix,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 数据处理方式，见下方说明
  transform,
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 默认将prefix 添加到url
    joinPrefix: true,
    // 需要对返回数据进行处理
    isTransformRequestResult: true,
    // post请求的时候添加参数到url
    joinParamsToUrl: false,
    // 格式化提交参数时间
    formatDate: true,
    // 消息提示类型
    errorMessageMode: 'none',
    // 接口地址,
    apiUrl: globSetting.apiUrl,
  },
});
```

**transform 数据处理说明**

类型定义,见**axiosTransform.ts**文件

```js
export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description: 请求成功处理
   */
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}


```

项目默认 transform 处理逻辑 可以根据各自项目进行处理

一般需要更改的部分为下方代码，见代码注释说明

```js
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据
   */
  transformRequestData: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformRequestResult } = options;
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformRequestResult) {
      return res.data;
    }

    // 错误的时候返回
    const errorResult = undefined;

    const { data } = res;
    if (!data) {
      return errorResult;
    }
    // 这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, result, message } = data;

    // 这里逻辑可以根据项目进行修改
    const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
    if (!hasSuccess) {
      if (message) {
        // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
        if (options.errorMessageMode === 'modal') {
          createErrorModal({ title: '错误提示', content: message });
        } else {
          createMessage.error(message);
        }
      }
      Promise.reject(new Error(message));
      return errorResult;
    }

    // 接口请求成功，直接返回结果
    if (code === ResultEnum.SUCCESS) {
      return result;
    }
    // 接口请求错误，统一提示错误信息
    if (code === ResultEnum.ERROR) {
      if (message) {
        createMessage.error(data.message);
        Promise.reject(new Error(message));
      } else {
        const msg = '操作失败,系统异常!';
        createMessage.error(msg);
        Promise.reject(new Error(msg));
      }
      return errorResult;
    }
    // 登录超时
    if (code === ResultEnum.TIMEOUT) {
      const timeoutMsg = '登录超时,请重新登录!';
      createErrorModal({
        title: '操作失败',
        content: timeoutMsg,
      });
      Promise.reject(new Error(timeoutMsg));
      return errorResult;
    }
    return errorResult;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config) => {
    // 请求之前处理config
    const token = getToken();
    if (token) {
      // jwt token
      config.headers.Authorization = token;
    }
    return config;
  },
};
```

## 多个接口地址

项目中往往用到了不只一个接口地址。该项目也考虑到了这点。

当项目中需要用到多个接口地址时, 可以在 [/@/utils/http/axios/index.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/utils/http/axios/index.ts)导出多个 axios 实例

```ts
// 目前只导出一个默认实例，接口地址对应的是环境变量中的 VITE_GLOB_API_URL 接口地址
export const defHttp = createAxios();

// 需要有其他接口地址的可以在后面添加

// other api url
export const otherHttp = createAxios({
  requestOptions: {
    apiUrl: 'xxx',
  },
});
```

## Mock 服务

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。

项目中使用到了[Vite-Plugin-Mock](https://github.com/anncwb/vite-plugin-mock)来进行 mock 数据处理。该插件也由我一起维护，会跟该项目同时进行。

::: tip 项目内 mock 服务分本地和线上 :::

## 本地 Mock

本地 mock 采用 Koa 中间件进行参数拦截。(本地不采用 mock.js 的原因是本地开发看不到请求参数和响应结果)

### 如何新增一个 mock 接口

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的接口，对其进行拦截和模拟数据。

在 mock 文件夹内新建文件

::: tip

文件新增后会自动更新，不需要手动重启，可以在代码控制台查看日志信息 mock 文件夹内会自动注册，排除以\_开头的文件夹及文件 :::

例:

```ts
import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 60; index++) {
    result.push({
      id: `${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      name: '@cname()',
      'no|100000-10000000': 100000,
      'status|1': ['正常', '启用', '停用'],
    });
  }
  return result;
})();

export default [
  {
    url: '/api/table/getDemoList',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
] as MockMethod[];
```

::: tip mock 的值可以直接使用[mockjs](https://github.com/nuysoft/Mock/wiki)的语法。 :::

### 接口格式

```ts
{
  url: string;
    method?: MethodType;
    timeout?: number;
    response: ((opt: {
        body: any;
        query: any;
    }) => any) | object;
}
```

- url: mock 接口地址
- method: 请求方式
- timeout: 延时时间
- response: 响应结果

### 参数获取

**GET 接口：**` ({ query }) => { }`

**POST 接口：**` ({ body }) => { }`

### util 说明

可以在 [代码](https://github.com/anncwb/vue-vben-admin/tree/main/mock/_util.ts)查看代码 ::: tip util 只作为服务处理结果数据使用。可以不用或者自行封装如果需要使用，需要将对应的字段改为对应接口的返回字段结构 :::

### 匹配

在 src/api 下面，如果接口匹配到 mock，则会优先使用 mock 进行响应

```ts
import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/login',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}
// 会匹配到上方的
export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'POST',
    response: ({ body }) => {
      return resultPageSuccess({});
    },
  },
] as MockMethod[];
```

### 接口有了，如何去掉 mock

当后台接口已经开发完成之后，只需要将相应的 mock 函数去掉即可

以上方接口为例，假如后台接口 login 已经开发完成

则只需要删除/注释掉下方代码即可

```ts
export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'POST',
    response: ({ body }) => {
      return resultPageSuccess({});
    },
  },
] as MockMethod[];
```

## 线上 mock

由于该项目是一个展示类项目，线上也是用 mock 数据，所以在打包后同时也集成了 mock

一般正常项目,线上一般为正式接口

项目线上 mock 采用的是 [mockjs](https://github.com/nuysoft/Mock/wiki)来进行 mock 数据模拟

### 线上如何开启 mock

1. 修改 .env.production 文件内的 VITE_USE_MOCK 的值为 true

```ts
VITE_USE_MOCK = true;
```

2. 在[mock/\_createProductionServer.ts](https://github.com/anncwb/vue-vben-admin/tree/main/mock/_createProductionServer.ts)目录下引入需要的 mock 文件

```ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import userMock from './sys/user';
import menuMock from './sys/menu';
import tableDemoMock from './demo/table-demo';

export function setupProdMockServer() {
  createProdMockServer([...userMock, ...menuMock, ...tableDemoMock]);
}
```

3. 在[/@/main.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/main.ts)里面引入

```ts
import { setupProdMockServer } from '../mock/_createProductionServer';
import { isProdMode, isUseMock } from '/@/utils/env';
if (isProdMode() && isUseMock()) {
  setupProdMockServer();
}
```

到这里线上 mock 就配置完成了。

线上与本地差异不大，比较大的区别是线上在控制台内看不到接口请求日志

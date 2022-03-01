# 数据 mock&联调

## 开发环境

如果前端应用和后端接口服务器没有运行在同一个主机上，你需要在开发环境下将接口请求代理到接口服务器。

如果是同一个主机，可以直接请求具体的接口地址。

### 配置

开发环境时候，接口地址在项目根目录下

[.env.development](https://github.com/vbenjs/vue-vben-admin/tree/main/.env.development) 文件配置

```bash
# vite 本地跨域代理
VITE_PROXY=[["/basic-api","http://localhost:3000"]]
# 接口地址
VITE_GLOB_API_URL=/api
```

::: tip

- .env 文件中的字段如果是字符串，则无需加引号，默认全部为字符串
- VITE_PROXY 不能换行

:::

### 跨域处理

如果你在 `src/api/` 下面的接口为下方代码，且 **.env.development** 文件配置如下注释，则在控制台看到的地址为 `http://localhost:3100/basic-api/login`。

由于 `/basic-api` 匹配到了设置的 `VITE_PROXY`，所以上方实际是请求 **http://localhost:3000/login**，这样同时也解决了跨域问题。（**3100**为项目端口号，**http://localhost:3000**为PROXY代理的目标地址）

```ts
// .env.development
// VITE_PROXY=[["/basic-api","http://localhost:3000"]]
// VITE_GLOB_API_URL=/basic-api

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

### 没有跨域时的配置

如果没有跨域问题，可以直接忽略 **VITE_PROXY** 配置，直接将接口地址设置在 **VITE_GLOB_API_URL**

```bash
# 例如接口地址为 http://localhost:3000 则
VITE_GLOB_API_URL=http://localhost:3000
```

如果有跨域问题，将 **VITE_GLOB_API_URL** 设置为跟 **VITE_PROXY** 内其中一个数组的第一个项一致的值即可。

下方的接口地址设置为 `/basic-api`，当请求发出的时候会经过 Vite 的 proxy 代理，匹配到了我们设置的 **VITE_PROXY** 规则，将 `/basic-api` 转化为 `http://localhost:3000` 进行请求

```bash
# 例如接口地址为 http://localhost:3000 则
VITE_PROXY=[["/basic-api","http://localhost:3000"]]
# 接口地址
VITE_GLOB_API_URL=/basic-api
```

### 跨域原理解析

在 `vite.config.ts` 配置文件中，提供了 server 的 proxy 功能，用于代理 API 请求。

```ts
server: {
  proxy: {
    "/basic-api":{
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
    }
  },
},
```

::: tip 注意

从浏览器控制台的 Network 看，请求是 `http://localhost:3000/basic-api/xxx`，这是因为 proxy 配置不会改变本地请求的 url。

:::

## 生产环境

生产环境接口地址在项目根目录下 [.env.production](https://github.com/vbenjs/vue-vben-admin/tree/main/.env.production) 文件配置。

生产环境接口地址值需要修改 **VITE_GLOB_API_URL**，如果出现跨域问题，可以使用 nginx 或者后台开启 cors 进行处理

::: tip 打包后如何进行地址修改?

**VITE_GLOB\_\*** 开头的变量会在打包的时候注入 **\_app.config.js** 文件内。

在 **dist/\_app.config.js** 修改相应的接口地址后刷新页面即可，不需要在根据不同环境打包多次，一次打包可以用于多个不同接口环境的部署。

:::

## 接口请求

在 vue-vben-admin 中:

1. 页面交互操作；
2. 调用统一管理的 api 请求函数；
3. 使用封装的 axios.ts 发送请求；
4. 获取服务端返回数据
5. 更新 data；

接口统一存放于 [src/api/](https://github.com/vbenjs/vue-vben-admin/tree/main/src/api) 下面管理

以登陆接口为例:

在 **src/api/** 内新建模块文件，其中参数与返回值最好定义一下类型，方便校验。虽然麻烦，但是后续维护字段很方便。

::: tip

类型定义文件可以抽取出去统一管理，具体参考项目

:::

```ts
import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/login',
}

export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>({
    url: Api.Login,
    method: 'POST',
    params,
  });
}
```

## axios 配置

**axios** 请求封装存放于 [src/utils/http/axios](https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios) 文件夹内部

除 `index.ts` 文件内容需要根据项目自行修改外，其余文件无需修改

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
  // 认证方案，例如: Bearer
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
  authenticationScheme: '',
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
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 需要对返回数据进行处理
    isTransformRequestResult: true,
    // post请求的时候添加参数到url
    joinParamsToUrl: false,
    // 格式化提交参数时间
    formatDate: true,
    // 消息提示类型
    errorMessageMode: 'message',
    // 接口地址
    apiUrl: globSetting.apiUrl,
    //  是否加入时间戳
    joinTime: true,
    // 忽略重复请求
    ignoreCancelToken: true,
  },
});
```

**transform 数据处理说明**

类型定义，见 **axiosTransform.ts** 文件

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

项目默认 transform 处理逻辑，可以根据各自项目进行处理。一般需要更改的部分为下方代码，见代码注释说明

```js
/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { t } = useI18n();
    const { isTransformResponse, isReturnNativeResponse } = options;
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data;
    }
    // 错误的时候返回

    const { data } = res;
    if (!data) {
      // return '[HTTP] Request has no return value';
      throw new Error(t('sys.api.apiRequestFailed'));
    }
    //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, result, message } = data;

    // 这里逻辑可以根据项目进行修改
    const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return result;
    }

    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    let timeoutMsg = '';
    switch (code) {
      case ResultEnum.TIMEOUT:
        timeoutMsg = t('sys.api.timeoutMessage');
      default:
        if (message) {
          timeoutMsg = message;
        }
    }

    // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
    // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
    if (options.errorMessageMode === 'modal') {
      createErrorModal({ title: t('sys.api.errorTip'), content: timeoutMsg });
    } else if (options.errorMessageMode === 'message') {
      createMessage.error(timeoutMsg);
    }

    throw new Error(timeoutMsg || t('sys.api.apiRequestFailed'));
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        config.data = params;
        config.params = undefined;
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, config.data);
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    const token = getToken();
    if (token) {
      // jwt token
      config.headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { t } = useI18n();
    const errorLogStore = useErrorLogStoreWithOut();
    errorLogStore.addAjaxErrorInfo(error);
    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.error?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = '';

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = t('sys.api.apiTimeoutMessage');
      }
      if (err?.includes('Network Error')) {
        errMessage = t('sys.api.networkExceptionMsg');
      }

      if (errMessage) {
        if (errorMessageMode === 'modal') {
          createErrorModal({ title: t('sys.api.errorTip'), content: errMessage });
        } else if (errorMessageMode === 'message') {
          createMessage.error(errMessage);
        }
        return Promise.reject(error);
      }
    } catch (error) {
      throw new Error(error);
    }

    checkStatus(error?.response?.status, msg, errorMessageMode);
    return Promise.reject(error);
  },
};
```

### 更改参数格式

项目接口默认为 Json 参数格式，即 `headers: { 'Content-Type': ContentTypeEnum.JSON }`,

如果需要更改为 `form-data` 格式，更改 headers 的 `'Content-Type` 为 `ContentTypeEnum.FORM_URLENCODED` 即可

### 多个接口地址

当项目中需要用到多个接口地址时, 可以在 [src/utils/http/axios/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios/index.ts) 导出多个 axios 实例

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

### 删除请求 URL 携带的时间戳参数

如果不需要 url 上面默认携带的时间戳参数 `?_t=xxx`

```ts
const axios = new VAxios({
  requestOptions: {
    // 是否加入时间戳
    joinTime: false,
  },
});
```

## Mock 服务

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发进程所阻塞。

本项目使用 [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) 来进行 mock 数据处理。**项目内 mock 服务分本地和线上**。

### 本地 Mock

本地 mock 采用 Node.js 中间件进行参数拦截（不采用 mock.js 的原因是本地开发看不到请求参数和响应结果）。

#### 如何新增 mock 接口

如果你想添加 mock 数据，只要在根目录下找到 mock 文件，添加对应的接口，对其进行拦截和模拟数据。

在 mock 文件夹内新建文件

::: tip

文件新增后会自动更新，不需要手动重启，可以在代码控制台查看日志信息 mock 文件夹内会自动注册，排除以\_开头的文件夹及文件

:::

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

::: tip

mock 的值可以直接使用 [mockjs](https://github.com/nuysoft/Mock/wiki) 的语法。

:::

#### 接口格式

```ts
{
  url: string; // mock 接口地址
  method?: MethodType; // 请求方式
  timeout?: number; // 延时时间
  statusCode: number; // 响应状态码
  response: ((opt: { // 响应结果
      body: any;
      query: any;
  }) => any) | object;
}
```

#### 参数获取

**GET 接口：**` ({ query }) => { }`

**POST 接口：**` ({ body }) => { }`

#### util 说明

可在 [代码](https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_util.ts) 中查看

::: tip

util 只作为服务处理结果数据使用。可以不用，如需使用可自行封装，需要将对应的字段改为接口的返回结构

:::

#### 匹配

在 `src/api` 下面，如果接口匹配到 mock，则会优先使用 mock 进行响应

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

#### 接口有了，如何去掉 mock

当后台接口已经开发完成，只需要将相应的 mock 函数去掉即可。

以上方接口为例，假如后台接口 login 已经开发完成，则只需要删除/注释掉下方代码即可

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

### 线上 mock

由于该项目是一个展示类项目，线上也是用 mock 数据，所以在打包后同时也集成了 mock。通常项目线上一般为正式接口。

项目线上 mock 采用的是 [mockjs](https://github.com/nuysoft/Mock/wiki) 进行 mock 数据模拟。

#### 线上如何开启 mock

::: warning 注意

线上开启 mock 只适用于一些简单的示例网站及预览网站。**一定不要在正式的生产环境开启！！！**

:::

1. 修改 .env.production 文件内的 `VITE_USE_MOCK` 的值为 true

```ts
VITE_USE_MOCK = true;
```

2. 在 [mock/\_createProductionServer.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_createProductionServer.ts) 文件中引入需要的 mock 文件

```ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.globEager('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
```

3. 在 [build/vite/plugin/mock.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/build/vite/plugin/mock.ts) 里面引入

```ts
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  });
}
```

::: tip 为什么通过插件注入代码而不是直接在 main.ts 内插入

在插件内通过 `injectCode` 插入代码，方便控制 mockjs 是否被打包到最终代码内。如果在 main.ts 内判断，如果关闭了 mock 功能，mockjs 也会打包到构建文件内，这样会增加打包体积。

:::

到这里线上 mock 就配置完成了。线上与本地差异不大，比较大的区别是线上在控制台内看不到接口请求日志。

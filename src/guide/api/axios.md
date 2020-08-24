## 请求流程

在 vue-vben-admin 中:

1. 页面交互操作；
2. 调用统一管理的 api 请求函数；
3. 使用封装的 axios.js 发送请求；
4. 获取服务端返回数据
5. 更新 data；

接口统一存放于`src/api/`下面管理

## 请求使用方法

以登陆接口为例

在 **src/api/** 内新建模块文件

其中参数与返回值最好定义一下类型，方便校验。虽然麻烦，但是后续维护字段很方便

::: tip

类型定义文件可以抽取出去统一管理，具体参考项目

:::

```js
import http from '@/utils/http/axios';

export interface LoginParams {
  username: string;
  password: string;
}
/**
 * @description: 登陆接口返回值
 */
export interface LoginResultModel {
  // 用户id
  userId: string | number;
  // token
  token: string;
}

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

## axios 请求封装及配置

**axios** 请求封装存放于 **src/utils/http/axios/** 文件夹内部

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

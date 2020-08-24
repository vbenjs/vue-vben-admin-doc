## 介绍

用于`sessionStorage`,`localStorage`,`cookie`持久化操作

经过 createStorage 包装过的缓存函数，在生产环境的时候会自动进行 Aes 加密，且对 key 加上指定的前缀。防止更新过后缓存问题

## 使用

```tsx
import { createStorage } from '@/utils/storage/index';

// 默认sessionStorage
const session = createStorage();

const cookieObj = createStorage();

// 创建localStorage对象
const local = createStorage(localStorage);

// time超时时间，默认1个礼拜
session.set(key:string, value:any,time?:number);
session.get(key:string);
session.remove(key:string);

local.set(key:string, value:any,time?:number);
local.get(key:string);
local.remove(key:string);

cookieObj.setCookie(key:string, value:any,time?:number);
cookieObj.getCookie(key:string);
cookieObj.removeCookie(key:string);
cookieObj.clearCookie();
```

## 标签页相关使用

标签页使用的是 `keep-alive` 和 `router-view` 实现，实现切换 tab 后还能保存切换之前的状态

代码位于`src/layouts/page/index.vue`

```html
<keep-alive max="{16}" include="{tabStore.getKeepAliveTabsState}">
  <router-view {...propsData} />
</keep-alive>
```

### 如何让页面不缓存

**可在 router.meta 下配置**

可以将 `noKeepAlive`配置成`false`即可关闭缓存。

```js
// src/routes/types
export interface Meta {
  // 是否不缓存
  noKeepAlive?: boolean;
}
```

### 注意事项

`keep-alive`生效的前提是

**include - 字符串或正则表达式。只有名称匹配的组件会被缓存。**

所以需要将路由的`name`属性及对应的页面的`name`设置成一样

**src/router/routes/\*\***

```js

 {
   ...,
    // name
    name: 'Login',
    // 对应组件组件的name
    component: () => import('@/views/sys/login/index.vue'),
    ...
  },

  // @/views/sys/login/index.vue
  export default defineComponent({
    // 需要和路由的name一致
    name:"Login"
  });
```

## 如何关闭多标签页

参考 [项目配置](/guide/setting/project)

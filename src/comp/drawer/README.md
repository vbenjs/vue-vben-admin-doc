## 说明

对`antv`的 drawer 组件进行封装，扩展拖拽，全屏，自适应高度等功能

代码路径`@/components/drawer`

## 使用

**由于 drawer 内部代码一般独立成单独文件，我也推荐独立成组件来进行开发，所以示例都是以独立的文件来进行说明**

**独立组件代码，用于写组件内部的内容**

```tsx
// Drawer.vue
import { defineComponent } from 'compatible-vue';
import { Drawer } from '@/components/drawer/index';
export default defineComponent({
  name: 'DrawerDemo',
  setup(props, { listeners }) {
    return () => (
      <Drawer title="全屏抽屉" on={listeners}>
        弹窗内容 弹窗内容 弹窗内容 ...
      </Drawer>
    );
  },
});
```

**页面引用弹窗**

```tsx
// modal.vue
import { defineComponent, unref } from 'compatible-vue';
import Drawer from './Drawer.vue';

import { useDrawer } from '@/components/drawer/index';
export default defineComponent({
  name: 'DrawerDemoPage',
  setup(props, { listeners }) {
    // 用法见下方 useDrawer
    const [register, { openDrawer }] = useDrawer();
    return () => {
      return (
        <div>
          <Drawer onRegister={register} />
        </div>
      );
    };
  },
});
```

## useDrawer 说明

**useDrawer**用于操作组件

```ts
const [register, { openDrawer, setDrawerProps }] = useModal();
```

**register**

register 用于注册 useDrawer，如果需要使用`useDrawer`提供的 api，必须将 register 传入组件的 onRegister

原理其实很简单，就是 vue 的组件子传父通信，内部通过 emit("register"，instance)实现

同时独立出去的组件需要将 `listeners` 绑定到 Drawer 的 on 属性上面

```tsx
// Drawer.vue

export default defineComponent({
  setup(props, { listeners }) {
    return () => <Drawer on={listeners}></Drawer>;
  },
});
```

**openDrawer**

用于打开/关闭弹窗

```tsx
// true or false
openDrawer(true);
```

**setDrawerProps**

用于更改 drawer 的 props 参数因为 drawer 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供**setDrawerProps** 方便更改内部 drawer 的 props

props 内容可以见下方

```tsx
setDrawerProps(props);
```

## Props 说明

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv drawer](https://www.antdv.com/components/drawer-cn/#API)

:::

| 属性           | 类型         | 默认值 | 可选值 | 说明                                     |
| -------------- | ------------ | ------ | ------ | ---------------------------------------- |
| drawerType     | `DrawerType` | -      | -      | drawer 类型                              |
| loading        | `boolean`    | false  | -      | loading 状态                             |
| showDetailBack | `boolean`    | true   | -      | drawerType=DETAIL 状态下是否显示返回按钮 |
| closeFunc      | `Function`   | -      | -      | 自定义关闭函数                           |

## 事件

| 事件          | 回调参数      | 说明               |
| ------------- | ------------- | ------------------ |
| close         | `function(e)` | 点击关闭回调       |
| visibleChange | `function(e)` | 弹窗打开关闭时触发 |
| visibleChange | `function(e)` | 弹窗打开关闭时触发 |
| ok            | `function(e)` | 点击确定回调       |

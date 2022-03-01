# Modal 弹窗

对 antv 的 modal 组件进行封装，扩展拖拽，全屏，自适应高度等功能

代码路径 [src/components/Modal](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Modal)

## Usage

**由于弹窗内代码一般作为单文件组件存在，也推荐这样做，所以示例都为单文件组件形式**

::: tip

注意 `v-bind="$attrs"`记得写，用于将弹窗组件的 `attribute` 传入 `BasicModal` 组件

:::

```vue
// Modal.vue
<template>
  <BasicModal v-bind="$attrs" title="Modal Title" :helpMessage="['提示1', '提示2']">
    Modal Info.
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      return {};
    },
  });
</script>
```

**页面引用弹窗**

```vue
// Page.vue
<template>
  <div class="px-10">
    <Modal @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModal } from '/@/components/Modal';
  import Modal from './Modal.vue';
  export default defineComponent({
    components: { Modal },
    setup() {
      const [register, { openModal }] = useModal();
      return {
        register,
        openModal,
      };
    },
  });
</script>
```

## useModal

用于外部组件调用

**useModal** 用于操作组件

```ts
const [register, { openModal, setModalProps }] = useModal();
```

**register**

register 用于注册 `useModal`，如果需要使用 `useModal` 提供的 api，必须将 `register` 传入组件的 `onRegister`。

原理其实很简单，就是 vue 的组件子传父通信，内部通过 `emit("register"，instance)` 实现。

同时独立出去的组件需要将 `attrs` 绑定到 `BasicModal` 上面。

```vue
<template>
  <BasicModal v-bind="$attrs"></BasicModal>
</template>
```

**openModal**

用于打开/关闭弹窗

```tsx
// true/false: 打开关闭弹窗
// data: 传递到子组件的数据
openModal(true, data);
```

**closeModal**

用于关闭弹窗

```ts
closeModal();
```

**setModalProps**

用于更改 modal 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 **setModalProps** 方便更改内部 modal 的 props

[Props](#Props) 内容可以见下方

```ts
setModalProps(props);
```

## useModalInner

用于独立的 Modal 内部调用

### Usage

```vue
<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
  >
    <a-button type="primary" @click="closeModal" class="mr-2">从内部关闭弹窗</a-button>

    <a-button type="primary" @click="setModalProps">从内部修改title</a-button>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
```

**useModalInner**用于操作独立组件

```ts
const [register, { closeModal, setModalProps }] = useModalInner(callback);
```

**callback**

type: `(data:any)=>void`

回调函数用于接收 openModal 第二个参数传递的值

```ts
useModal((data: any) => {
  console.log(data);
});
```

**closeModal**

用于关闭弹窗

```ts
closeModal();
```

**changeOkLoading**

用于修改确认按钮的 loading 状态

```ts
changeOkLoading(true);
```

**changeLoading**

用于修改 modal 的 loading 状态

```tsx
// true or false
changeLoading(true);
```

**setModalProps**

用于更改 modal 的 props 参数因为 modal 内容独立成组件，如果在外部页面需要更改 props 可能比较麻烦，所以提供 **setModalProps** 方便更改内部 modal 的 props

[Props](#Props) 内容可以见下方

## Props

::: tip

除以下参数外，组件库文档内的 props 也都支持，具体可以参考 [antv modal](https://2x.antdv.com/components/modal-cn/#API)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| title | `string` | - | - | modal 标题 |
| height | `number` | - | - | 固定 modal 的高度 |
| minHeight | `number` | - | - | 设置 modal 的最小高度 |
| draggable | `boolean` | true | true/false | 是否开启拖拽 |
| useWrapper | `boolean` | true | true/false | 是否开启自适应高度，开启后会跟随屏幕变化自适应内容，并出现滚动条 |
| wrapperFooterOffset | `number` | 0 | - | 开启是适应高度后，如果超过屏幕高度，底部和顶部会保持一样的间距，该参数可以用来缩小底部的间距 |
| canFullscreen | `boolean` | true | true/false | 是否可以进行全屏 |
| defaultFullscreen | `boolean` | false | true/false | 默认全屏 |
| loading | `boolean` | false | true/false | loading 状态 |
| loadingTip | `string` | - | - | loading 文本 |
| showCancelBtn | `boolean` | true | true/false | 显示关闭按钮 |
| showOkBtn | `boolean` | true | true/false | 显示确认按钮 |
| helpMessage | `string , string[]` | - | - | 标题右侧提示文本 |
| centered | `boolean` | false | true/false | 是否居中弹窗 |
| cancelText | `string` | '关闭' | - | 关闭按钮文本 |
| okText | `string` | '保存' | - | 确认按钮文本 |
| closeFunc | `() => Promise<boolean>` | 关闭函数 | - | 关闭前执行，返回 true 则关闭，否则不关闭 |

## Events

| 事件           | 回调参数                | 说明             |
| -------------- | ----------------------- | ---------------- |
| ok             | `function(e)`           | 点击确定回调     |
| cancel         | `function(e)`           | 点击取消回调     |
| visible-change | `(visible:boolean)=>{}` | 打开或者关闭触发 |

## Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认区域 |
| footer | 底部区域(会替换掉默认的按钮) |
|insertFooter|关闭按钮的左边(不使用footer插槽时有效) |
|centerFooter| 关闭按钮和确认按钮的中间(不使用footer插槽时有效) |
|appendFooter| 确认按钮的右边(不使用footer插槽时有效) |

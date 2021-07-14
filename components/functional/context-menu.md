# ContextMenu

函数式创建右键菜单组件， 只要能拿到 dom 的 `event` 对象就能为其创建右键菜单。

## Usage

```vue
<template>
  <div>
    <a-button type="primary" @contextmenu="handleContext">Right Click on me</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useContextMenu } from '/@/hooks/web/useContextMenu';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  export default defineComponent({
    components: { CollapseContainer },
    setup() {
      const [createContextMenu] = useContextMenu();
      const { createMessage } = useMessage();
      function handleContext(e: MouseEvent) {
        createContextMenu({
          event: e,
          items: [
            {
              label: 'New',
              icon: 'ant-design:plus-outlined',
              handler: () => {
                createMessage.success('click new');
              },
            },
            {
              label: 'Open',
              icon: 'ant-design:folder-open-filled',
              handler: () => {
                createMessage.success('click open');
              },
            },
          ],
        });
      }
      return { handleContext };
    },
  });
</script>
```

## createContextMenu

**Options**

| 属性  | 类型                | 默认值 | 可选值 | 说明                                     |
| ----- | ------------------- | ------ | ------ | ---------------------------------------- |
| event | `Event`             | -      | -      | 需要创建的 dom 的 `Event` 对象           |
| items | `ContextMenuItem[]` | -      | -      | 右键菜单列表，`ContextMenuItem`见下方说明 |

**ContextMenuItem**

| 属性     | 类型       | 说明              |
| -------- | ---------- | ----------------- |
| label    | `string`   | 文本              |
| icon     | `string`   | 图标,参考图标组件 |
| disabled | `boolean`  | 是否禁用          |
| handler  | `()=>void` | 点击触发函数      |

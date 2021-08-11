# Tree

对 `antv` 的 tree 组件进行封装

## Usage

```vue
<template>
  <BasicTree :treeData="treeData" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTree } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { CollapseContainer } from '/@/components/Container/index';
  import { TreeItem } from '/@/components/Tree/index';

  export const treeData: TreeItem[] = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '0-0-0' },
        {
          title: 'leaf',
          key: '0-0-1',
          children: [
            { title: 'leaf', key: '0-0-0-0' },
            { title: 'leaf', key: '0-0-0-1' },
          ],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '1-1',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '1-1-0' },
        { title: 'leaf', key: '1-1-1' },
      ],
    },
    {
      title: 'parent 3',
      key: '2-2',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '2-2-0' },
        { title: 'leaf', key: '2-2-1' },
      ],
    },
  ];
  export default defineComponent({
    components: { BasicTree, CollapseContainer },
    setup() {
      return { treeData };
    },
  });
</script>
```

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv tree](https://2x.antdv.com/components/tree-cn/#Tree-props)

:::

| 属性             | 类型                      | 默认值 | 可选值 | 说明                         | 版本 |
| ---------------- | ------------------------- | ------ | ------ | ---------------------------- | - |
| treeData         | `TreeItem[]`              | -      | -      | 树组件数据                   |   |
| rightMenuList    | `ContextMenuItem[]`       | -      | -      | 右键菜单列表                 |   |
| checkedKeys      | `string[]`                | -      | -      | 勾选的节点                   |   |
| selectedKeys     | `string[]`                | -      | -      | 选中的节点                   |   |
| expandedKeys     | `string[]`                | -      | -      | 展开的节点                   |  |
| actionList       | `ActionItem[]`            | -      | -      | 鼠标移动上去右边操作按钮列表 |  |
| title            | `string`                  | -      | -      | 定制标题字符串              |  |
| toolbar            | `boolean`                  | -      | -      | 是否显示工具栏             |  |
| search            | `boolean`                  | -      | -      | 显示搜索框             |  |
| clickRowToExpand            | `boolean`                  | -      | -      | 是否在点击行时自动展开             |  |
| beforeRightClick            | `(node, event)=>ContextMenuItem[]`                  | -      | -      | 右键点击回调，可返回右键菜单列表数据来生成右键菜单 |  |
| rightMenuList            | `ContextMenuItem[]`                  | -      | -      | 右键菜单列表数据             |  |
| defaultExpandLevel | `string ｜ number`        | -      | -      | 初次渲染后默认展开的层级     | 2.4.1 |
| defaultExpandAll | `boolean`       | `false`  | `true/false`      | 初次渲染后默认全部     | 2.4.1 |
| searchValue(v-model)       | `string`  | -   | - | 当前搜索词 | 2.7.1 |

::: tip 注意

`defaultExpandLevel`、`defaultExpandAll` 仅在**初次渲染**时生效。如果`basicTree`是在创建完毕之后才设置的`treeData`(如异步数据)，需要在更新后自己调用`basicTree`提供的`expandAll`、`filterByLevel`来执行展开

:::

**ActionItem**

```ts
{
  // 渲染的图标
  render: (record: any) => any;
  // 是否显示
  show?: boolean | ((record: Recordable) => boolean);
}
```

**ContextMenuItem**

```ts
{
  // 文本
  label: string;
  // 图标
  icon?: string;
  // 是否禁用
  disabled?: boolean;
  // 事件
  handler?: (...arg) => any;
  // 是否显示分隔线
  divider?: boolean;
  // 子级菜单数据
  children?: ContextMenuItem[];
}
```

## Slots

::: tip 温馨提醒

官方文档内的 slot 都支持，具体可以参考 [antv tree](https://2x.antdv.com/components/tree-cn/#Tree-props)

:::

## Methods

| 名称            | 回调参数                                             | 说明                   |
| --------------- | ---------------------------------------------------- | ---------------------- |
| checkAll        | `(checkAll: boolean) => void`                        | 选择所有               |
| expandAll       | `(expandAll: boolean) => void`                       | 展开所有               |
| setExpandedKeys | `(keys: Keys) => void`                               | 设置展开节点           |
| getExpandedKeys | `() => Keys`                                         | 获取展开节点           |
| setSelectedKeys | `(keys: Keys) => void`                               | 设置选中节点           |
| getSelectedKeys | `() => Keys`                                         | 获取选中节点           |
| setCheckedKeys  | `(keys: CheckKeys) => void`                          | 设置勾选节点           |
| getCheckedKeys  | `() => CheckKeys`                                    | 获取勾选节点           |
| filterByLevel   | `(level: number) => void`                            | 显示指定等级           |
| insertNodeByKey | `(opt: InsertNodeParams) => void`                    | 插入子节点到指定节点内 |
| deleteNodeByKey | `(key: string) => void`                              | 根据 key 删除节点      |
| updateNodeByKey | `(key: string, node: Omit<TreeItem, 'key'>) => void` | 根据 key 更新节点      |
| setSearchValue | `(value: string) => void` | 设置当前搜索词（v2.7.1）      |
| getSearchValue | `() => string` | 获取当前搜索词(v2.7.1)      |

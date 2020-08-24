## 说明

对`antv`的 tree 组件进行封装

代码路径`@/components/tree`

```tsx
import { defineComponent } from 'compatible-vue';
import { BasicTree, TreeItem } from '@/components/tree/index';

const treeData: TreeItem[] = [
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
  setup() {
    return () => {
      return <BasicTree treeData={treeData} />;
    };
  },
});
```

## props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv tree](https://www.antdv.com/components/tree-cn/#API)

:::

## props

| 属性             | 类型                      | 默认值 | 可选值 | 说明                         |
| ---------------- | ------------------------- | ------ | ------ | ---------------------------- |
| treeData         | `TreeItem[]`              | -      | -      | 树组件数据                   |
| rightMenuList    | `ContextMenuItem[]`       | -      | -      | 右键菜单列表                 |
| beforeRightClick | `（）=>ContextMenuItem[]` | -      | -      | 点击右键之前生成右键菜单     |
| checkedKeys      | `string[]`                | -      | -      | 勾选的节点                   |
| selectedKeys     | `string[]`                | -      | -      | 选中的节点                   |
| expandedKeys     | `string[]`                | -      | -      | 展开的节点                   |
| actionList       | `ActionItem[]`            | -      | -      | 鼠标移动上去右边操作按钮列表 |

**ActionItem**

```ts
{
  // 渲染的图标
  render: (record: any) => any;
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
  // 分割线
  divider?: boolean;
  // 子节点
  children?: ContextMenuItem[];
}
```

## slots

::: tip 温馨提醒

除以下参数外，官方文档内的 slot 也都支持，具体可以参考 [antv tree](https://www.antdv.com/components/tree-cn/#API)

:::

## 函数

| 名称            | 回调参数                                             | 说明                   |
| --------------- | ---------------------------------------------------- | ---------------------- |
| setExpandedKeys | `(keys: Keys) => void`                               | 设置展开节点           |
| getExpandedKeys | `() => Keys`                                         | 获取展开节点           |
| setSelectedKeys | `() => Keys`                                         | 设置选中节点           |
| getSelectedKeys | `(keys: Keys) => CheckKeys`                          | 获取选中节点           |
| setCheckedKeys  | `() => CheckKeys`                                    | 设置勾选节点           |
| getCheckedKeys  | `(keys: Keys) => CheckKeys`                          | 获取勾选节点           |
| filterByLevel   | `(level: number) => void`                            | 显示指定等级           |
| insertNodeByKey | `(opt: InsertNodeParams) => void`                    | 插入子节点到指定节点内 |
| deleteNodeByKey | `(key: string) => void`                              | 根据 key 删除节点      |
| updateNodeByKey | `(key: string, node: Omit<TreeItem, 'key'>) => void` | 根据 key 更新节点      |

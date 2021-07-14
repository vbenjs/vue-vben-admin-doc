# Description 详情组件

对 `antv` 的 Descriptions 组件进行封装

## Usage

```vue
<template>
  <div class="p-4">
    <Description
      title="基础示例"
      :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
      :column="3"
      :data="mockData"
      :schema="schema"
    />
    <Description @register="register" class="mt-4" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  const mockData: any = {
    username: 'test',
    nickName: 'VB',
    age: 123,
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '厦门市思明区',
    sex: '男',
    certy: '3504256199xxxxxxxxx',
    tag: 'orange',
  };
  const schema: DescItem[] = [
    {
      field: 'username',
      label: '用户名',
    },
    {
      field: 'nickName',
      label: '昵称',
      render: (curVal, data) => {
        return `${data.username}-${curVal}`;
      },
    },
    {
      field: 'phone',
      label: '联系电话',
    },
    {
      field: 'email',
      label: '邮箱',
    },
    {
      field: 'addr',
      label: '地址',
    },
  ];
  export default defineComponent({
    components: { Description, Alert },
    setup() {
      const [register] = useDescription({
        title: 'useDescription',
        data: mockData,
        schema: schema,
      });
      return { mockData, schema, register };
    },
  });
</script>
```

## useDescription

参考以上示例

```ts
const [register] = useDescription(Props);
```

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv Description](https://2x.antdv.com/components/descriptions-cn/#API)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| title | `string` | - | - | 标题 |
| size | `string` | small | - | 大小 |
| bordered | `boolean` | true | - | 是否展示边框 |
| column | `Number, Object` | `{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }` | - | 一行的 `DescriptionItems` 数量 |
| useCollapse | `boolean` | - | - | 是否包裹 CollapseContainer 组件 |
| collapseOptions | `Object` | - | - | `CollapseContainer` 组件属性 |
| schema | `DescItem[]` | - | - | 详情项配置，见下方 `DescItem` 配置 |
| data | `object` | - | - | 数据源 |

## DescItem

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| field | `string` | - | - | 字段名 |
| label | `string` | - | - | 标签名 |
| labelMinWidth | `number` | - | - | label 最小宽度 |
| contentMinWidth | `number` | - | - | content 最小宽度 |
| labelStyle | `any` | - | - | label 样式 |
| span | `number` | - | - | 和并列数量 |
| show | `(data)=>boolean` | - | - | 动态判断当前组件是否显示 |
| render | `(val: string, data: any)=>VNode,undefined,Element,string,number` | - | - | 自定义渲染 content |

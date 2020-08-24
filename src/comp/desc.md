## 说明

对`antv`的 Descriptions 组件进行封装,可兼容Form schemas的JSON配置

代码路由`@/components/description`

## 使用

```tsx
  import { defineComponent } from 'compatible-vue';
  import { Description, DescItem, useDescription } from '@/components/description/index';
  const mockData = {
    username: 'test',
    nickName: 'VB',
    age: 25,
    phone: '15695909xxx',
    email: '190848757@qq.com',
    addr: '厦门市思明区观日路18号',
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
    setup() {

      return () => (
          <Description
            class="m-2"
            title="基础示例"
            collapseOptions={{
              canExpand: true,
              helpMessage: 'help me',
            }}
            column={3}
            data={mockData}
            schema={schema}
          />
      );
    },
  });
```

## useDescription 说明

**useDescription**用于操作组件

原理，使用方式与useModal相同，由于Description组件简单，目前，推荐直接设置props，不使用useDescription


## Props 说明

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv Description](https://www.antdv.com/components/descriptions-cn/)

:::

| 属性            | 类型           | 默认值                                        | 可选值 | 说明                           |
| --------------- | -------------- | --------------------------------------------- | ------ | ------------------------------ |
| title           | string         | -                                             | -      | 标题                           |
| size            | string         | small                                         | -      | 大小                           |
| bordered        | boolean        | true                                          | -      | 是否展示边框                   |
| column          | Number, Object | { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 } | -      | 一行的 DescriptionItems 数量   |
| useCollapse     | boolean        | -                                             | -      | 是否包裹CollapseContainer组件  |
| collapseOptions | Object         | -                                             | -      | CollapseContainer组件属性      |
| schema          | DescItem[]     | -                                             | -      | 详情项配置，见下方 schema 配置 |
| data            | any            | -                                             | -      | 数据源                         |

## Schema

| 属性          | 类型     | 默认值 | 可选值 | 说明                     |
| ------------- | -------- | ------ | ------ | ------------------------ |
| field         | string   | -      | -      | 字段名                   |
| label         | string   | -      | -      | 标签名                   |
| labelMinWidth | number   | -      | -      | 最小宽度                 |
| labelStyle    | any      | -      | -      | label样式                |
| span          | number   | -      | -      | 和并列数量               |
| show          | function | -      | -      | 动态判断当前组件是否显示 |
| render        | function | -      | -      | 自定义渲染content        |

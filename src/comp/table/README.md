## 说明

对`antv`的 table 组件进行封装

代码路径`@/components/table`

## 使用

使用组件自带的**useTable**可以方便使用表单

下面是一个使用简单表格的示例，

```tsx
  import { defineComponent } from 'compatible-vue';

  import { BasicTable, BasicColumn, useTable } from '@/components/table/index';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '编号',
      dataIndex: 'no',
      width: 80,
    },

  ];
  export default defineComponent({
    setup() {
      const [register, { setProps }] = useTable({
        canResize: false,
      });
      return () => (
        <div class="p-4 table-demo">
            <BasicTable
              onRegister={register}
              title="基础表格"
              columns={columns}
              dataSource={data}
            />
        </div>
      );
    },
  });
</script>
```

## useTable

用于调用 Table 内部方法及 table 参数配置

```ts
// 表格的props也可以直接注册到useForm内部
const [register, methods] = useForm(props);
```

**register**

register 用于注册 useTable，如果需要使用`useTable`提供的 api，必须将 register 传入组件的 onRegister

```tsx
import { BasicTable, useTable } from '@/components/table/index';

export default defineComponent({
  setup() {
    const [register] = useTable();
    return () => <BasicTable onRegister={register}></BasicTable>;
  },
});
```

### methods

**setProps**

用于设置表格参数

```js
setProps: (props: Partial<BasicTableProps>) =>void
```

**reload**

刷新表格

```js
 interface FetchParams {
  searchInfo?: any;
  page?: number;
}

reload: (opt?: FetchParams) =>void
```

**redoHeight**

重新计算表格高度

```js
redoHeight: () =>void
```

**setLoading**

设置表格 loading 状态

```js
setLoading: (loading: boolean) =>void
```

**getDataSource**

获取表格数据

```js
getDataSource: () =>any[]|undefined
```

**getColumns**

获取表头数据

```js
getColumns: () =>BasicColumn[]
```

**setColumns**

设置表头数据

```js
setColumns: (columns: BasicColumn[] | string[]) =>void
```

**setTableData**

设置表格数据

```js
setTableData: (values: any[]) =>void
```

**setPagination**

设置分页信息

```js
setPagination: (info: Partial<PaginationProps>) =>void
```

**deleteSelectRowByKey**

根据 key 删除取消选中行

```js
deleteSelectRowByKey: (key: string) =>void
```

**getSelectRowKeys**

获取选中行的 keys

```js
getSelectRowKeys: () => string[]
```

**getSelectRows**

获取选中行的 rows

```js
getSelectRows: () => any[]
```

**clearSelectedRowKeys**

清空选中行

```js
clearSelectedRowKeys: () => void
```

**setSelectedRowKeys**

设置选中行

```js
setSelectedRowKeys: (keys: string[]) => void
```

**getPaginationRef**

获取当前分页信息

```js
getPaginationRef: () => void
```

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv table](https://www.antdv.com/components/table-cn/#API)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| showSummary | `boolean` | false | - | 是否显示合计行 |
| summaryFunc | `(...arg) => any[]` | - | - | 计算合计行的方法 |
| canRowDrag | `boolean` | false | - | 是否可拖拽行排序 |
| canColDrag | `boolean` | false | - | 是否可拖拽列 |
| isTreeTable | `boolean` | false | - | 是否树表 |
| api | `Promise` | - | - | 请求接口，可以直接将`src/api内的函数直接传入` |
| beforeFetch | `(T)=>T` | - | - | 请求之前对参数进行处理 |
| afterFetch | `(T)=>T` | - | - | 请求之后对返回值进行处理 |
| handleSearchInfoFn | `(T)=>T` | - | - | 开启表单后，在请求之前处理搜索条件参数 |
| fetchSetting | `FetchSetting` | - | - | 接口请求配置，可以配置请求的字段和响应的字段名 |
| immediate | `boolean` | true | - | 组件加载后是否立即请求接口，在 api 有传的情况下，如果为 false，需要自行使用 reload 加载表格数据 |
| searchInfo | `any` | - | - | 额外的请求参数 |
| useSearchForm | `boolean` | false | - | 使用搜索表单 |
| formConfig | `any` | - | - | 表单配置，参考[表单的 Props](/comp/form/#props) |
| columns | `any` | - | - | 表单列信息 BasicColumn[] |
| showIndexColumn | `boolean` | ture | - | 是否显示序号列 |
| indexColumnProps | any | - | - | 序号列配置 BasicColumn |
| actionColumn | any | - | - | 表格右侧操作列配置 BasicColumn |
| ellipsis | boolean | true | - | 文本超过宽度是否显示... |
| canResize | boolean | true | - | 是否可以自适应高度 |
| clearSelectOnPageChange | boolean | false | - | 切换页码是否重置勾选状态 |
| resizeHeightOffset | number | 0 | - | 表格自适应高度计算结果会减去这个值 |
| rowSelection | any | - | - | 选择列配置 |
| title | string | - | - | 表格标题 |
| titleHelpMessage | `string ｜ string[]` | - | - | 表格标题右侧温馨提醒 |
| maxHeight | number | - | - | 表格最大高度，超出会显示滚动条 |
| dataSource | any[] | - | - | 表格数据，非 api 加载情况 |
| bordered | `boolean` | false | - | 是否显示表格边框 |
| pagination | `any` | - | - | 分页信息配置，为 null 不显示分页 |
| loading | `boolean` | false | - | 表格 loading 状态 |
| scroll | `any` | - | - | 参考官方文档 scroll |

## BasicColumn

参考官方 [Column 配置](https://www.antdv.com/components/table-cn/#Column)

## 事件

::: tip 温馨提醒

除以下参数外，官方文档内的 event 也都支持，具体可以参考 [antv table](https://www.antdv.com/components/table-cn/#API)

:::

| 事件            | 回调参数                  | 说明               |
| --------------- | ------------------------- | ------------------ |
| fetch-success   | `Function({items,total})` | 接口请求成功后触发 |
| fetch-error     | `Function(error)`         | 错误信息           |
| selectionChange | `Function({keys，rows})`  | 勾选事件触发       |

## slots

::: tip 温馨提醒

除以下参数外，官方文档内的 slot 也都支持，具体可以参考 [antv table](https://www.antdv.com/components/table-cn/#API)

:::

| 名称              | 说明             |
| ----------------- | ---------------- |
| tableTitle        | 表格顶部左侧区域 |
| toolbar           | 表格顶部右侧区域 |
| expandedRowRender | 展开行区域       |

**如果开启搜索表单**

[表单的 slots](/comp/form/#slots)也支持

## 表格内置组件（只能用于表格内部）

### TableAction 组件

用于表格右侧操作列渲染

**props**

| 属性            | 类型           | 默认值 | 可选值 | 说明                       |
| --------------- | -------------- | ------ | ------ | -------------------------- |
| actions         | `ActionItem[]` | -      | -      | 右侧操作列按钮列表         |
| dropDownActions | `ActionItem[]` | -      | -      | 右侧操作列更多下拉按钮列表 |

**ActionItem**

```ts
export interface ActionItem {
  // 按钮事件 jsx格式
  on?: any;
  // 按钮文本
  label: string;
  // 是否禁用
  disabled?: boolean;
  // 按钮颜色
  color?: 'success' | 'error' | 'warning';
  // 按钮类型
  type?: string;
  // button组件props
  props?: any;
  // 按钮图标
  icon?: string;
  // 气泡确认框
  popConfirm?: PopConfirm;
}

export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: any;
  cancel?: any;
  icon?: string;
}
```

### TableImg 组件

用于渲染单元格图片,支持图片预览

**props**

| 属性    | 类型       | 默认值 | 可选值 | 说明         |
| ------- | ---------- | ------ | ------ | ------------ |
| imgList | `string[]` | -      | -      | 图片地址列表 |
| size    | `number`   | -      | -      | 图片大小     |

### TableImg 组件

用于渲染单元格图片,支持图片预览

**props**

| 属性    | 类型       | 默认值 | 可选值 | 说明         |
| ------- | ---------- | ------ | ------ | ------------ |
| imgList | `string[]` | -      | -      | 图片地址列表 |
| size    | `number`   | -      | -      | 图片大小     |

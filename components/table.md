# Table 表格

对 `antv` 的 table 组件进行封装

> 如果文档内没有，可以尝试在在线示例内寻找

## Usage

### 示例

```vue
<template>
  <div class="p-4">
    <BasicTable
      title="基础示例"
      titleHelpMessage="温馨提醒"
      :columns="columns"
      :dataSource="data"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      :pagination="{ pageSize: 20 }"
    >
      <template #toolbar>
        <a-button type="primary"> 操作按钮 </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { getBasicColumns, getBasicData } from './tableData';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      return {
        columns: getBasicColumns(),
        data: getBasicData(),
      };
    },
  });
</script>
```

### template 示例

所有可调用函数见下方 `Methods` 说明

```vue
<template>
  <div class="p-4">
    <BasicTable
      :canResize="false"
      title="RefTable示例"
      titleHelpMessage="使用Ref调用表格内方法"
      ref="tableRef"
      :api="api"
      :columns="columns"
      rowKey="id"
      :rowSelection="{ type: 'checkbox' }"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, TableActionType } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const tableRef = ref<Nullable<TableActionType>>(null);

      function getTableAction() {
        const tableAction = unref(tableRef);
        if (!tableAction) {
          throw new Error('tableAction is null');
        }
        return tableAction;
      }
      function changeLoading() {
        getTableAction().setLoading(true);
        setTimeout(() => {
          getTableAction().setLoading(false);
        }, 1000);
      }
      return {
        tableRef,
        api: demoListApi,
        columns: getBasicColumns(),
        changeLoading,
      };
    },
  });
</script>
```

### BasicColumn 和 tableAction 通过权限和业务控制显示隐藏的示例
```vue
<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              onClick: handleEdit.bind(null, record),
              auth: 'other', // 根据权限控制是否显示: 无权限，不显示
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
          ]"
          :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
              },
            },
            {
              label: '禁用',
              popConfirm: {
                title: '是否禁用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status === 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
              },
            },
            {
              label: '同时控制',
              popConfirm: {
                title: '是否动态显示？',
                confirm: handleOpen.bind(null, record),
              },
              auth: 'super', // 同时根据权限和业务控制是否显示
              ifShow: () => {
                return true; // 根据业务控制是否显示
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: '地址',
      dataIndex: 'address',
      auth: 'super', // 同时根据权限控制是否显示
      ifShow: (_column) => {
        return true; // 根据业务控制是否显示
      },
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction组件及固定列示例',
        api: demoListApi,
        columns: columns,
        bordered: true,
        actionColumn: {
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleEdit(record: Recordable) {
        console.log('点击了编辑', record);
      }
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }
      return {
        registerTable,
        handleEdit,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
```


## useTable

使用组件自带的 **useTable** 可以方便使用表单

下面是一个使用简单表格的示例，

```vue
<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [
        registerTable,
        {
          setLoading,
        },
      ] = useTable({
        api: demoListApi,
        columns: getBasicColumns(),
      });

      function changeLoading() {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      }
      return {
        registerTable,
        changeLoading,
      };
    },
  });
</script>
```

### Usage

用于调用 Table 内部方法及 table 参数配置

```ts
// 表格的props也可以直接注册到useTable内部
const [register, methods] = useTable(props);
```

**register**

register 用于注册 useTable，如果需要使用`useTable`提供的 api，必须将 register 传入组件的 onRegister

```vue
<template>
  <BasicTable @register="register" />
</template>
<script>
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register] = useTable();
      return { register };
    },
  });
</script>
```

### Methods

**setProps**

类型：`(props: Partial<BasicTableProps>) => void`

说明: 用于设置表格参数

**reload**

类型：`(opt?: FetchParams) => Promise<void>`

说明: 刷新表格

**redoHeight**

类型：`() => void`

说明: 重新计算表格高度

**setLoading**

类型：`(loading: boolean) => void`

说明: 设置表格 loading 状态

**getDataSource**

获取表格数据

类型：`<T = Recordable>() => T[]`

说明: 获取表格数据

**getRawDataSource**

获取后端接口原始数据

类型：`<T = Recordable>() => T`

说明: 获取后端接口原始数据

**getColumns**

类型：`(opt?: GetColumnsParams) => BasicColumn[]`

说明: 获取表格数据

**setColumns**

类型：`(columns: BasicColumn[] | string[]) => void`

说明: 设置表头数据

**setTableData**

类型：`<T = Recordable>(values: T[]) => void`

说明: 设置表格数据

**setPagination**

类型：`(info: Partial<PaginationProps>) => void`

说明: 设置分页信息

**deleteSelectRowByKey**

类型：`(key: string) => void`

说明: 根据 key 删除取消选中行

**getSelectRowKeys**

类型：`() => string[]`

说明: 获取选中行的 keys

**getSelectRows**

类型：`<T = Recordable>() => T[]`

说明: 获取选中行的 rows

**clearSelectedRowKeys**

类型：`() => void`

说明: 清空选中行

**setSelectedRowKeys**

类型：`(rowKeys: string[] | number[]) => void`

说明: 设置选中行

**getPaginationRef**

类型：`() => PaginationProps | boolean`

说明: 获取当前分页信息

**getShowPagination**

类型：`() => boolean`

说明: 获取当前是否显示分页

**setShowPagination**

类型：`(show: boolean) => Promise<void>`

说明: 设置当前是否显示分页

**getRowSelection**

类型：`() => TableRowSelection<Recordable>`

说明: 获取勾选框信息

**updateTableData**

类型：`(index: number, key: string, value: any)=>void`

说明: 更新表格数据

**updateTableDataRecord**

类型： `(rowKey: string | number, record: Recordable) => Recordable | void`

说明： 根据唯一的 `rowKey` 更新指定行的数据.可用于不刷新整个表格而局部更新数据

**deleteTableDataRecord**

类型： `(rowKey: string | number | string[] | number[]) => void`

说明： 根据唯一的`rowKey` 动态删除指定行的数据.可用于不刷新整个表格而局部更新数据

**insertTableDataRecord**

类型： `(record: Recordable, index?: number) => Recordable | void`

说明： 可根据传入的 `index` 值决定插入数据行的位置，不传则是顺序插入，可用于不刷新整个表格而局部更新数据

**getForm**

类型：`() => FormActionType`

说明: 如果开启了搜索区域。可以通过该函数获取表单对象函数进行操作

**expandAll**

类型：`() => void`

说明: 展开树形表格

**collapseAll**

类型：`() => void`

说明: 折叠树形表格

## Props

::: tip 温馨提醒

- 除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)
- 注意：`defaultExpandAllRows`、`defaultExpandedRowKeys` 属性在basicTable中不受支持，并且在`antv table` v2.2.0之后也被移除。

:::

| 属性                    | 类型                                               | 默认值  | 可选值 | 说明                                                                                            | 版本 |
| ----------------------- | -------------------------------------------------- | ------- | ------ | ----------------------------------------------------------------------------------------------- | ---- |
| clickToRowSelect        | `boolean`                                          | `true`  | -      | 点击行是否选中 checkbox 或者 radio。需要开启                                                    |      |
| sortFn                  | `(sortInfo: SorterResult<any>) => any`             | -       | -      | 自定义排序方法。见下方全局配置说明                                                              |      |
| filterFn                | `(sortInfo: Partial<Recordable<string[]>>) => any` | -       | -      | 自定义过滤方法。见下方全局配置说明                                                              |      |
| showTableSetting        | `boolean`                                          | `false` | -      | 显示表格设置工具                                                                                |      |
| tableSetting            | `TableSetting`                                     | -       | -      | 表格设置工具配置，见下方 TableSetting                                                           |      |
| striped                 | `boolean`                                          | `true`  | -      | 斑马纹                                                                                          |      |
| inset                   | `boolean`                                          | `false` | -      | 取消表格的默认 padding                                                                          |      |
| autoCreateKey           | `boolean`                                          | `true`  | -      | 是否自动生成 key                                                                                |      |
| showSummary             | `boolean`                                          | `false` | -      | 是否显示合计行                                                                                  |      |
| summaryData             | `any[]`                                            | -       | -      | 自定义合计数据。如果有则显示该数据                                                              |      |
| emptyDataIsShowTable    | `boolean`                                          | `true`  | -      | 在启用搜索表单的前提下，是否在表格没有数据的时候显示表格                                        |      |
| summaryFunc             | `(...arg) => any[]`                                | -       | -      | 计算合计行的方法                                                                                |      |
| ~~canRowDrag~~          | ~~`boolean`~~                                          | ~~`false`~~ | -      | ~~是否可拖拽行排序~~                                                                            |      |
| ~~canColDrag~~          | ~~`boolean`~~                                          | ~~`false`~~ | -      | ~~是否可拖拽列~~                                                                                |      |
| isTreeTable             | `boolean`                                          | `false` | -      | 是否树表                                                                                        |      |
| api                     | `(...arg: any) => Promise<any>`                    | -       | -      | 请求接口，可以直接将`src/api内的函数直接传入`                                                   |      |
| beforeFetch             | `(T)=>T`                                           | -       | -      | 请求之前对参数进行处理                                                                          |      |
| afterFetch              | `(T)=>T`                                           | -       | -      | 请求之后对返回值进行处理                                                                        |      |
| handleSearchInfoFn      | `(T)=>T`                                           | -       | -      | 开启表单后，在请求之前处理搜索条件参数                                                          |      |
| fetchSetting            | `FetchSetting`                                     | -       | -      | 接口请求配置，可以配置请求的字段和响应的字段名，见下方全局配置说明                              |      |
| immediate               | `boolean`                                          | `true`  | -      | 组件加载后是否立即请求接口，在 api 有传的情况下，如果为 false，需要自行使用 reload 加载表格数据 |      |
| searchInfo              | `any`                                              | -       | -      | 额外的请求参数                                                                                  |
| useSearchForm           | `boolean`                                          | false   | -      | 使用搜索表单                                                                                    |      |
| formConfig              | `any`                                              | -       | -      | 表单配置，参考表单组件的 Props                                                                  |      |
| columns                 | `any`                                              | -       | -      | 表单列信息 BasicColumn[]                                                                        |      |
| showIndexColumn         | `boolean`                                          | ture    | -      | 是否显示序号列                                                                                  |      |
| indexColumnProps        | `any`                                              | -       | -      | 序号列配置 BasicColumn                                                                          |      |
| actionColumn            | `any`                                              | -       | -      | 表格右侧操作列配置 BasicColumn                                                                  |      |
| ellipsis                | `boolean`                                          | `true`  | -      | 文本超过宽度是否显示...                                                                         |      |
| canResize               | `boolean`                                          | `true`  | -      | 是否可以自适应高度(如果置于PageWrapper组件内，请勿启用PageWrapper的fixedHeight属性，二者不可同时使用)                                                                              |      |
| clearSelectOnPageChange | `boolean`                                          | false   | -      | 切换页码是否重置勾选状态                                                                        |      |
| resizeHeightOffset      | `number`                                           | 0       | -      | 表格自适应高度计算结果会减去这个值                                                              |      |
| rowSelection            | `any`                                              | -       | -      | 选择列配置                                                                                      |      |
| title                   | `string`                                           | -       | -      | 表格标题                                                                                        |      |
| titleHelpMessage        | `string ｜ string[]`                               | -       | -      | 表格标题右侧温馨提醒                                                                            |      |
| maxHeight               | `number`                                           | -       | -      | 表格最大高度，超出会显示滚动条                                                                  |      |
| dataSource              | `any[]`                                            | -       | -      | 表格数据，非 api 加载情况                                                                       |      |
| bordered                | `boolean`                                          | `false` | -      | 是否显示表格边框                                                                                |      |
| pagination              | `any`                                              | -       | -      | 分页信息配置，为 `false` 不显示分页                                                             |      |
| loading                 | `boolean`                                          | `false` | -      | 表格 loading 状态                                                                               |      |
| scroll                  | `any`                                              | -       | -      | 参考官方文档 scroll                                                                             |      |
| beforeEditSubmit | `({record: Recordable,index: number,key: string \| number,value: any}) => Promise<any>`                                              | -       | -      | 单元格编辑状态提交回调，返回false将阻止单元格提交数据到table。该回调在行编辑模式下无效。   | 2.7.2 |

### TableSetting
```ts
{
  // 是否显示刷新按钮
  redo?: boolean;
  // 是否显示尺寸调整按钮
  size?: boolean;
  // 是否显示字段调整按钮
  setting?: boolean;
  // 是否显示全屏按钮
  fullScreen?: boolean;
}
```


## BasicColumn

除 参考官方 [Column 配置](https://2x.antdv.com/components/table-cn/#Column)外，扩展以下参数

| 属性               | 类型                                                      | 默认值  | 可选值 | 说明                     |
| ------------------ | --------------------------------------------------------- | ------- | ------ | ------------------------ |
| defaultHidden      | `boolean`                                                 | false   | -      | 默认隐藏，可在列配置显示 |
| helpMessage        | `string｜string[]`                                        | -       | -      | 列头右侧帮助文本         |
| edit               | `boolean`                                                 | -       | -      | 是否开启单元格编辑       |
| editRow            | `boolean`                                                 | -       | -      | 是否开启行编辑           |
| editable           | `boolean`                                                 | false   | -      | 是否处于编辑状态         |
| editComponent      | `ComponentType`                                           | `Input` | -      | 编辑组件                 |
| editComponentProps | `any`                                                     | -       | -      | 对应编辑组件的 props     |
| editRule           | `((text: string, record: Recordable) => Promise<string>)` | -       | -      | 对应编辑组件的表单校验   |
| editValueMap       | `(value: any) => string`                                  | -       | -      | 对应单元格值枚举         |
| onEditRow          | `（）=>void`                                               | -       | -      | 触发行编辑               |
| format             | `CellFormat`                                              | -       | -      | 单元格格式化             |
| auth               | `RoleEnum` ｜ `RoleEnum[]` ｜ `string` ｜ `string[]`       | -       | -      | 根据权限编码来控制当前列是否显示    |
| ifShow             | `boolean ｜ ((action: ActionItem) => boolean)`            | -       | -      | 根据业务状态来控制当前列是否显示    |

### EditComponentType

```ts
export type ComponentType =
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'ApiSelect'
  | 'Checkbox'
  | 'Switch'
  | 'DatePicker'  // v2.5.0 以上
  | 'TimePicker'; // v2.5.0 以上
```

### CellFormat

```ts
export type CellFormat =
  | string
  | ((text: string, record: Recordable, index: number) => string | number)
  | Map<string | number, any>;
```

## 事件

::: tip 温馨提醒

除以下事件外，官方文档内的 event 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::

| 事件             | 回调参数                                | 说明                                |
| ---------------- | --------------------------------------- | ----------------------------------- |
| fetch-success    | `Function({items,total})`               | 接口请求成功后触发                  |
| fetch-error      | `Function(error)`                       | 错误信息                            |
| selection-change | `Function({keys，rows})`                | 勾选事件触发                        |
| row-click        | `Function(record, index, event)`        | 行点击触发                          |
| row-dbClick      | `Function(record, index, event)`        | 行双击触发                          |
| row-contextmenu  | `Function(record, index, event)`        | 行右键触发                          |
| row-mouseenter   | `Function(record, index, event)`        | 行移入触发                          |
| row-mouseleave   | `Function(record, index, event)`        | 行移出触发                          |
| edit-end         | `Function({record, index, key, value})` | 单元格编辑完成触发                  |
| edit-cancel      | `Function({record, index, key, value})` | 单元格取消编辑触发                  |
| edit-row-end     | `Function()`                            | 行编辑结束触发                      |
| edit-change      | `Function({column,value,record})`       | 单元格编辑组件的 value 发生变化时触发 |

::: tip edit-change 说明

从版本 `2.4.2` 起，对于 `edit-change` 事件，`record` 中的 `editValueRefs` 装载了当前行的所有编辑组件（如果有的话）的值的 `ref` 对象，可用于处理同一行中的编辑组件的联动。请看下面的例子

:::

```javascript
      function onEditChange({ column, record }) {
        // 当同一行的单价或者数量发生变化时，更新合计金额（三个数据均为当前行编辑组件的值）
        if (column.dataIndex === 'qty' || column.dataIndex === 'price') {
          const { editValueRefs: { total, qty, price } } = record;
          total.value = unref(qty) * unref(price);
        }
      }
```

## Slots

::: tip 温馨提醒

除以下参数外，官方文档内的 slot 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::

| 名称              | 说明             |  版本  |
| ----------------- | ---------------- | -- |
| tableTitle        | 表格顶部左侧区域 |  |
| toolbar           | 表格顶部右侧区域 |  |
| expandedRowRender | 展开行区域       |  |
| headerTop | 表格顶部区域（标题上方）       |  2.6.1 |

## Form-Slots

当开启 form 表单后。以`form-xxxx`为前缀的 slot 会被视为 form 的 slot

xxxx 为 form 组件的 slot。具体参考[form 组件文档](./form.md#Slots)

e.g

```
form-submitBefore
```

## 内置组件（只能用于表格内部）

### TableAction

用于表格右侧操作列渲染

#### Props

| 属性                  | 类型           | 默认值  | 可选值       | 说明                            | 版本  |
| --------------------- | -------------- | ------- | ------------ | ------------------------------- | ----- |
| actions               | `ActionItem[]` | -       | -            | 右侧操作列按钮列表              |       |
| dropDownActions       | `ActionItem[]` | -       | -            | 右侧操作列更多下拉按钮列表      |       |
| stopButtonPropagation | `boolean`      | `false` | `true/false` | 是否阻止操作按钮的click事件冒泡 | 2.5.0 |

**ActionItem**

```ts
export interface ActionItem {
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
  // 是否显示分隔线，v2.0.0+
  divider?: boolean;
  // 根据权限编码来控制当前列是否显示，v2.4.0+
  auth?: RoleEnum | RoleEnum[] | string | string[];
  // 根据业务状态来控制当前列是否显示，v2.4.0+
  ifShow?: boolean | ((action: ActionItem) => boolean);
  // 点击回调
  onClick?: Fn;
  // Tooltip配置，2.5.3以上版本支持，可以配置为string，或者完整的tooltip属性
  tooltip?: string | TooltipProps
}
```
有关TooltipProps的说明，请参考[tooltip](https://2x.antdv.com/components/tooltip-cn#API)

**PopConfirm**
```ts
export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: Fn;
  cancel?: Fn;
  icon?: string;
}
```

### TableImg

用于渲染单元格图片,支持图片预览

#### Props

| 属性       | 类型       | 默认值  | 可选值       | 说明                             | 版本  |
| ---------- | ---------- | ------- | ------------ | -------------------------------- | ----- |
| imgList    | `string[]` | -       | -            | 图片地址列表                     |       |
| size       | `number`   | -       | -            | 图片大小                         |       |
| simpleShow | `boolean`  | `false` | `true/false` | 简单显示模式（只显示第一张图片） | 2.5.0 |
| showBadge  | `boolean`  | `true`  | `true/false` | 简单模式下是否显示计数Badge      | 2.5.0 |
| margin     | `number`   | 4       | -            | 常规模式下的图片间距             | 2.5.0 |
| srcPrefix  | `string`   | -       | -            | 在每一个图片src前插入的内容      | 2.5.0 |

## 全局配置

在[componentsSettings](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts) 可以配置全局参数。用于统一整个项目的风格。可以通过 props 传值覆盖

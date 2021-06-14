# Table 表格

对`antv`的 table 组件进行封装

如果文档内没有，可以尝试在在线示例内寻找

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

所有可调用函数见下方`Methods`说明

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

## useTable

使用组件自带的**useTable**可以方便使用表单

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

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| clickToRowSelect | `boolean` | `true` | - | 点击行是否选中 checkbox 或者 radio。需要开启 |
| sortFn | `(sortInfo: SorterResult<any>) => any` | - | - | 自定义排序方法。见下方全局配置说明 |
| filterFn | `(sortInfo: Partial<Recordable<string[]>>) => any` | - | - | 自定义过滤方法。见下方全局配置说明 |
| showTableSetting | `boolean` | `false` | - | 显示表格设置工具 |
| tableSetting | `TableSetting` | - | - | 表格设置工具配置，见下方 TableSetting |
| striped | `boolean` | `true` | - | 斑马纹 |
| inset | `boolean` | `false` | - | 取消表格的默认 padding |
| autoCreateKey | `boolean` | `true` | - | 是否自动生成 key |
| showSummary | `boolean` | `false` | - | 是否显示合计行 |
| summaryData | `any[]` | - | - | 自定义合计数据。如果有则显示该数据 |
| emptyDataIsShowTable | `boolean` | `true` | - | 在启用搜索表单的前提下，是否在表格没有数据的时候显示表格 |
| summaryFunc | `(...arg) => any[]` | - | - | 计算合计行的方法 |
| canRowDrag | `boolean` | `false` | - | 是否可拖拽行排序 |
| canColDrag | `boolean` | `false` | - | 是否可拖拽列 |
| isTreeTable | `boolean` | `false` | - | 是否树表 |
| api | `(...arg: any) => Promise<any>` | - | - | 请求接口，可以直接将`src/api内的函数直接传入` |
| beforeFetch | `(T)=>T` | - | - | 请求之前对参数进行处理 |
| afterFetch | `(T)=>T` | - | - | 请求之后对返回值进行处理 |
| handleSearchInfoFn | `(T)=>T` | - | - | 开启表单后，在请求之前处理搜索条件参数 |
| fetchSetting | `FetchSetting` | - | - | 接口请求配置，可以配置请求的字段和响应的字段名，见下方全局配置说明 |
| immediate | `boolean` | `true` | - | 组件加载后是否立即请求接口，在 api 有传的情况下，如果为 false，需要自行使用 reload 加载表格数据 |
| searchInfo | `any` | - | - | 额外的请求参数 |
| useSearchForm | `boolean` | false | - | 使用搜索表单 |
| formConfig | `any` | - | - | 表单配置，参考表单组件的 Props |
| columns | `any` | - | - | 表单列信息 BasicColumn[] |
| showIndexColumn | `boolean` | ture | - | 是否显示序号列 |
| indexColumnProps | `any` | - | - | 序号列配置 BasicColumn |
| actionColumn | `any` | - | - | 表格右侧操作列配置 BasicColumn |
| ellipsis | `boolean` | `true` | - | 文本超过宽度是否显示... |
| canResize | `boolean` | `true` | - | 是否可以自适应高度 |
| clearSelectOnPageChange | `boolean` | false | - | 切换页码是否重置勾选状态 |
| resizeHeightOffset | `number` | 0 | - | 表格自适应高度计算结果会减去这个值 |
| rowSelection | `any` | - | - | 选择列配置 |
| title | `string` | - | - | 表格标题 |
| titleHelpMessage | `string ｜ string[]` | - | - | 表格标题右侧温馨提醒 |
| maxHeight | `number` | - | - | 表格最大高度，超出会显示滚动条 |
| dataSource | `any[]` | - | - | 表格数据，非 api 加载情况 |
| bordered | `boolean` | `false` | - | 是否显示表格边框 |
| pagination | `any` | - | - | 分页信息配置，为 `false` 不显示分页 |
| loading | `boolean` | `false` | - | 表格 loading 状态 |
| scroll | `any` | - | - | 参考官方文档 scroll |

## BasicColumn

除 参考官方 [Column 配置](https://2x.antdv.com/components/table-cn/#Column)外，扩展以下参数

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| defaultHidden | `boolean` | false | - | 默认隐藏，可在列配置显示 |
| helpMessage | `string｜string[]` | - | - | 列头右侧帮助文本 |
| edit | `boolean` | - | - | 是否开启单元格编辑 |
| editRow | `boolean` | - | - | 是否开启行编辑 |
| editable | `boolean` | false | - | 是否处于编辑状态 |
| editComponent | `ComponentType` | `Input` | - | 编辑组件 |
| editComponentProps | `any` | - | - | 对应编辑组件的 props |
| editRule | `((text: string, record: Recordable) => Promise<string>)` | - | - | 对应编辑组件的表单校验 |
| editValueMap | `(value: any) => string` | - | - | 对应单元格值枚举 |
| onEditRow | `（）=>void` | - | - | 触发行编辑 |
| format | `CellFormat` | - | - | 单元格格式化 |

### EditComponentType

```ts
export type ComponentType =
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'ApiSelect'
  | 'Checkbox'
  | 'Switch';
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

除以下参数外，官方文档内的 event 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::

| 事件             | 回调参数                               | 说明               |
| ---------------- | -------------------------------------- | ------------------ |
| fetch-success    | `Function({items,total})`              | 接口请求成功后触发 |
| fetch-error      | `Function(error)`                      | 错误信息           |
| selection-change | `Function({keys，rows})`               | 勾选事件触发       |
| row-click        | `Function(record, index, event)`       | 行点击触发         |
| row-dbClick      | `Function(record, index, event)`       | 行双击触发         |
| row-contextmenu  | `Function(record, index, event)`       | 行右键触发         |
| row-mouseenter   | `Function(record, index, event)`       | 行移入触发         |
| row-mouseleave   | `Function(record, index, event)`       | 行移出触发         |
| edit-end         | `Function(record, index, key, value )` | 单元格编辑完成触发 |
| edit-cancel      | `Function(record, index, key, value )` | 单元格取消编辑触发 |
| edit-row-end     | `Function()`                           | 行编辑结束触发     |

## Slots

::: tip 温馨提醒

除以下参数外，官方文档内的 slot 也都支持，具体可以参考 [antv table](https://2x.antdv.com/components/table-cn/#API)

:::

| 名称              | 说明             |
| ----------------- | ---------------- |
| tableTitle        | 表格顶部左侧区域 |
| toolbar           | 表格顶部右侧区域 |
| expandedRowRender | 展开行区域       |

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

| 属性            | 类型           | 默认值 | 可选值 | 说明                       |
| --------------- | -------------- | ------ | ------ | -------------------------- |
| actions         | `ActionItem[]` | -      | -      | 右侧操作列按钮列表         |
| dropDownActions | `ActionItem[]` | -      | -      | 右侧操作列更多下拉按钮列表 |

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

### TableImg

用于渲染单元格图片,支持图片预览

#### Props

| 属性    | 类型       | 默认值 | 可选值 | 说明         |
| ------- | ---------- | ------ | ------ | ------------ |
| imgList | `string[]` | -      | -      | 图片地址列表 |
| size    | `number`   | -      | -      | 图片大小     |

## 全局配置

在[componentsSettings](https://github.com/anncwb/vue-vben-admin/tree/main/src/settings/componentSetting.ts) 可以配置全局参数。用于统一整个项目的风格。可以通过 props 传值覆盖

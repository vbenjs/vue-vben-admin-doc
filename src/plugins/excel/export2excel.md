## 介绍

项目中使用到的是 XLSX，具体文档可以参考[XLSX 文档](https://sheetjs.com/)


## 使用

```tsx
import { defineComponent } from 'compatible-vue';

  import { useDesign } from '@/hooks/core/useDesign';
  import { BasicColumn, BasicTable } from '@/components/table/index';
  import { jsonToSheetXlsx, aoaToSheetXlsx } from '@/components/excel/index';
  import { cloneDeep } from '@/utils/lodashChunk';

  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 80,
    },
    {
      title: '编号',
      dataIndex: 'no',
      width: 80,
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
    },
  ];
  const data: any[] = (() => {
    const arr: any[] = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        name: 'John Brown',
        age: `1${index}`,
        no: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('index');
      const header = columns.map((column) => column.title);
      const arrData = data.map((item) => {
        return Object.keys(item).map((key) => item[key]);
      });

      function jsonToExcel() {
        // 默认Object.keys(data)作为header
        jsonToSheetXlsx({
          data,
          filename: '文件名.xlsx',
        });
      }
      function jsonToExcelAndHeader() {
        jsonToSheetXlsx({
          data,
          header: {
            id: 'ID',
            name: '姓名',
            age: '年龄',
            no: '编号',
            address: '地址',
            beginTime: '开始时间',
            endTime: '结束时间',
          },
          filename: '文件名头部修改.xlsx',
          json2sheetOpts: {
            // 指定顺序
            header: ['name', 'id'],
          },
        });
      }
      function aoaToExcel() {
        // 保证data顺序与header一致
        aoaToSheetXlsx({
          data: arrData,
          header,
          filename: '数组方式导出excel.xlsx',
        });
      }
      return () => {
        return (
          <div class={prefixCls}>
            <BasicTable title="基础表格" columns={columns} dataSource={cloneDeep(data)}>
              <template slot="toolbar">
                <a-button onClick={aoaToExcel}>aoa·ToExcel</a-button>
                <a-button onClick={jsonToExcelAndHeader}>jsonToExcelAndHeader</a-button>
                <a-button onClick={jsonToExcel}>jsonToExcel</a-button>
              </template>
            </BasicTable>
          </div>
        );
      };
    },
  });
```

## 方法


| 方法            | 回调参数                | 返回值 | 说明                      |
| --------------- | ----------------------- | ------ | ------------------------- |
| jsonToSheetXlsx | `Function(JsonToSheet)` |        | json格式数据，导出到excel |
| aoaToSheetXlsx  | `Function(AoAToSheet)`  |        | 数组格式，导出到excel     |



### JsonToSheet类型

| 属性              | 类型            | 默认值               | 说明                                         |
| ----------------- | --------------- | -------------------- | -------------------------------------------- |
| data              | `T[]`           |                      | JSON对象数组                                 |
| header?:          | T;              |                      | 表头 ；未设置则取JSON对象的key作为header     |
| filename?:        | string;         | excel-list.xlsx      | 导出的文件名                                 |
| json2sheetOpts?:  | JSON2SheetOpts; |                      | 调用XLSX.utils.json_to_sheet的可选参数       |
| write2excelOpts?: | WritingOptions; | { bookType: 'xlsx' } | 调用XLSX.writeFile的可选参数，具体参XLSX文档 |


### AoAToSheet类型

| 属性              | 类型            | 默认值               | 说明                         |
| ----------------- | --------------- | -------------------- | ---------------------------- |
| data              | T[][];          |                      | 二维数组                     |
| header?:          | T;              |                      | 表头 ；未设置则没有表头      |
| filename?:        | string;         | excel-list.xlsx      | 导出的文件名                 |
| write2excelOpts?: | WritingOptions; | { bookType: 'xlsx' } | 调用XLSX.writeFile的可选参数 |

## 介绍

项目中使用到的是 XLSX，具体文档可以参考[XLSX 文档](https://sheetjs.com/)


## 使用

```tsx
import { defineComponent, reactive } from 'compatible-vue';
  import { useDesign } from '@/hooks/core/useDesign';

  import { ImportFromExcel, ExcelData } from '@/components/excel/index';
  import { BasicTable, BasicColumn } from '@/components/table/index';

  export default defineComponent({
    setup() {
      const { prefixCls } = useDesign('index');
      const tableState = reactive<{
        columns: BasicColumn[];
        dataSource: any[];
        title: string;
      }>({
        columns: [],
        dataSource: [],
        title: '',
      });

      function loadDataInTable(excelData: ExcelData) {
        console.log(excelData);
        tableState.columns.length = 0;
        for (const header of excelData.header) {
          tableState.columns.push({ title: header, dataIndex: header });
        }
        tableState.title = excelData.meta.sheetName;
        tableState.dataSource = excelData.results;
      }

      // function handleBeforeUpload(file){}
      return () => {
        return (
          <div class={prefixCls}>
            <ImportFromExcel onSuccess={loadDataInTable}>
              <a-button class="m-3">导入Excel</a-button>
            </ImportFromExcel>
            <BasicTable
              title={tableState.title}
              columns={tableState.columns}
              dataSource={tableState.dataSource}
            ></BasicTable>
          </div>
        );
      };
    },
  });
```

## Props

| 属性         | 类型                      | 默认值 | 说明                           |
| ------------ | ------------------------- | ------ | ------------------------------ |
| beforeUpload | `(file: File) => boolean` |        | 选择的文件file，处理数据前调用 |



## 事件

| 事件    | 回调参数              | 返回值 | 说明                          |
| ------- | --------------------- | ------ | ----------------------------- |
| success | `Function(ExcelData)` |        | 导入成功，从excel分离出的数据 |


### ExcelData类型

| 属性     | 类型                   | 默认值 | 说明        |
| -------- | ---------------------- | ------ | ----------- |
| header:  | string[];              |        | table表头   |
| results: | T[];                   |        | table数据   |
| meta:    | { sheetName: string }; |        | table title |

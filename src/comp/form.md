# Form 表单组件

对`antv`的 form 组件进行封装，扩展一些常用的功能


## 基本使用
下面是一个使用简单表单的示例，只有一个输入框

```vue
<template>
  <div class="m-4">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
      />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      defaultValue: '111',
      componentProps: {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      return {
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
      };
    },
  });
</script>


```
## 使用ref调用内部函数

所有可调用函数见下方`Methods`说明

```vue
<template>
  <div class="m-4">
      <BasicForm
        :schemas="schemas"
        ref="formElRef"
        :labelWidth="100"
        @submit="handleSubmit"
        :actionColOptions="{ span: 24 }"
      />
  <div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicForm, FormSchema, FormActionType, FormProps } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  const schemas: FormSchema[] = [
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const formElRef = ref<Nullable<FormActionType>>(null);
      return {
        formElRef,
        schemas,
        setProps(props: FormProps) {
          const formEl = formElRef.value;
          if (!formEl) return;
          formEl.setProps(props);
        },
      };
    },
  });
</script>
```



## useForm

form组件还提供了useForm，方便调用函数内部方法

### 使用示例
```vue

<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>


```


## useForm说明

```ts
//
const [register, methods] = useForm(props);
```

**register**

register 用于注册 useForm，如果需要使用`useForm`提供的 api，必须将 register 传入组件的 onRegister

```vue
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
```

`Methods`见下方说明

## Methods

**getFieldsValue**

类型: `()=>any`

说明: 获取表单值

**setFieldsValue**

类型: `<T>(values: T) => void`

说明: 设置表单字段值

**resetFields**

类型: `()=> Promise<any>`

说明: 重置表单值

**validateFields**

类型: `(nameList?: NamePath[]) => Promise<any>`

说明: 校验指定表单项

**validateFields**

类型: `(nameList?: NamePath[]) => Promise<any>`

说明: 校验表单

**scrollToField**

类型: `(fields?: NamePath[]) => void`

说明: 滚动到对应字段位置


**clearValidate**

类型: `(name?: string | string[]) => void`

说明: 清空校验

**setProps**

::: tip

设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)

:::
类型: `(formProps: Partial<FormProps>) => void`

说明: 设置表单 Props

**removeSchemaByFiled**

类型: `(field: string | string[]) => void`

说明: 根据 field 删除 Schema

**appendSchemaByField**

类型: `(schema: FormSchema, prefixField?: string) => void`

说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后

**updateSchema**

类型: `(data: Partial<FormSchema> | Partial<FormSchema>[]) => void`

说明: 更新表单的 schema

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv form](https://2x.antdv.com/components/form-cn/#Form)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| schemas | `Schema[]` | - | - | 表单配置，见下方 FormSchema 配置 |
| submitOnReset | `boolean` | - | - | 重置时是否提交表单 |
| labelCol | `Partial<ColEx>` | - | - | 整个表单通用LabelCol配置 |
| wrapperCol | `Partial<ColEx>` | - | - | 整个表单通用wrapperCol配置 |
| baseColProps | `Partial<ColEx>` | - | - | 配置所有选子项的 ColProps，不需要逐个配置，子项也可单独配置优先与全局 |
| labelWidth | `number | string` | - | - | 扩展 form 组件，增加 label 宽度，表单内所有组件适用，可以单独在某个项覆盖或者禁用 |
| compact | `boolean` | false | true/false | 紧凑类型表单，减少 margin-bottom |
| size | `string` | default | `'default' | 'small' | 'large'` | 向表单内所有组件传递 size 参数,自定义组件需自行实现 size 接收 |
| disabled | `boolean` | false | true/false | 向表单内所有组件传递 disabled 属性，自定义组件需自行实现 disabled 接收 |
| autoSetPlaceHolder | `boolean` | true | true/false | 自动设置表单内组件的 placeholder，自定义组件需自行实现 |
| rulesMessageJoinLabel | `boolean` | false | true/false | 如果表单项有校验，会自动生成校验信息，该参数控制是否将字段中文名字拼接到自动生成的信息后方 |
| showAdvancedButton | `boolean` | false | true/false | 是否显示收起展开按钮 |
| emptySpan | `number|Partial<ColEx>` | 0 | - | 空白行格,可以是数值或者 col 对象 数 |
| autoAdvancedLine | `number` | 3 | - | 如果 showAdvancedButton 为 true，超过指定行数行默认折叠 |
| showActionButtonGroup | `boolean` | true | true/false | 是否显示操作按钮(重置/提交) |
| actionColOptions | `Partial<ColEx>` | - | - | 操作按钮外层 Col 组件配置，如果开启 showAdvancedButton，则不用设置，具体见下方 actionColOptions |
| showResetButton | `boolean` | true | - | 是否显示重置按钮 |
| resetButtonOptions | `object` |  | - | 重置按钮配置见下方 ActionButtonOption |
| showSubmitButton | `boolean` | true | - | 是否显示提交按钮 |
| submitButtonOptions | `object` |  | - | 确认按钮配置见下方 ActionButtonOption |
| resetFunc | ` () => Promise<void>` |  | - | 自定义重置按钮逻辑`() => Promise<void>;` |
| submitFunc | ` () => Promise<void>` |  | - | 自定义提交按钮逻辑`() => Promise<void>;` |
| fieldMapToTime | `[string, [string, string], string?][]` |  | - | 用于将表单内时间区域的应设成 2 个字段,见下方说明 |

**ColEx**

见[@/components/Form/src/types/index.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Form/src/types/index.ts)

**ActionButtonOption**

[BasicButtonProps](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Button/types.ts)
```ts
export interface ButtonProps extends BasicButtonProps {
  text?: string;
}
```

**fieldMapToTime**

将表单内时间区域的值映射成 2 个字段

如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段

```ts
      useForm({
        fieldMapToTime: [
          // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间于结束时间
          // 'YYYY-MM-DD'为时间格式，参考moment
          ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],
          // 支持多个字段
          ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'],
      ],
    });

    // fieldMapToTime没写的时候表单获取到的值
    {
      datetime: [Date(),Date()]
    }
    //  ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],之后
    {
       datetime: [Date(),Date()],
       startTime: '2020-08-12',
       endTime: '2020-08-15',
    }
```

## FormSchema

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| field | `string` | - | - | 字段名 |
| label | `string` | - | - | 标签名 |
| changeEvent | `string` | - | - | 表单更新事件名称 |
| helpMessage | `string|string[]` | - | - | 标签名右侧温馨提示 |
| helpComponentProps | `HelpComponentProps` | - | - | 标签名右侧温馨提示组件 props,见下方HelpComponentProps |
| labelWidth | `string | number` | - | - | 覆盖统一设置的 labelWidth |
| disabledLabelWidth | `boolean` | false | true/false | 禁用 form 全局设置的 labelWidth,自己手动设置 labelCol 和 wrapperCol |
| component | `string` | - | - | 组件类型，见下方 ComponentType |
| componentProps | `any` | - | - | 所渲染的组件的 props |
| rules | `ValidationRule[]` | - | - | 校验规则,见下方 ValidationRule |
| rulesMessageJoinLabel | `boolean` | false | - | 校验信息是否加入 label |
| itemProps | `any` | - | - | 参考下方 FormItem |
| colProps | `ColEx` | - | - | 参考上方 actionColOptions |
| defaultValue | `object` | - | - | 所渲渲染组件的初始值 |
| render | `(renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string` | - | - | 自定义渲染组件 |
| renderColContent | `(renderCallbackParams: RenderCallbackParams) => VNode | VNode[] | string` | - | - | 自定义渲染组件（需要自行包含 formItem） |
| renderComponentContent | `(renderCallbackParams: RenderCallbackParams) => any` | - | - | 自定义渲染组内部的 slot |
| slot | `string` | - | - | 自定义 slot，渲染组件 |
| colSlot | `string` | - | - | 自定义 slot，渲染组件 （需要自行包含 formItem） |
| show |` boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示,css控制，不会删除dom |
| ifShow |` boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示,js控制，会删除dom |
| dynamicDisabled | `boolean | ((renderCallbackParams: RenderCallbackParams) => boolean) `| - | - | 动态判断当前组件是否禁用 |
| dynamicRules | `boolean | ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判返当前组件你校验规则 |

**RenderCallbackParams**

```ts

export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}
```


**HelpComponentProps**

```ts
export interface HelpComponentProps {
  maxWidth: string;
  // 是否显示序号
  showIndex: boolean;
  // 文本列表
  text: any;
  // 颜色
  color: string;
  // 字体大小
  fontSize: string;
  icon: string;
  absolute: boolean;
  // 定位
  position: any;
}
```

**ComponentType**

schema 内组件的可选类型

```tsx
export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'InputCountDown'
  | 'Select'
  | 'DictSelect'
  | 'SelectOptGroup'
  | 'SelectOption'
  | 'TreeSelect'
  | 'Transfer'
  | 'Radio'
  | 'RadioButton'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  | 'Cascader'
  | 'DatePicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'Switch'
  | 'Render';
```

## 自行添加需要的组件类型

在 `src/components/Form/src/componentMap.ts`内，添加需要的组件，并在上方**ComponentType**添加相应的类型 key

**方式 1**

这种写法适用与适用频率较高的组件

```tsx
componentMap.set('组件名', 组件);

// ComponentType
export type ComponentType = xxxx | 'Key';
```

**方式 2**

使用**useComponentRegister**进行注册

这种写法只能在当前页使用，页面销毁之后会从 componentMap 删除相应的组件

```tsx
import { useComponentRegister } from '@/components/form/index';

import { StrengthMeter } from '@/components/strength-meter/index';

useComponentRegister('StrengthMeter', StrengthMeter);
```

**render**

自定义渲染内容

```vue
 <template>
  <div class="m-4">
      <BasicForm @register="register" @submit="handleSubmit" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Input } from 'ant-design-vue';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
      render: ({ model, field }) => {
        return h(Input, {
          placeholder: '请输入',
          value: model[field],
          onChange: (e: ChangeEvent) => {
            model[field] = e.target.value;
          },
        });
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
      renderComponentContent: () => {
        return {
          suffix: () => 'suffix',
        };
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>

```

**slot**

自定义渲染内容

```vue
 <template>
  <div class="m-4">
      <BasicForm @register="register">
        <input slot="customSlot">
      </BasicForm>
  </div>
</template>
<script lang="ts">
 import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { BasicModal } from '@/components/modal/index';
  export default defineComponent({
    name: 'FormDemo',
    setup(props) {
      const [register] = useForm({
        labelWidth: 100,
        actionColOptions: {
          span: 24,
        },
        schemas: [
          {
          field: 'field1',
          label: '字段1',
          slot:"customSlot"
          }
        ],
      });
      return {
        register
      };
    },
  });
</script>

```

**ifShow/show/dynamicDisabled**

自定义显示/禁用

```vue
<template>
  <div class="m-4">
      <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 8,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [
        register,
        { setProps },
      ] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        setProps,
      };
    },
  });
</script>


```
**ValidationRule**

见[antv form](https://2x.antdv.com/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)



## Slots

| 名称           | 说明         |
| -------------- | ------------ |
| formFooter    | 表单底部区域 |
| formHeader   | 表单顶部区域 |
| advanceBefore | 展开按钮前   |
| resetBefore   | 重置按钮前   |
| submitBefore  | 提交按钮前   |
| submitAfter   | 提交按钮后   |

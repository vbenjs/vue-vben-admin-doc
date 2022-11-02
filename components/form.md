# Form 表单组件

对 `antv` 的 form 组件进行封装，扩展一些常用的功能

> 如果文档内没有，可以尝试在在线示例内寻找

## Usage

### useForm 方式

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
  import { BasicForm, FormSchema } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  const schemas: FormSchema[] = [
    {
      field: 'field',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      defaultValue: '1',
      componentProps: {
        placeholder: '自定义placeholder',
        onChange: (e) => {
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

### template 方式

所有可调用函数见下方 `Methods` 说明

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
  import { BasicForm, FormSchema, FormActionType, FormProps } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';
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

form 组件还提供了 `useForm`，方便调用函数内部方法

### 示例

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

### 参数介绍

```ts
const [register, methods] = useForm(props);
```

**参数 props 内的值可以是 computed 或者 ref 类型**

**register**

register 用于注册 `useForm`，如果需要使用 `useForm` 提供的 api，必须将 register 传入组件的 `onRegister`

```vue
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script>
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register] = useForm();
      return {
        register,
      };
    },
  });
</script>
```

`Methods`见下方说明

### Methods

**getFieldsValue**

类型: `() => Recordable;`

说明: 获取表单值

**setFieldsValue**

类型: `<T>(values: T) => Promise<void>`

说明: 设置表单字段值

**resetFields**

类型: `()=> Promise<any>`

说明: 重置表单值

**validateFields**

类型: `(nameList?: NamePath[]) => Promise<any>`

说明: 校验指定表单项

**validate**

类型: `(nameList?: NamePath[]) => Promise<any>`

说明: 校验整个表单

**submit**

类型: `() => Promise<void>`

说明: 提交表单

**scrollToField**

类型: `(name: NamePath, options?: ScrollOptions) => Promise<void>`

说明: 滚动到对应字段位置

**clearValidate**

类型: `(name?: string | string[]) => Promise<void>`

说明: 清空校验

**setProps**

::: tip

设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)

:::

类型: `(formProps: Partial<FormProps>) => Promise<void>`

说明: 设置表单 Props

**removeSchemaByFiled**

类型: `(field: string | string[]) => Promise<void>`

说明: 根据 field 删除 Schema

**appendSchemaByField**

类型: `( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) => Promise<void>`

说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后,当 first = true 时插入到第一个位置

**updateSchema**

类型: `(data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>`

说明: 更新表单的 schema, 只更新函数所传的参数

e.g

```ts
updateSchema({ field: 'filed', componentProps: { disabled: true } });
updateSchema([
  { field: 'filed', componentProps: { disabled: true } },
  { field: 'filed1', componentProps: { disabled: false } },
]);
```

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv form](https://2x.antdv.com/components/form-cn/#Form)

:::

| 属性 | 类型 | 默认值 | 可选值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | -- |
| schemas | `Schema[]` | - | - | 表单配置，见下方 `FormSchema` 配置 |  |
| submitOnReset | `boolean` | `false` | - | 重置时是否提交表单 |  |
| labelCol | `Partial<ColEx>` | - | - | 整个表单通用 LabelCol 配置 |  |
| wrapperCol | `Partial<ColEx>` | - | - | 整个表单通用 wrapperCol 配置 |  |
| baseColProps | `Partial<ColEx>` | - | - | 配置所有选子项的 ColProps，不需要逐个配置，子项也可单独配置优先与全局 |  |
| baseRowStyle | `object` | - | - | 配置所有 Row 的 style 样式 |  |
| labelWidth | `number , string` | - | - | 扩展 form 组件，增加 label 宽度，表单内所有组件适用，可以单独在某个项覆盖或者禁用 |  |
| labelAlign | `string` | - | `left`,`right` | label 布局 |  |
| mergeDynamicData | `object` | - | - | 额外传递到子组件的参数 values |  |
| autoFocusFirstItem | `boolean` | `false` | - | 是否聚焦第一个输入框，只在第一个表单项为 input 的时候作用 |  |
| compact | `boolean` | `false` | `true/false` | 紧凑类型表单，减少 margin-bottom |  |
| size | `string` | `default` | `'default' , 'small' , 'large'` | 向表单内所有组件传递 size 参数,自定义组件需自行实现 size 接收 |  |
| disabled | `boolean` | `false` | `true/false` | 向表单内所有组件传递 disabled 属性，自定义组件需自行实现 disabled 接收 |  |
| autoSetPlaceHolder | `boolean` | `true` | ` true/false` | 自动设置表单内组件的 placeholder，自定义组件需自行实现 |  |
| autoSubmitOnEnter | `boolean` | `false` | ` true/false` | 在input中输入时按回车自动提交 | 2.4.0  |
| rulesMessageJoinLabel | `boolean` | `false` | `true/false` | 如果表单项有校验，会自动生成校验信息，该参数控制是否将字段中文名字拼接到自动生成的信息后方 |  |
| showAdvancedButton | `boolean` | `false` | `true/false` | 是否显示收起展开按钮 |  |
| emptySpan | `number , Partial<ColEx>` | 0 | - | 空白行格,可以是数值或者 col 对象 数 |  |
| autoAdvancedLine | `number` | 3 | - | 如果 showAdvancedButton 为 true，超过指定行数行默认折叠 |  |
| alwaysShowLines  | `number` | 1 | - | 折叠时始终保持显示的行数  | 2.7.1 |
| showActionButtonGroup | `boolean` | `true` | `true/false` | 是否显示操作按钮(重置/提交) | |
| actionColOptions | `Partial<ColEx>` | - | - | 操作按钮外层 Col 组件配置，如果开启 showAdvancedButton，则不用设置，具体见下方 actionColOptions |  |
| showResetButton | `boolean` | `true` | - | 是否显示重置按钮 |  |
| resetButtonOptions | `object` |  | - | 重置按钮配置见下方 ActionButtonOption |  |
| showSubmitButton | `boolean` | `true` | - | 是否显示提交按钮 |  |
| submitButtonOptions | `object` |  | - | 确认按钮配置见下方 ActionButtonOption |  |
| resetFunc | ` () => Promise<void>` |  | - | 自定义重置按钮逻辑`() => Promise<void>;` |  |
| submitFunc | ` () => Promise<void>` |  | - | 自定义提交按钮逻辑`() => Promise<void>;` |  |
| fieldMapToTime | `[string, [string, string], string?][]` |  | - | 用于将表单内时间区域的应设成 2 个字段,见下方说明 |  |

### ColEx

见[src/components/Form/src/types/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Form/src/types/index.ts)

### ActionButtonOption

[BasicButtonProps](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Button/types.ts)

```ts
export interface ButtonProps extends BasicButtonProps {
  text?: string;
}
```

### fieldMapToTime

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

### FormSchema

| 属性 | 类型 | 默认值 | 可选值 | 说明 |
| --- | --- | --- | --- | --- |
| field | `string` | - | - | 字段名 |
| label | `string` | - | - | 标签名 |
| subLabel | `string` | - | - | 二级标签名灰色 |
| suffix | `string , number , ((values: RenderCallbackParams) => string / number);` | - | - | 组件后面的内容 |
| changeEvent | `string` | - | - | 表单更新事件名称 |
| helpMessage | `string , string[]` | - | - | 标签名右侧温馨提示 |
| helpComponentProps | `HelpComponentProps` | - | - | 标签名右侧温馨提示组件 props,见下方 HelpComponentProps |
| labelWidth | `string , number` | - | - | 覆盖统一设置的 labelWidth |
| disabledLabelWidth | `boolean` | false | true/false | 禁用 form 全局设置的 labelWidth,自己手动设置 labelCol 和 wrapperCol |
| component | `string` | - | - | 组件类型，见下方 ComponentType |
| componentProps | `any,()=>{}` | - | - | 所渲染的组件的 props |
| rules | `ValidationRule[]` | - | - | 校验规则,见下方 ValidationRule |
| required | `boolean` | - | - | 简化 rules 配置，为 true 则转化成 [{required:true}]。`2.4.0`之前的版本只支持string类型的值 |
| rulesMessageJoinLabel | `boolean` | false | - | 校验信息是否加入 label |
| itemProps | `any` | - | - | 参考下方 FormItem |
| colProps | `ColEx` | - | - | 参考上方 actionColOptions |
| defaultValue | `object` | - | - | 所渲渲染组件的初始值 |
| render | `(renderCallbackParams: RenderCallbackParams) => VNode / VNode[] / string` | - | - | 自定义渲染组件 |
| renderColContent | `(renderCallbackParams: RenderCallbackParams) => VNode / VNode[] / string` | - | - | 自定义渲染组件（需要自行包含 formItem） |
| renderComponentContent | `(renderCallbackParams: RenderCallbackParams) => any / string` | - | - | 自定义渲染组内部的 slot |
| slot | `string` | - | - | 自定义 slot，渲染组件 |
| colSlot | `string` | - | - | 自定义 slot，渲染组件 （需要自行包含 formItem） |
| show | ` boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示，css 控制，不会删除 dom |
| ifShow | ` boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判断当前组件是否显示，js 控制，会删除 dom |
| dynamicDisabled | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean) ` | - | - | 动态判断当前组件是否禁用 |
| dynamicRules | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)` | - | - | 动态判返当前组件你校验规则 |

**RenderCallbackParams**

```ts
export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}
```

**componentProps**

- 当值为对象类型时,该对象将作为`component`所对应组件的的 props 传入组件

- 当值为一个函数时候

参数有 4 个

`schema`: 表单的整个 schemas

`formActionType`: 操作表单的函数。与 useForm 返回的操作函数一致

`formModel`: 表单的双向绑定对象，这个值是响应式的。所以可以方便处理很多操作

`tableAction`: 操作表格的函数，与 useTable 返回的操作函数一致。注意该参数只在表格内开启搜索表单的时候有值，其余情况为`null`,

```tsx
{
  // 简单例子，值改变的时候操作表格或者修改表单内其他元素的值
  component:'Input',
  componentProps: ({ schema, tableAction, formActionType, formModel }) => {
    return {
      // xxxx props
      onChange:(e)=>{
        const {reload}=tableAction
        reload()
        // or
        formModel.xxx='123'
      }
    };
  };
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
  | 'ApiSelect'
  | 'TreeSelect'
  | 'RadioButtonGroup'
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
  | 'StrengthMeter'
  | 'Upload'
  | 'IconPicker'
  | 'Render'
  | 'Slider'
  | 'Rate'
  | 'Divider';  // v2.7.2新增
```
### Divider schema说明
`Divider`类型用于在`schemas`中占位，将会渲染成一个分割线（始终占一整行的版面），可以用于较长表单的版面分隔。请只将Divider类型的schema当作一个分割线，而不是一个常规的表单字段。
- **`Divider`仅在`showAdvancedButton`为false时才会显示**（也就是说如果启用了表单收起和展开功能，`Divider`将不会显示）
- `Divider` 使用`schema`中的`label`以及`helpMessage`来渲染分割线中的提示内容
- `Divider` 可以使用`componentProps`来设置除`type`之外的props
- `Divider` 不会渲染`AFormItem`，因此`schema`中除`label`、`componentProps`、`helpMessage`、`helpComponentProps`以外的属性不会被用到

## 自行添加需要的组件类型

在 `src/components/Form/src/componentMap.ts` 内，添加需要的组件，并在上方 **ComponentType** 添加相应的类型 key

### 方式 1

这种写法适用与适用频率较高的组件

```tsx
componentMap.set('componentName', 组件);

// ComponentType
export type ComponentType = xxxx | 'componentName';
```

### 方式 2

使用 **useComponentRegister** 进行注册

这种写法只能在当前页使用，页面销毁之后会从 componentMap 删除相应的组件

```tsx
import { useComponentRegister } from '@/components/form/index';

import { StrengthMeter } from '@/components/strength-meter/index';

useComponentRegister('StrengthMeter', StrengthMeter);
```

::: tip 提示

方式 2 出现的原因是为了减少打包体积，如果某个组件体积很大，用方式 1 的话可能会使首屏体积增加

:::

### render

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

### slot

自定义渲染内容

::: tip 提示

使用插槽自定义表单域时，请注意antdv有关FormItem的[相关说明](https://2x.antdv.com/components/form-cn#API)。

:::

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register">
      <template #customSlot="{ model, field }">
        <a-input v-model:value="model[field]" />
      </template>
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
            slot: 'customSlot',
          },
        ],
      });
      return {
        register,
      };
    },
  });
</script>
```

### ifShow/show/dynamicDisabled

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
        setProps,
      };
    },
  });
</script>
```

---

见 [antv form](https://2x.antdv.com/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)

## Slots

| 名称          | 说明         |
| ------------- | ------------ |
| formFooter    | 表单底部区域 |
| formHeader    | 表单顶部区域 |
| resetBefore   | 重置按钮前   |
| submitBefore  | 提交按钮前   |
| advanceBefore | 展开按钮前   |
| advanceAfter  | 展开按钮后   |

## ApiSelect

远程下拉加载组件，该组件可以用于学习参考如何自定义组件集成到 Form 组件内，将自定义组件交由 Form 去管理

### Usage

```ts
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'ApiSelect',
    label: '字段',
  },
];
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| numberToString | `boolean` | `false` | 是否将`number`值转化为`string` |
| api | `()=>Promise<{ label: string; value: string; disabled?: boolean }[]>` | - | 数据接口，接受一个 Promise 对象 |
| params | `object` | - | 接口参数。此属性改变时会自动重新加载接口数据 |
| resultField | `string` | - | 接口返回的字段，如果接口返回数组，可以不填。支持`x.x.x`格式 |
| labelField | `string` | `label` | 下拉数组项内`label`显示文本的字段，支持`x.x.x`格式 |
| valueField | `string` | `value` | 下拉数组项内`value`实际值的字段，支持`x.x.x`格式 |
| immediate | `boolean` | `true` | 是否立即请求接口，否则将在第一次点击时候触发请求 |


## ApiTreeSelect

远程下拉树加载组件，和`ApiSelect`类似，2.6.1以上版本


### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| api | `()=>Promise<{ label: string; value: string; children?: any[] }[]>` | - | 数据接口，接受一个 Promise 对象 |
| params | `object` | - | 接口参数。此属性改变时会自动重新加载接口数据 |
| resultField | `string` | - | 接口返回的字段，如果接口返回数组，可以不填。支持`x.x.x`格式 |
| immediate | `boolean` | `true` | 是否立即请求接口。 |

## RadioButtonGroup

Radio Button 风格的选择按钮

### Usage

```ts
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'RadioButtonGroup',
    label: '字段',
  },
];
```

### Props

| 属性    | 类型                                                     | 默认值 | 说明     |
| ------- | -------------------------------------------------------- | ------ | -------- |
| options | `{ label: string; value: string; disabled?: boolean }[]` | -      | 数据字段 |

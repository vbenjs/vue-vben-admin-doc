## 说明

对`antv`的 form 组件进行封装，扩展一些常用的功能

代码路径`@/components/form`

::: warning

antv 2.x 版本对 form 进行了重构，后续可能会有破坏性改动。我会尽量兼容现在的写法

:::

## 使用

使用组件自带的**useForm**可以方便使用表单

下面是一个使用简单表单的示例，只有一个输入框

```tsx
import { defineComponent } from 'compatible-vue';
import { BasicForm, useForm } from '@/components/form/index';
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
          component: 'Input',
          colProps: {
            span: 8,
          },
        },
      ],
    });
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

## useForm

用于调用 form 内部方法

```ts
//
const [register, methods] = useForm(props);
```

**register**

register 用于注册 useForm，如果需要使用`useForm`提供的 api，必须将 register 传入组件的 onRegister

```tsx
import { BasicForm, useForm } from '@/components/form/index';

export default defineComponent({
  setup() {
    const [register] = useForm();
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

### methods

**setFieldsValue**

设置表单字段值

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { setFieldsValue }] = useForm();

    onMounted(() => {
      setFieldsValue({
        filed1: 'val1',
        filed2: 'va2',
      });
    });

    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**resetFields**

重置表单字段值

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { resetFields }] = useForm();

    onMounted(() => {
      resetFields();
    });
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**validateFieldsAndScroll**

表单校验并滚动到最近的错误位置

```tsx
export default defineComponent({
  setup() {
    const [register, { validateFieldsAndScroll }] = useForm();
    async function validForm() {
      const { err, values } = await validateFieldsAndScroll();
      // err为null代表校验通过
    }
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**validateFields**

表单校验

```tsx
export default defineComponent({
  setup() {
    const [register, { validateFields }] = useForm();
    async function validForm() {
      const { err, values } = await validateFields();
    }
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**getFieldsValue**

获取表单值

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { getFieldsValue }] = useForm();
    onMounted(() => {
      console.log(getFieldsValue());
    });
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**setProps**

::: tip

设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)

:::

设置表单 props

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { setProps }] = useForm();
    onMounted(() => {
      setProps({
        size: 'small',
      });
    });
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**removeSchemaByFiled**

根据 field 删除 schame

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { removeSchemaByFiled }] = useForm();
    onMounted(() => {
      removeSchemaByFiled('field');
      removeSchemaByFiled(['field1', 'field2']);
    });
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**appendSchemaByField**

插入到指定 filed 后面，如果没传指定 field，则插入到最后

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { appendSchemaByField }] = useForm();
    onMounted(() => {
      appendSchemaByField({
        field: 'fieldNew',
        // 其他schemaItem配置
      });
      // 插入到field1字段后面
      appendSchemaByField(
        {
          field: 'fieldNew',
          // 其他schemaItem配置
        },
        'field1'
      );
    });
    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

**updateSchema**

更新表单的 schema

```tsx
import { onMounted } from 'compatible-vue';
export default defineComponent({
  setup() {
    const [register, { updateSchema }] = useForm();

    onMounted(() => {
      // 修改单个
      updateSchema({
        // 字段名必填
        field: 'field1',
        // 需要修改的其他属性
        // ...
        componentProps: {
          options: [],
        },
      });
      // 修改多个
      updateSchema([
        {
          // 字段名必填
          field: 'field1',
          // 需要修改的其他属性
          // ...
          componentProps: {
            options: [],
          },
        },
        {
          // 字段名必填
          field: 'field2',
          // 需要修改的其他属性
          // ...
          componentProps: {
            options: [],
          },
        },
      ]);
    });

    return () => <BasicForm onRegister={register}></BasicForm>;
  },
});
```

## Props

::: tip 温馨提醒

除以下参数外，官方文档内的 props 也都支持，具体可以参考 [antv form](https://www.antdv.com/components/form-cn/#API)

:::

| 属性                  | 类型            | 默认值  | 可选值                          | 说明                                                                                            |
| --------------------- | --------------- | ------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| schemas               | `Schema[]`      | -       | -                               | 表单配置，见下方 schema 配置                                                                    |
| baseColProps          | `object`        | -       | -                               | 配置所有选子项的 ColProps，不需要逐个配置，子项也可单独配置优先与全局                           |
| labelWidth            | number          | -       | -                               | 扩展 form 组件，增加 label 宽度，表单内所有组件适用，可以单独在某个项覆盖或者禁用               |
| compact               | boolean         | false   | true/false                      | 紧凑类型表单，减少 margin-bottom                                                                |
| size                  | string          | default | `'default' | 'small' | 'large'` | 向表单内所有组件传递 size 参数,自定义组件需自行实现 size 接收                                   |
| disabled              | boolean         | false   | true/false                      | 向表单内所有组件传递 disabled 属性，自定义组件需自行实现 disabled 接收                          |
| autoSetPlaceHolder    | boolean         | true    | true/false                      | 自动设置表单内组件的 placeholder，自定义组件需自行实现                                          |
| rulesMessageJoinLabel | boolean         | false   | true/false                      | 如果表单项有校验，会自动生成校验信息，该参数控制是否将字段中文名字拼接到自动生成的信息后方      |
| showAdvancedButton    | boolean         | false   | true/false                      | 是否显示收起展开按钮                                                                            |
| emptySpan             | `number|object` | 0       | -                               | 空白行格,可以是数值或者 col 对象 数                                                             |
| autoAdvancedLine      | number          | 3       | -                               | 如果 showAdvancedButton 为 true，超过指定行数行默认折叠                                         |
| showActionButtonGroup | boolean         | true    | true/false                      | 是否显示操作按钮(重置/提交)                                                                     |
| actionColOptions      | object          | -       | -                               | 操作按钮外层 Col 组件配置，如果开启 showAdvancedButton，则不用设置，具体见下方 actionColOptions |
| showResetButton       | boolean         | true    | -                               | 是否显示重置按钮                                                                                |
| resetButtonOptions    | object          |         | -                               | 重置按钮配置见下方 ActionButtonOption                                                           |
| showSubmitButton      | boolean         | true    | -                               | 是否显示提交按钮                                                                                |
| submitButtonOptions   | object          |         | -                               | 确认按钮配置见下方 ActionButtonOption                                                           |
| resetFunc             | function        |         | -                               | 自定义重置按钮逻辑`() => Promise<void>;`                                                        |
| submitFunc            | function        |         | -                               | 自定义提交按钮逻辑`() => Promise<void>;`                                                        |
| fieldMapToTime        | Array           |         | -                               | 用于将表单内时间区域的应设成 2 个字段,见下方说明                                                |

**actionColOptions**

在[antv Col](https://www.antdv.com/components/grid-cn/#Col)组件上扩展

```tsx
export interface ColEx extends Col {
  // style样式
  style: object;
}
```

**ActionButtonOption**

在 [antv Button](https://www.antdv.com/components/button-cn/#API)组件的基础上扩展

```tsx
export interface ActionButtonOption extends Button {
  // 按钮文本
  text?: string;
  // 按钮事件
  on?: ComponentOn;
}
```

**fieldMapToTime**

将表单内时间区域的值映射成 2 个字段

如果表单内有时间区间组件，获取到的值是一个数组，但是往往我们传递到后台需要是 2 个字段

```tsx
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

## Schema

| 属性                   | 类型              | 默认值 | 可选值     | 说明                                                                |
| ---------------------- | ----------------- | ------ | ---------- | ------------------------------------------------------------------- |
| field                  | string            | -      | -          | 字段名                                                              |
| label                  | string            | -      | -          | 标签名                                                              |
| helpMessage            | `string|string[]` | -      | -          | 标签名右侧温馨提示                                                  |
| helpComponentProps     | string            | -      | -          | 标签名右侧温馨提示组件props                                         |
| labelWidth             | number            | -      | -          | 覆盖统一设置的 labelWidth                                           |
| disabledLabelWidth     | boolean           | false  | true/false | 禁用 form 全局设置的 labelWidth,自己手动设置 labelCol 和 wrapperCol |
| component              | string            | -      | -          | 组件类型，见下方 ComponentType                                      |
| componentProps         | object            | -      | -          | 所渲染的组件的 props                                                |
| componentOn            | object            | -      | -          | 所渲染的组件的事件 ，类似 jsx                                       |
| rules                  | rules[]           | -      | -          | 校验规则,见下方 Rule                                                |
| rulesMessageJoinLabel  | boolean           | false  | -          | 校验信息是否加入 label                                              |
| itemProps              | object            | -      | -          | 参考下方 FormItem                                                   |
| colProps               | object            | -      | -          | 参考上方 actionColOptions                                           |
| defaultValue           | object            | -      | -          | 所渲渲染组件的初始值                                                |
| render                 | function          | -      | -          | 自定义渲染组件                                                      |
| renderColContent       | function          | -      | -          | 自定义渲染组件（需要自行包含 formItem）                             |
| renderComponentContent | function          | -      | -          | 自定义渲染组内部的 slot                                             |
| slot                   | string            | -      | -          | 自定义 slot，渲染组件                                               |
| colSlot                | string            | -      | -          | 自定义 slot，渲染组件 （需要自行包含 formItem）                     |
| show                   | boolean/function  | -      | -          | 动态判断当前组件是否显示                                            |
| dynamicDisabled        | boolean/function  | -      | -          | 动态判断当前组件是否禁用                                            |
| dynamicRules           | boolean/function  | -      | -          | 动态判返当前组件你校验规则                                          |

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
  | 'ImageUpload'
  | 'Switch'
  | 'Render';
```

## 自行添加需要的组件类型

在 `src/components/form/src/componentMap.ts`内，添加需要的组件，并在上方**ComponentType**添加相应的类型 key

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

```tsx
 import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/form/index';
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
          // 该字段将渲染成input
          {
          field: 'field1',
          label: '字段1',
          render:({
            // 表单schema
            schema;
            // 实时表单值
            values;
            // 表单对象
            form;
          })=>{
            return <input/>
          }
          }
        ],
      });
      return () => (
       <BasicForm onRegister={register}></BasicForm>
      );
    },
  });
```

**slot**

自定义渲染内容

```tsx
 import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/form/index';
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
      return () => (
       <BasicForm onRegister={register}>
          <input slot="customSlot">
       </BasicForm>
      );
    },
  });
```

**show/dynamicDisabled**

自定义显示/禁用

```tsx
 import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/form/index';
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
          component:"Input",
          show: ({
            // 表单schema
            schema;
            // 实时表单值
            values;
            // 表单对象
            form;
            })=>{
              // 只有字段2为1才显示
              return values.field2==='1'
            }
          },
          {
          field: 'field2',
          label: '字段2',
          component:"Input",
          dynamicDisabled:({values})=>{
            // 只有字段1为1才禁用
            return values.field1==='1'
          }
          }
        ],
      });
      return () => (
       <BasicForm onRegister={register}>
          <input slot="customSlot">
       </BasicForm>
      );
    },
  });
```

**dynamicRules**

自定义规则校验

```tsx
 import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/form/index';
  import { BasicModal } from '@/components/modal/index';
  export default defineComponent({
    name: 'FormDemo',
    setup(props) {
      const [register] = useForm({
        labelWidth: 100,
        schemas: [
          {
          field: 'field1',
          label: '字段1',
          component:"Input",
          },
          {
          field: 'field2',
          label: '字段2',
          component:"Input",
          dynamicRules:({values})=>{
            return values.field==='1'?[{required:true,'字段为1时必填'}]:[]
          }
          }
        ],
      });
      return () => (
       <BasicForm onRegister={register}>
          <input slot="customSlot">
       </BasicForm>
      );
    },
  });
```

**Rule**

参考官方表单校验规则

```ts
declare interface ValidationRule {
  /**
   * validation error message
   * @type string
   */
  message?: string;

  /**
   * built-in validation type, available options: https://github.com/yiminghe/async-validator#type
   * @default 'string'
   * @type string
   */
  type?: string;

  /**
   * indicates whether field is required
   * @default false
   * @type boolean
   */
  required?: boolean;

  /**
   * treat required fields that only contain whitespace as errors
   * @default false
   * @type boolean
   */
  whitespace?: boolean;

  /**
   * validate the exact length of a field
   * @type number
   */
  len?: number;

  /**
   * validate the min length of a field
   * @type number
   */
  min?: number;

  /**
   * validate the max length of a field
   * @type number
   */
  max?: number;

  /**
   * validate the value from a list of possible values
   * @type string | string[]
   */
  enum?: string | string[];

  /**
   * validate from a regular expression
   * @type boolean
   */
  pattern?: RegExp;

  /**
   * transform a value before validation
   * @type Function
   */
  transform?: (value: any) => any;

  /**
   * custom validate function (Note: callback must be called)
   * @type Function
   */
  validator?: (rule: any, value: any, callback: Function) => any;
}
```

**FormItem**

参考官方 formItem 配置

```ts
export interface FormItem {
  /// 以下为默认配置
  /**
   * Used with label, whether to display : after label text.
   * @default true
   * @type boolean
   */
  colon: boolean;

  /**
   * The extra prompt message. It is similar to help. Usage example: to display error message and prompt message at the same time.
   * @type any (string | slot)
   */
  extra: any;

  /**
   * Used with validateStatus, this option specifies the validation status icon. Recommended to be used only with Input.
   * @default false
   * @type boolean
   */
  hasFeedback: boolean;

  /**
   * The prompt message. If not provided, the prompt message will be generated by the validation rule.
   * @type any (string | slot)
   */
  help: any;

  /**
   * Label test
   * @type any (string | slot)
   */
  label: any;

  /**
   * The layout of label. You can set span offset to something like {span: 3, offset: 12} or sm: {span: 3, offset: 12} same as with <Col>
   * @type Col
   */
  labelCol: Partial<ColEx>;

  /**
   * Whether provided or not, it will be generated by the validation rule.
   * @default false
   * @type boolean
   */
  required: boolean;

  /**
   * The validation status. If not provided, it will be generated by validation rule. options: 'success' 'warning' 'error' 'validating'
   * @type string
   */
  validateStatus: '' | 'success' | 'warning' | 'error' | 'validating';

  /**
   * The layout for input controls, same as labelCol
   * @type Col
   */
  wrapperCol: Partial<ColEx>;
  labelAlign: 'left' | 'right';
  selfUpdate: boolean;
  htmlFor: string;
}
```

## slots

| 名称           | 说明         |
| -------------- | ------------ |
| form-footer    | 表单底部区域 |
| form-header    | 表单顶部区域 |
| advance-before | 展开按钮前   |
| reset-before   | 重置按钮前   |
| submit-before  | 提交按钮前   |
| submit-after   | 提交按钮后   |

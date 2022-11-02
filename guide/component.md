# 组件注册

## 按需引入

项目目前的组件注册机制是按需注册，是在需要用到的页面才引入。

```vue
<template>
  <Menu>
    <SubMenu></SubMenu>
  <Menu>

  <menu>
    <sub-menu></sub-menu>
  <menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default defineComponent({
  components: {
    Menu: Menu,
    SubMenu: Menu.SubMenu
  },
})
</script>
```

### tsx 文件注册

**tsx 文件内不能使用全局注册组件**

```jsx
import { Menu } from 'ant-design-vue';

export default defineComponent({
  setup() {
    return () => (
      <Menu>
        <Menu.SubMenu></Menu.SubMenu>
      </Menu>
    );
  },
});
```

## 全局注册

如果不习惯按需引入方式，可以进行全局注册。全局注册也分两种方式

### 全局按需注册

只注册需要的组件

代码地址：[src/components/registerGlobComp.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/registerGlobComp.ts)

```ts
import {
  // Need
  Button as AntButton,
  Optional
  Select,
  Alert,
  Checkbox,
  DatePicker,
  Radio,
  Switch,
  Card,
  List,
  Tabs,
  Descriptions,
  Tree,
  Table,
  Divider,
  Modal,
  Drawer,
  Dropdown,
  Tag,
  Tooltip,
  Badge,
  Popover,
  Upload,
  Transfer,
  Steps,
  PageHeader,
  Result,
  Empty,
  Avatar,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Row,
  Col,
  Spin,
} from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app
    .use(Select)
    .use(Alert)
    .use(Breadcrumb)
    .use(Checkbox)
    .use(DatePicker)
    .use(Radio)
    .use(Switch)
    .use(Card)
    .use(List)
    .use(Descriptions)
    .use(Tree)
    .use(Table)
    .use(Divider)
    .use(Modal)
    .use(Drawer)
    .use(Dropdown)
    .use(Tag)
    .use(Tooltip)
    .use(Badge)
    .use(Popover)
    .use(Upload)
    .use(Transfer)
    .use(Steps)
    .use(PageHeader)
    .use(Result)
    .use(Empty)
    .use(Avatar)
    .use(Menu)
    .use(Tabs)
    .use(Form)
    .use(Input)
    .use(Row)
    .use(Col)
    .use(Spin);
}
```

### 全量注册

- 在`main.ts`内

```ts
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
const app = createApp(App);
app.use(Antd);
```

- 删除以下代码

```ts
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}
```

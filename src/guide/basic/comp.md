# 组件注册

项目目前的组件注册机制是按需注册。是在需要用到的页面才引入。

### 注册全局组件

默认是注释的，如果你想全局注册组件，可以在这里打开注释

`2.0.0-rc15+`

代码地址：[/@/components/registerGlobComp.ts](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/registerGlobComp.ts)

```ts
import Icon from './Icon/index';
import { Button } from './Button';
import {
  // Need
  Button as AntButton,

  // Optional
  // Select,
  // Alert,
  // Checkbox,
  // DatePicker,
  // Radio,
  // Switch,
  // Card,
  // List,
  // Tabs,
  // Descriptions,
  // Tree,
  // Table,
  // Divider,
  // Modal,
  // Drawer,
  // Dropdown,
  // Tag,
  // Tooltip,
  // Badge,
  // Popover,
  // Upload,
  // Transfer,
  // Steps,
  // PageHeader,
  // Result,
  // Empty,
  // Avatar,
  // Menu,
  // Breadcrumb,
  // Form,
  // Input,
  // Row,
  // Col,
  // Spin,
} from 'ant-design-vue';

import { App } from 'vue';

const compList = [Icon, Button, AntButton.Group];

export function registerGlobComp(app: App) {
  compList.forEach((comp: any) => {
    app.component(comp.name, comp);
  });

  // Optional
  // If you need to customize global components, you can write here
  // If you don’t need it, you can delete it
  // app
  //   .use(Select)
  //   .use(Alert)
  //   .use(Breadcrumb)
  //   .use(Checkbox)
  //   .use(DatePicker)
  //   .use(Radio)
  //   .use(Switch)
  //   .use(Card)
  //   .use(List)
  //   .use(Descriptions)
  //   .use(Tree)
  //   .use(Table)
  //   .use(Divider)
  //   .use(Modal)
  //   .use(Drawer)
  //   .use(Dropdown)
  //   .use(Tag)
  //   .use(Tooltip)
  //   .use(Badge)
  //   .use(Popover)
  //   .use(Upload)
  //   .use(Transfer)
  //   .use(Steps)
  //   .use(PageHeader)
  //   .use(Result)
  //   .use(Empty)
  //   .use(Avatar)
  //   .use(Menu)
  //   .use(Tabs)
  //   .use(Form)
  //   .use(Input)
  //   .use(Row)
  //   .use(Col)
  //   .use(Spin);
}
```

## 局部注册

### Vue 文件注册

**注意这里组件注册是 components 的 key 值**

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
    // 注意 部分函数式组件没有name字段,需要取displayName字段
    [Menu.name]: Menu,
    [Menu.SubMenu.name]: Menu.SubMenu
  },
})
</script>
```

### tsx 文件注册

**tsx 文件内不能使用全局注册组件。必须这样使用**

```tsx
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

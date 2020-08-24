# 组件国际化

ant-design-vue 的组件国际化可以在 `src/setup/main/App.vue`内配置

```tsx
import { defineComponent } from 'compatible-vue';

import { ConfigProvider } from 'ant-design-vue';

import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

//  moment国际化
moment.locale('zh-cn');
export default defineComponent({
  name: 'App',
  setup(_, { root }) {
    return () => {
      return (
        <div id="app">
          <ConfigProvider
            locale={zhCN}
            renderEmpty={renderEmpty}
            transformCellText={transformCellText}
          >
            <router-view />
          </ConfigProvider>
        </div>
      );
    };
  },
});
```

## 页面国际化

页面国际化可以采用[Hook-useI18n](/hooks/core/useI18n)的方式进行国际化

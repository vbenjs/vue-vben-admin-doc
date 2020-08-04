### 说明

页面国际化

```js
import { useI18n } from '@/hooks/core/useI18n';

const { locale, t } = useI18n();
```

### 　状态

| 状态      | 类型                       | 说明                    |
| --------- | -------------------------- | ----------------------- |
| localeRef | Ref string                 | 当前使用的语言,Ref 类型 |
| t         | Function` | 获取实际的内容 |

### 参数

| 状态    | 类型                     | 说明           |
| ------- | ------------------------ | -------------- |
| locale  | `String`                 | 当前使用的语言 |
| message | Object` | 国际化相关内容 |

### 示例

```vue
<script>
  import { unref } from 'compatible-vue';
  import { useDesign } from '@/hooks/core/useDesign';

  export default {
    setup() {
      const { localeRef, t } = useI18n({
        locale: 'zhCN',
        messages: {
          en: {
            hello: 'hello',
          },
          zhCN: {
            hello: '你好',
          },
        },
      });

      return () => {
        return (
          <div>
            国际化信息: {t('hello')}
            <Button
              type={unref(localeRef) === 'zhCN' ? 'primary' : ''}
              onClick={() => (localeRef.value = 'zhCN')}
            >
              切换中文
            </Button>
            <Button
              type={unref(localeRef) === 'en' ? 'primary' : ''}
              onClick={() => (localeRef.value = 'en')}
            >
              切换英文
            </Button>
          </div>
        );
      };
    },
  };
</script>
```

# 图标

项目中有两种图标使用方式。

1. 使用`ant-design-vue`提供的图标

```ts
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons-vue';

<StarOutlined />
<StarFilled />
<StarTwoTone twoToneColor="#eb2f96" />

```

2. 使用`Iconify`（推荐）

使用方式请参考 [Icon组件](../../comp/glob/icon.md)


## 如何在vite内引入iconify组件

项目中使用到的是`vite-plugin-purge-icons`这个插件来进行图标实现。

1. 安装依赖


```bash

yarn add @iconify/iconify

yarn add @iconify/json @purge-icons/generated -D

```

2. 在 `vite.config.ts`内引入插件

```ts
import PurgeIcons from 'vite-plugin-purge-icons';

export default {
   plugins: [PurgeIcons()],
}
```

3. 编写Icon组件

完整代码 [/@/components/Icon/index.tsx](https://github.com/anncwb/vue-vben-admin/tree/main/src/components/Icon/index.tsx)

```tsx
export default defineComponent({
  name: 'GIcon',
  props: {
    // icon name
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    // icon color
    color: {
      type: String as PropType<string>,
    },
    // icon size
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 14,
    },
    prefix: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props, { attrs }) {
    const elRef = ref<Nullable<HTMLElement>>(null);

    const getIconRef = computed(() => {
      const { icon, prefix } = props;
      return `${prefix ? prefix + ':' : ''}${icon}`;
    });
    const update = async () => {
      const el = unref(elRef);
      if (el) {
        await nextTick();
        const icon = unref(getIconRef);

        const svg = Iconify.renderSVG(icon, {});

        if (svg) {
          el.textContent = '';
          el.appendChild(svg);
        } else {
          const span = document.createElement('span');
          span.className = 'iconify';
          span.dataset.icon = icon;
          el.textContent = '';
          el.appendChild(span);
        }
      }
    };

    watch(() => props.icon, update, { flush: 'post' });

    const wrapStyleRef = computed((): any => {
      const { size, color } = props;
      let fs = size;
      if (isString(size)) {
        fs = parseInt(size, 10);
      }
      return {
        fontSize: `${fs}px`,
        color,
        display: 'inline-flex',
      };
    });

    onMounted(update);

    return () => (
      <div ref={elRef} class={[attrs.class, 'app-iconify']} style={unref(wrapStyleRef)} />
    );
  },
});
```

## 使用组件

```html
<Icon icon="gg:home"></Icon>
```

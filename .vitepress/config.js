// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/doc-next/',
  title: 'Vben Admin',
  lang: 'en',
  description: 'A front-end framework right out of the box',
  head: createHead(),
  themeConfig: {
    repo: 'anncwb/vue-vben-admin',
    docsRepo: 'anncwb/vue-vben-admin-doc',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vben, vitejs, vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: 'Guide',
      link: '/guide/',
      items: [
        {
          text: 'Introduction',
          link: '/guide/introduction',
        },
        {
          text: 'Deep',
          link: '/dep/icon',
        },
        {
          text: 'Other',
          link: '/other/faq',
        },
      ],
    },
    {
      text: 'Component',
      link: '/components/',
      items: [
        {
          text: 'Introduction',
          link: '/components/introduction',
        },
        {
          text: 'Global Components',
          link: '/components/glob/button',
        },
        {
          text: 'Basic Components',
          link: '/components/basic',
        },
        {
          text: 'Functional Components',
          link: '/components/functional/context-menu',
        },
      ],
    },
    {
      text: 'Ecosystem',
      items: [
        {
          text: 'Discord Chat',
          link: 'https://discord.gg/8GuAdwDhj6',
        },
        {
          text: 'Preview',
          link: 'https://vvbin.cn/next',
        },
        {
          text: 'vue-vben-admin',
          link: 'https://github.com/anncwb/vue-vben-admin',
        },
        {
          text: 'Preview Thin',
          link: 'https://vvbin.cn/thin/next',
        },
        {
          text: 'vben-admin-thin-next',
          link: 'https://github.com/anncwb/vben-admin-thin-next',
        },
        {
          text: 'vue-vben-admin-doc',
          link: 'https://github.com/anncwb/vue-vben-admin-doc',
        },
        {
          text: 'Change Log',
          link: 'https://github.com/anncwb/vue-vben-admin/blob/main/CHANGELOG.md',
        },
      ],
    },
    {
      text: 'Donate',
      link: '/other/donate',
    },
  ];
}

function createSidebar() {
  return {
    '/components/': [
      {
        text: 'Component',
        children: [
          {
            text: 'Introduction',
            link: '/components/introduction',
          },
        ],
      },
      {
        text: 'Global Components',
        children: [
          {
            text: 'Button',
            link: '/components/glob/button',
          },
        ],
      },
      {
        text: 'Basic Components',
        children: [
          {
            text: 'Basic',
            link: '/components/basic',
          },
          {
            text: 'Page',
            link: '/components/page',
          },
          {
            text: 'Icon',
            link: '/components/icon',
          },
          {
            text: 'Authority',
            link: '/components/auth',
          },
          {
            text: 'Form',
            link: '/components/form',
          },
          {
            text: 'Table',
            link: '/components/table',
          },
          {
            text: 'PopConfirmButton',
            link: '/components/pop-confirm-button',
          },
          {
            text: 'CollapseContainer',
            link: '/components/collapse-container',
          },
          {
            text: 'ScrollContainer',
            link: '/components/scroll-container',
          },
          {
            text: 'LazyContainer',
            link: '/components/lazy-container',
          },
          {
            text: 'CodeEditor',
            link: '/components/code-editor',
          },
          {
            text: 'JsonPreview',
            link: '/components/json-preview',
          },
          {
            text: 'CountDown',
            link: '/components/count-down',
          },

          {
            text: 'ClickOutSide',
            link: '/components/click-out-side',
          },
          {
            text: 'CountTo',
            link: '/components/count-to',
          },
          {
            text: 'Cropper',
            link: '/components/cropper',
          },
          {
            text: 'Description',
            link: '/components/desc',
          },
          {
            text: 'Drawer',
            link: '/components/drawer',
          },
          {
            text: 'Modal',
            link: '/components/modal',
          },
          {
            text: 'FlowChart',
            link: '/components/flow-chart',
          },
          {
            text: 'Upload',
            link: '/components/upload',
          },
          {
            text: 'Tree',
            link: '/components/tree',
          },
          {
            text: 'Excel',
            link: '/components/excel',
          },
          {
            text: 'Qrcode',
            link: '/components/qrcode',
          },
          {
            text: 'Markdown',
            link: '/components/markdown',
          },
          {
            text: 'Loading',
            link: '/components/loading',
          },
          {
            text: 'Tinymce',
            link: '/components/tinymce',
          },
          {
            text: 'Time',
            link: '/components/time',
          },
          {
            text: 'StrengthMeter',
            link: '/components/strength-meter',
          },
          {
            text: 'Verify',
            link: '/components/verify',
          },
          {
            text: 'Transition',
            link: '/components/transition',
          },
          {
            text: 'VirtualScroll',
            link: '/components/virtual-scroll',
          },
        ],
      },
      {
        text: 'Functional Components',
        children: [
          {
            text: 'ContextMenu',
            link: '/components/functional/context-menu',
          },
          {
            text: 'Loading',
            link: '/components/functional/loading',
          },
          {
            text: 'Preview',
            link: '/components/functional/preview',
          },
        ],
      },
    ],
    '/': [
      {
        text: 'Essentials',
        children: [
          {
            text: 'Introduction',
            link: '/guide/introduction',
          },
          {
            text: 'Start',
            link: '/guide/',
          },
          {
            text: 'Settings',
            link: '/guide/settings',
          },
          {
            text: 'Router',
            link: '/guide/router',
          },
          {
            text: 'Menu',
            link: '/guide/menu',
          },
          {
            text: 'Auth',
            link: '/guide/auth',
          },
          {
            text: 'Mock',
            link: '/guide/mock',
          },
          {
            text: 'Register Component',
            link: '/guide/component',
          },
          {
            text: 'Design',
            link: '/guide/design',
          },
          {
            text: 'Lib',
            link: '/guide/lib',
          },
          {
            text: 'Deploy',
            link: '/guide/deploy',
          },
          {
            text: 'Electron',
            link: '/guide/electron',
          },
        ],
      },
      {
        text: 'Deep',
        children: [
          {
            text: 'Cors',
            link: '/dep/cors',
          },
          {
            text: 'Icon',
            link: '/dep/icon',
          },
          {
            text: 'I18n',
            link: '/dep/i18n',
          },
          {
            text: 'Lint',
            link: '/dep/lint',
          },
          {
            text: 'Dark Theme',
            link: '/dep/dark',
          },
        ],
      },
      {
        text: 'Other',
        children: [
          {
            text: 'Faq',
            link: '/other/faq',
          },
          {
            text: 'Doubt',
            link: '/other/doubt',
          },
          {
            text: 'Server',
            link: '/other/server',
          },
          {
            text: 'Project',
            link: '/other/project',
          },
        ],
      },
    ],
  };
}

// /**
//  * @type {(namespace:string,items:string[])=>string[]}
//  */
// function urlWrapper(namespace, items) {
//   return items.map((item) => namespace + item);
// }

// function getGuildNav() {
//   return urlWrapper('/guide', ['/']);
// }

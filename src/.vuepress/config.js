module.exports = {
  base: '/vue-vben-admin-doc/',
  title: 'Vue vben admin 2.0',
  description: 'Vue Vben Admin 开发文档,持续更新中....',
  dest: './dist',
  updatePopup: true,
  //  不转义成es5下
  evergreen: true,
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: '帮助我们改善此页面！',
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vue vben admin 2.0',
      description: 'Vue Vben Admin 2.0项目文档，持续更新中....',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Vue vben admin 2.0',
      description: 'Vue Vben Admin Docs',
    },
  },
  themeConfig: {
    logo: '/img/logo.png',

    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '指南', link: '/guide/' },
          {
            text: '组件/Hook',
            items: [
              {
                text: '组件',
                link: '/comp/',
              },
            ],
          },
          {
            text: '更新日志',
            link: 'https://github.com/anncwb/vue-vben-admin/blob/main/CHANGELOG.zh_CN.md',
          },
          {
            text: '预览',
            items: [
              {
                text: '完整版',
                link: 'https://vvbin.cn/next',
              },
              {
                text: '精简版',
                link: 'https://vvbin.cn/thin/next',
              },
            ],
          },
          {
            text: 'github',
            items: [
              {
                text: '完整版',
                link: 'https://github.com/anncwb/vue-vben-admin',
              },
              {
                text: '精简版',
                link: 'https://github.com/anncwb/vben-admin-thin-next',
              },
            ],
          },
        ],
        sidebar: {
          '/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: getGuide(),
            },
            {
              title: '深入',
              collapsable: false,
              children: getDeps(),
            },
            {
              title: '其他',
              collapsable: false,
              children: ['/guide/qa/'],
            },
          ],
          '/comp/': [
            {
              title: '全局组件',
              collapsable: false,
              children: getGlobComp(),
            },
            {
              title: '普通组件',
              collapsable: false,
              children: getComp(),
            },
          ],
        },
      },
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-table-of-contents',
    'vuepress-plugin-typescript',
    'vuepress-plugin-zooming',
  ],
};

function getGuide(type = '') {
  const arr = [
    '/guide/',
    '/guide/basic/quickStart',
    '/guide/basic/setting',
    '/guide/basic/route',
    '/guide/basic/menu',
    '/guide/basic/auth',
    '/guide/basic/mock',
    '/guide/basic/style',
    '/guide/basic/build',
    '/guide/basic/lib',
  ];
  return arr.map((item) => type + item);
}

function getDeps(type = '') {
  const arr = [
    '/guide/dep/cors',
    '/guide/dep/nginx',
    '/guide/dep/icon',
    '/guide/dep/i18n',
    '/guide/dep/lint',
  ];
  return arr.map((item) => type + item);
}
function getGlobComp(type = '') {
  const arr = ['/comp/', '/comp/glob/icon', '/comp/glob/button'];
  return arr.map((item) => type + item);
}

function getComp(type = '') {
  const arr = ['/comp/auth'];
  return arr.map((item) => type + item);
}

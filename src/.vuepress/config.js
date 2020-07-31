module.exports = {
  base: '/docs/',
  title: 'Vue vben admin',
  description: 'Vue vben admin docs  文档正在逐步编写中，请耐心等候！',
  dest: './src/.vuepress/dist',
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
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/comp/' },
      { text: '预览', link: 'https://vvbin.cn' },
      { text: 'github', link: 'https://github.com/anncwb/vue-vben-admin' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '介绍',
          path: '/guide/',
          collapsable: false,
          children: [{ title: '项目介绍', path: '/guide/Introduction/' }],
        },
        {
          title: '环境准备',
          collapsable: true,
          children: [{ title: '开发环境', path: '/guide/env/' }],
        },
        {
          title: '项目配置',
          collapsable: true,
          children: [
            { title: '环境配置', path: '/guide/setting/' },
            { title: '项目配置', path: '/guide/setting/project' },
            { title: '动态配置', path: '/guide/setting/window' },
          ],
        },
        {
          title: '图标相关',
          collapsable: true,
          children: [{ title: '基础说明', path: '/guide/icon/' }],
        },
        {
          title: '路由相关',
          collapsable: true,
          children: [
            { title: '基础说明', path: '/guide/router/base' },
            { title: '配置介绍', path: '/guide/router/config' },
            { title: 'META配置', path: '/guide/router/meta' },

            { title: '新增路由', path: '/guide/router/new' },
            { title: '刷新路由', path: '/guide/router/redo' },
          ],
        },
        {
          title: '菜单相关',
          collapsable: true,
          children: [{ title: '基础说明', path: '/guide/router/base' }],
        },
      ],

      '/comp/': [
        {
          title: '图标组件',
          path: '/comp/',
          collapsable: false,
          children: [
            { title: 'Icon组件', path: '/comp/icon/' },
            { title: 'SvgIcon组件', path: '/comp/icon/svg' },
          ],
        },
      ],
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
  ],
};

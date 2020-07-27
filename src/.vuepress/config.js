module.exports = {
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
      { text: 'github', link: 'https://github.com/anncwb/vue-vben-admin' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '介绍',
          collapsable: false,
          children: [{ title: '项目介绍', path: '/guide/Introduction/' }],
        },
        {
          title: '环境准备',
          collapsable: false,
          children: [{ title: '开发环境', path: '/guide/env/' }],
        },
        {
          title: '项目配置',
          collapsable: false,
          children: [
            { title: '环境配置', path: '/guide/setting/' },
            { title: '项目配置', path: '/guide/setting/project' },
            { title: '动态配置', path: '/guide/setting/window' },
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

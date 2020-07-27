module.exports = {
  title: 'Vue vben admin',
  description: 'Vue vben admin docs',
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
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/' },
      { text: 'github', link: 'https://github.com/anncwb/vue-vben-admin' },
    ],
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
  ],
};

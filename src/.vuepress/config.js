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
      { text: 'hooks', link: '/hooks/' },
      { text: 'plugins', link: '/plugins/' },
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
            { title: '标签页', path: '/guide/router/tabs' },
          ],
        },
        {
          title: '菜单相关',
          collapsable: true,
          children: [
            { title: '基础结构', path: '/guide/menu/' },
            { title: '新增菜单', path: '/guide/menu/new' },
          ],
        },
        {
          title: '权限相关',
          collapsable: true,
          children: [
            { title: '基础', path: '/guide/perm/' },
            { title: '基于角色权限', path: '/guide/perm/role' },
          ],
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
        {
          title: '上传下载',
          // path: '/comp/',
          collapsable: false,
          children: [
            { title: '上传组件', path: '/comp/file/upload' },
            { title: '下载组件', path: '/comp/file/download' },
          ],
        },
        {
          title: '富文本编辑',
          path: '/comp/tinymce/',
          // collapsable: false,
        },
      ],
      '/hooks/': [
        { title: '介绍', path: '/hooks/' },
        {
          title: '核心',
          path: '/hooks/core/',
          collapsable: false,
          children: [
            { title: 'useDesign', path: '/hooks/core/useDesign' },
            { title: 'useAuth', path: '/hooks/core/useAuth' },
            { title: 'useRedo', path: '/hooks/core/useRedo' },
            { title: 'useSetting', path: '/hooks/core/useSetting' },
            { title: 'useRouter', path: '/hooks/core/useRouter' },
            { title: 'useI18n', path: '/hooks/core/useI18n' },
            { title: 'useMessage', path: '/hooks/core/useMessage' },
            { title: 'useTimeout', path: '/hooks/core/useTimeout' },
            { title: 'useTimeoutRef', path: '/hooks/core/useTimeoutRef' },
            { title: 'useThrottle', path: '/hooks/core/useThrottle' },
            { title: 'useDebounce', path: '/hooks/core/useDebounce' },
            { title: 'useAsyncState', path: '/hooks/core/useAsyncState' },
            { title: 'usePromise', path: '/hooks/core/usePromise' },
          ],
        },
        {
          title: '事件相关',
          path: '/hooks/event',
          collapsable: false,
          children: [
            {
              title: 'useWindowSize',
              path: '/hooks/event/useWindowSize',
            },
            { title: 'useScroll', path: '/hooks/event/useScroll' },
            { title: 'useScrollTo', path: '/hooks/event/useScrollTo' },
            { title: 'useNetWork', path: '/hooks/event/useNetWork' },
            { title: 'useRaf', path: '/hooks/event/useRaf' },
            { title: 'useFullScreen', path: '/hooks/event/useFullScreen' },
            { title: 'useEvent', path: '/hooks/event/useEvent' },
            { title: 'useElResize', path: '/hooks/event/useElResize' },
            { title: 'useCopyToClipboard', path: '/hooks/event/useCopyToClipboard' },
            { title: 'useBreakpoint', path: '/hooks/event/useBreakpoint' },
          ],
        },
        {
          title: '页面相关',
          path: '/hooks/function',
          collapsable: false,
          children: [
            { title: 'useCharts', path: '/hooks/function/useCharts' },
            { title: 'useContextMenu', path: '/hooks/function/useContextMenu' },
            { title: 'useDriver', path: '/hooks/function/useDriver' },
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

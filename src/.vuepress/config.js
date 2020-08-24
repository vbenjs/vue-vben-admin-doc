module.exports = {
  base: '/docs/',
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
    logo: '/img/logo.png',
    nav: [
      { text: '基础指南', link: '/guide/' },
      { text: '进阶指南', link: '/advanced/' },
      { text: '组件文档', link: '/comp/' },
      { text: 'hooks', link: '/hooks/' },
      // { text: 'plugins', link: '/plugins/' },
      {
        text: '更新日志',
        link: 'https://github.com/anncwb/vue-vben-admin/blob/master/CHANGELOG.md',
      },
      { text: '预览', link: 'https://vvbin.cn' },
      { text: 'github', link: 'https://github.com/anncwb/vue-vben-admin' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '介绍',
          path: '/guide/',
          collapsable: false,
          children: [
            { title: '项目介绍', path: '/guide/Introduction/' },
            { title: '配色修改', path: '/guide/Introduction/theme' },
          ],
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
        {
          title: '图标相关',
          collapsable: false,
          children: [{ title: '基础说明', path: '/guide/icon/' }],
        },
        {
          title: '路由相关',
          collapsable: false,
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
          collapsable: false,
          children: [
            { title: '基础结构', path: '/guide/menu/' },
            { title: '新增菜单', path: '/guide/menu/new' },
          ],
        },
        {
          title: '权限相关',
          collapsable: false,
          children: [
            { title: '基础', path: '/guide/perm/' },
            { title: '基于角色权限', path: '/guide/perm/role' },
            { title: '后台动态获取菜单', path: '/guide/perm/back' },
          ],
        },
        {
          title: '样式相关',
          collapsable: false,
          path: '/guide/style/',
        },
        {
          title: '服务端交互',
          collapsable: false,
          children: [
            { title: '接口地址修改', path: '/guide/api/mutual' },
            { title: '接口请求', path: '/guide/api/axios' },
            { title: 'mock服务', path: '/guide/api/mock' },
          ],
        },
        {
          title: '项目构建',
          path: '/guide/build/',
        },
      ],
      '/advanced': [
        {
          title: '跨域问题',
          path: '/advanced/',
          collapsable: false,
        },
        {
          title: 'nginx配置',
          collapsable: false,
          path: '/advanced/nginx',
        },
        {
          title: 'Lint',
          collapsable: true,
          path: '/advanced/lint/',
          children: [
            { title: 'Eslint', path: '/advanced/lint/eslint' },
            { title: 'LsLint', path: '/advanced/lint/ls-lint' },
            { title: 'CommitLint', path: '/advanced/lint/commitlint' },
            { title: 'StyleLint', path: '/advanced/lint/stylelint' },
            { title: 'Prettier', path: '/advanced/lint/prettier' },
            { title: 'GitHook', path: '/advanced/lint/git-hook' },
          ],
        },
        {
          title: '国际化',
          collapsable: false,
          path: '/advanced/i18n/',
        },
        {
          title: '常见问题',
          collapsable: false,
          path: '/advanced/qa/',
        },
      ],

      '/comp/': [
        {
          title: '按钮组件',
          path: '/comp/button',
        },
        {
          title: '图标组件',
          collapsable: true,
          children: [
            { title: 'Icon组件', path: '/comp/icon/' },
            { title: 'SvgIcon组件', path: '/comp/icon/svg' },
          ],
        },
        {
          title: '小组件',
          collapsable: true,
          children: [
            { title: 'Title组件', path: '/comp/base/title' },
            { title: 'Arrow组件', path: '/comp/base/arrow' },
            { title: 'Help组件', path: '/comp/base/help' },
          ],
        },
        {
          title: '容器组件',
          collapsable: true,
          children: [
            { title: 'collapse折叠容器', path: '/comp/wrap/collapse' },
            { title: 'lazy延时加载容器', path: '/comp/wrap/lazy' },
            { title: 'scroll滚动容器', path: '/comp/wrap/scroll' },
          ],
        },

        {
          title: '权限组件',
          collapsable: false,
          path: '/comp/authority/',
        },
        {
          title: '表单组件',
          path: '/comp/form/',
          collapsable: false,
        },
        {
          title: '表格组件',
          path: '/comp/table/',
          collapsable: false,
        },
        {
          title: '树组件',
          path: '/comp/tree',
          collapsable: false,
        },
        {
          title: '弹窗组件',
          path: '/comp/modal/',
        },
        {
          title: '抽屉组件',
          path: '/comp/drawer/',
        },
        {
          title: 'virtual-scroll组件',
          path: '/comp/virtual-scroll',
        },
        {
          title: '验证码组件',
          collapsable: true,
          children: [
            { title: '拖动校验', path: '/comp/verify/base' },
            { title: '图片还原校验', path: '/comp/verify/img' },
          ],
        },
        {
          title: '二维码组件',
          path: '/comp/qrcode',
        },
        {
          title: '密码强度校验组件',
          path: '/comp/strengthMeter',
        },
        {
          title: '动画组件',
          path: '/comp/transition',
        },
        {
          title: 'parallax组件',
          path: '/comp/parallax',
        },
        {
          title: 'click-out-side组件',
          path: '/comp/click-out-side',
        },
        {
          title: '富文本编辑',
          path: '/comp/tinymce/',
        },
        {
          title: '上传下载',
          collapsable: true,
          children: [
            { title: '上传组件', path: '/comp/file/upload' },
            { title: '下载组件', path: '/comp/file/download' },
          ],
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

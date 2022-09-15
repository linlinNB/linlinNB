const {
  head,
  navbarZh,
  sidebarZh,
} = require('./configs/index.js')

module.exports = {
  theme: 'vdoing',
  title: "银河水滴组件库",
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    category: false,
    tag: false,
    archive: false,
    titleBadge: false,
    updateBar: {
      showToArticle: false,
      moreArticle: ''
    },
    logo: '/images/watrix.png',
    locales: {
      '/': {
        home: '/',
        nav: navbarZh,
        sidebar: sidebarZh,
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        selectLanguageName: '简体中文',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // page meta
        lastUpdatedText: '上次更新',
        contributors: false,
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
}
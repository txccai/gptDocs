const moment = require('moment');

module.exports = {
  base: "/gptDocs/",
  title: "ChatGPT相关知识学习指南",
  description: "ChatGPT Plus,GPT4.0,虚拟信用卡,wildcard 邀请码",
  theme: 'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '希望没有早八' }],
    ['meta', { name: "google-site-verification", content: "ooLNaxcsJM_SuVj3sgKvIvcDBlipY78kMUE45KSt9U4" }],
    ['meta', { name: "msvalidate.01" , content: '5F2DAB380E70B8ABA20F08AFEF085400' }],
    ['meta', { name: 'keywords', content: 'ChatGPT Plus,onlyfans,GPT4.0,虚拟信用卡,sora' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?3259f570c191ce305886120317046715";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        `],
    ['script', { src: '/index.js' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated', {
        transformer: (timestamp) => {
          moment.locale("zh-cn")
          // return moment(timestamp).format('LLLL')
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    ['sitemap', {
      hostname: 'https://txccai.github.io',
      // 排除无实际内容的页面
      exclude: ["/404.html"]
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    ['vuepress-plugin-baidu-autopush']
  ],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    smoothScroll: true,
    evergreen: true,//浏览器兼容性
    logo: '/favicon.ico',
    lastUpdated: '更新时间',
    subSidebar: 'auto',
    type: 'blog',
    // 作者
    author: '希望没有早八',
    // 作者头像
    authorAvatar: './assets/img/logo.jpg',
    // 项目开始时间
    startYear: '2024',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 20,
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: 'ChatGPT获取及相关知识', link: '/chatGPT/' },
      { text: 'WildCard', link: 'https://bewildcard.com/i/GTP999' },
    ],
    vssueConfig: {
      platform: 'github',
      owner: 'txccai',
      repo: 'gptDocs',
      clientId: '686e22aed9f3f3316082',
      clientSecret: 'e11be519fc43d283a012f54389200d2f0dcd3790',
      // autoCreateIssue: true // 自动创建 Issue
    },
    sidebar: {
      
    },
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
   //友情链接
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // }
    ]

  }
}
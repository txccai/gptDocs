const moment = require('moment');

module.exports = {
  base: "/gptDocs/",
  title: "希望没有早八",
  description: "ChatGPT Plus,onlyfans,GPT4.0,虚拟信用卡,sora",
  theme: 'reco',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '希望没有早八' }],
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
          return moment(timestamp).format('LLLL')
        }
      }
    ],
    ['@vuepress/back-to-top'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    lastUpdated: '更新时间',
    sidebar: 'auto',
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: 'ChatGPT', link: '/chatGPT/' },
      { text: 'WildCard', link: 'https://bewildcard.com/i/GTP999' },
    ],
    sidebar: {
      '/chatGPT/': [
        '',     /* /chatGPT/ */
        'GPT3.5',  /* /chatGPT/GPT3.html */
        'GPT4',   /* /GPT4/GPT4.html */
      ],
      '/': [
        {
          title: 'ChatGPT',   // 必要的
          path: '/chatGPT/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: 'GPT3.5',
              path: '/chatGPT/GPT3.5'
            },
            {
              title: 'Gpt4',
              path: '/chatGPT/GPT4'
            }
          ]
        },
        {
          title: 'WildCard',   // 必要的
          path: '/WildCard/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            {
              title: 'WildCard虚拟卡是什么？WildCard平台可以干什么？它安全吗？',
              path: '/WildCard/something-about-wildcard'
            }
          ]
        },
      ]
    }

  }
}
const moment = require('moment');

module.exports = {
    title: "希望没有早八",
    description: "ChatGPT Plus,onlyfans,GPT4.0,虚拟信用卡",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', {name: 'author', content: '希望没有早八'}],
        ['meta', {name: 'keywords',content: 'ChatGPT Plus,onlyfans,GPT4.0,虚拟信用卡'}],
        
      ],
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) => {
              moment.locale("zh-cn")
              return moment(timestamp).format('LLLL')
            }
          }
        ]
      ],
    themeConfig: {
      logo: '/assets/img/logo.jpg',
      lastUpdated: '更新时间',
      sidebar: 'auto',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: {
        '/chatGPT/': [
          '',     /* /foo/ */
          'GPT3',  /* /foo/one.html */
          'GPT4'   /* /foo/two.html */
        ],
        '/bar/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
        // fallback
        '/': [
          '',        /* / */
          'contact', /* /contact.html */
          'about'    /* /about.html */
        ]
      }
    }
  }
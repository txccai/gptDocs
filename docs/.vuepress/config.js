const moment = require('moment');

module.exports = {
    base: "/gptDocs/",
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
          '',     /* /chatGPT/ */
          'GPT3',  /* /chatGPT/GPT3.html */
          'GPT4'   /* /GPT4/GPT4.html */
        ],
        '/': [
          ''        /* / */
        ]
      }
    }
  }
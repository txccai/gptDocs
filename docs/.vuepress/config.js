const moment = require('moment');

module.exports = {
    base: "/gptDocs/",
    title: "希望没有早八",
    description: "ChatGPT Plus,onlyfans,GPT4.0,虚拟信用卡,sora",
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', {name: 'author', content: '希望没有早八'}],
        ['meta', {name: 'keywords',content: 'ChatGPT Plus,onlyfans,GPT4.0,虚拟信用卡,sora'}],
        
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
        ],
        ['@vuepress/back-to-top']
      ],
    themeConfig: {
      logo: '/assets/img/logo.jpg',
      lastUpdated: '更新时间',
      sidebar: 'auto',
      subSidebar: 'auto',
      nav: [
        { text: '首页', link: '/' },
        { text: 'ChatGPT', link: '/chatGPT/'},
        { text: 'WildCard', link: 'https://bewildcard.com/i/GTP999' },
      ],
      sidebar: {
        '/chatGPT/': [
          '',     /* /chatGPT/ */
          'GPT3',  /* /chatGPT/GPT3.html */
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
                    title: '3444444444444444444444444444444444444',
                    path: '/chatGPT/GPT3'
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
                title: 'wc',
                path: '/WildCard/GPT3'
              },
              {
                title: 'wc2',
                path: '/WildCard/GPT4'
              }
            ]
      },
        ]
      }
      
    }
  }
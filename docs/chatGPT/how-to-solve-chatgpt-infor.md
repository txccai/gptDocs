---
title: 快速简单解决chatgpt信息发不出的问题
categories:
 - ChatGPT
tags:
 - ChatGPT
---

今天用ChatGPT写代码，结果发现发的消息没反应。不管处理也好，报错也好，就是寂静无回应。刷新了下浏览器，看着挺正常，还能翻看历史对话。但再试一次，还是老样子，没反应。啥情况？

![chatgpt无响应](https://segmentfault.com/img/remote/1460000044695422)

初时还以为账号被封了，但经过一番深入研究，发现问题的根源可能出在点击登录后顶部弹窗邀请的地方，选择了[加入alpha测试]并设置了中文语言。这可能导致了消息的无响应现象。
![chatgpt加入alpha测试](https://segmentfault.com/img/remote/1460000044695423)

网络抓包后看起来问题可能出在与ab.chatgpt.com接口的交互上。控制台报错可能表明了一些数据传输或处理方面的问题，导致无法获取账户信息，进而影响到消息的发送和响应。

## 处理方法

### 1. 临时办法

使用无痕模式可以帮助暂时规避这个问题。快捷键ctrl+shift+n。

以下是在Chrome浏览器中打开无痕模式的步骤：

1.打开Chrome浏览器。
2.点击右上角的三个点，打开菜单。
3.在菜单中，选择“打开新的无痕式窗口”。
这将打开一个新的无痕模式窗口，其中不会保存浏览历史、cookie和其他浏览数据。在这个窗口中，尝试进入ChatGPT。
![](https://segmentfault.com/img/remote/1460000044695424)

就可以继续使用chatgpt了!!
![](https://segmentfault.com/img/remote/1460000044695425)

### 2. 永久解决办法
清空 https://chat.openai.com网站在你的的浏览器中，本地所有缓存数据。
步骤: Openai ChatGPT 的对话页面，点击鼠标右键，点击检查

清除掉chatgpt网站在浏览器中的全部本地缓存数据。

你可以根据这些步骤在你的浏览器中清空缓存：

1.打开 ChatGPT 的对话页面（https://chat.openai.com）。
2.在页面上右键点击鼠标，选择“检查”或“检查元素”（Inspect）。

![ChatGPT](https://segmentfault.com/img/remote/1460000044695426)

接下来的步骤可能因浏览器而异，以下是在 Chrome 浏览器中的步骤：

1.在打开的开发者工具窗口中，找到顶部菜单栏，选择“Application”（应用）选项卡。
2.在右侧的面板中，“including third-party cookies”（勾选包括第三方cookies）。
3.在右侧的面板中，点击“Clear site data”（清除站点数据）。

![Application-cookies](https://segmentfault.com/img/remote/1460000044695427)

嗯，完成上诉操作后，你将能愉快地继续使用ChatGPT了，不再遇到发送消息没有反应的问题了。
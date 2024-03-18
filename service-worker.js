/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ff04ae4fc7c0c270d547a364cfa25e02"
  },
  {
    "url": "assets/css/0.styles.ef847bfc.css",
    "revision": "717e13cb2b31fca36df6d0077bab2c06"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/anthropic-home.91b7843d.png",
    "revision": "91b7843d160e769a816ba59ce7d298e5"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/claude-reject-rating.00e4318b.png",
    "revision": "00e4318b2fa15d499825f560770ed23e"
  },
  {
    "url": "assets/img/claude3-1.2468ad57.png",
    "revision": "2468ad576a3298b1e35df4e0a63eb77e"
  },
  {
    "url": "assets/img/claude3.250b5652.png",
    "revision": "250b5652a2d6d0293ca27692322896a6"
  },
  {
    "url": "assets/img/fomepay-upgradeGPT1.38813758.png",
    "revision": "38813758ff8fd15ce768ca99244c3912"
  },
  {
    "url": "assets/img/fomepay-upgradeGPT2.3730dcfb.png",
    "revision": "3730dcfb4b378507e871e265d7e2b741"
  },
  {
    "url": "assets/img/fomepay-upgradeGPT3.61f8a810.png",
    "revision": "61f8a810fe3c9bc2b1c0b78f49b06fcf"
  },
  {
    "url": "assets/img/fomepay-upgradeGPT4.691e60f3.png",
    "revision": "691e60f3c9abed588d532735e2b0be02"
  },
  {
    "url": "assets/img/GPT4-1.0b8befb6.png",
    "revision": "0b8befb654dd27a94928aff0f3136725"
  },
  {
    "url": "assets/img/GPT4-2.f5bfedd9.png",
    "revision": "f5bfedd91c7525855ea6eb8024546b89"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "dc23683a4868a45e2239c26ab90685b9"
  },
  {
    "url": "assets/img/midjourney-image.97244292.png",
    "revision": "97244292bd4e18dab8d518d99c191409"
  },
  {
    "url": "assets/img/midjourney-subscribe-cost.0c69171c.png",
    "revision": "0c69171c75892f368dd59e3e04781444"
  },
  {
    "url": "assets/img/midjourney-subscribe.467ecc31.png",
    "revision": "467ecc3167deaec3b2ce52aafe67985f"
  },
  {
    "url": "assets/img/onlyfans1.93eb431a.png",
    "revision": "93eb431ab9bfed057d86eacb1af59be9"
  },
  {
    "url": "assets/img/onlyfans2.d9120847.png",
    "revision": "d91208470dec185e1fcda691bd819756"
  },
  {
    "url": "assets/img/onlyfans3.23bdd274.png",
    "revision": "23bdd27453cf1c431dc8308aad6935ab"
  },
  {
    "url": "assets/img/onlyfans4.5bb5fbbd.png",
    "revision": "5bb5fbbdefbc870607a00b55b96bc5f7"
  },
  {
    "url": "assets/img/onlyfans5.24256560.png",
    "revision": "242565607c5a8877ee88e7cfefd8a1e2"
  },
  {
    "url": "assets/img/onlyfans6.01bfc50d.png",
    "revision": "01bfc50db7b2f60b58e2754e464edac9"
  },
  {
    "url": "assets/img/onlyfans7.51ddbd70.png",
    "revision": "51ddbd703ea2bc268c97630e85509c3a"
  },
  {
    "url": "assets/img/register-WildCard1.62dcec64.png",
    "revision": "62dcec646cf741fd76768d73c2b96ca3"
  },
  {
    "url": "assets/img/register-WildCard2.94b8bdeb.png",
    "revision": "94b8bdeb40a80862cdeaeb5e0fc414ab"
  },
  {
    "url": "assets/img/register-WildCard3.e85b05d8.png",
    "revision": "e85b05d88a9c81c83c4bc1cbd51ce9bb"
  },
  {
    "url": "assets/img/register-WildCard4.629562a2.png",
    "revision": "629562a2f5886c53f94d82570f94af9a"
  },
  {
    "url": "assets/img/upgradeGPT4-success.964f26a1.png",
    "revision": "964f26a1a04df4cd15c652a3638dbb8c"
  },
  {
    "url": "assets/img/UpgradePlus1.f561cb0c.png",
    "revision": "f561cb0c593edc9746306dcccaeca847"
  },
  {
    "url": "assets/img/UpgradePlus2.040a8d8f.png",
    "revision": "040a8d8f487e18417818f4894ea2a4cc"
  },
  {
    "url": "assets/img/UpgradePlus3.c321cb2a.png",
    "revision": "c321cb2a7fb71e4820216e92400db8b1"
  },
  {
    "url": "assets/img/wechat.2a01d179.jpg",
    "revision": "2a01d17927ac86e3bf18ad613eefc0ef"
  },
  {
    "url": "assets/img/wildcard-cardinfo.d655ae71.png",
    "revision": "d655ae71d9ae026ad54c950a902792b2"
  },
  {
    "url": "assets/img/WildCard-ui.b6645273.png",
    "revision": "b6645273e65c26813d3e79cf9f924e7c"
  },
  {
    "url": "assets/js/1.52a987c5.js",
    "revision": "59aeefaf180e07ab2cd52733a368ad86"
  },
  {
    "url": "assets/js/10.d7b65407.js",
    "revision": "f0c9617e769a979bc46494b09cfa8f80"
  },
  {
    "url": "assets/js/11.dc51e63a.js",
    "revision": "4606d30caf854af2736f4df5dd6fac70"
  },
  {
    "url": "assets/js/15.afd7bfae.js",
    "revision": "fa9ca7a77c1b360b7f9b0e8c7583d560"
  },
  {
    "url": "assets/js/16.6c34be43.js",
    "revision": "b17554bd018cd4597bed67ef0113ebaf"
  },
  {
    "url": "assets/js/17.95a8d927.js",
    "revision": "e005af8e2a3db423e4b4dd054788ddd2"
  },
  {
    "url": "assets/js/18.70621e84.js",
    "revision": "ee0ae208205feac3d258aa13f3b3b9ba"
  },
  {
    "url": "assets/js/19.2141236d.js",
    "revision": "099d5331e3436ffcdf2549c907fb9100"
  },
  {
    "url": "assets/js/2.f60f45ec.js",
    "revision": "468bfce39005629c6db992674fd64110"
  },
  {
    "url": "assets/js/20.c1cd7090.js",
    "revision": "218b350558a048b50256439ff8428e6f"
  },
  {
    "url": "assets/js/21.d4509e28.js",
    "revision": "a15c57e7c76be90b1240d0b07fb664fb"
  },
  {
    "url": "assets/js/22.4f1db93c.js",
    "revision": "e92e4ccc67024543419ac86602406154"
  },
  {
    "url": "assets/js/23.8d874b64.js",
    "revision": "f36adde35bb1cc3d48ce0f5be73dfd21"
  },
  {
    "url": "assets/js/24.801b23e3.js",
    "revision": "15654b9cb3889f6ead5c9aa7298ebe91"
  },
  {
    "url": "assets/js/25.73a62629.js",
    "revision": "c75efa74abbe26f03b968dcb1ce98e46"
  },
  {
    "url": "assets/js/26.891298ba.js",
    "revision": "e2da31d65024777a9dcc81c5ea8ac05c"
  },
  {
    "url": "assets/js/27.8d957fb3.js",
    "revision": "073c8fcda9888c88c884342435ed938e"
  },
  {
    "url": "assets/js/28.88c2b7e2.js",
    "revision": "41439a5b4b713240329daede8f013a4c"
  },
  {
    "url": "assets/js/29.3f4f66c7.js",
    "revision": "378fcf9f93bf640aa2470e6221a77e4c"
  },
  {
    "url": "assets/js/3.b8f1050f.js",
    "revision": "db133eb77904dba6b8622c6b72acd2a7"
  },
  {
    "url": "assets/js/30.4f3d2948.js",
    "revision": "07e90a5ceaa72e5e085dae9f81d51877"
  },
  {
    "url": "assets/js/31.2cfaac20.js",
    "revision": "6e35f9333a8e6b295390b273f201591f"
  },
  {
    "url": "assets/js/32.d875edde.js",
    "revision": "4af58af4ba39895761e74c604cfdd17f"
  },
  {
    "url": "assets/js/33.ad583ead.js",
    "revision": "54c43db999b110f87cf07c2d33fc5cb8"
  },
  {
    "url": "assets/js/34.dfabe3af.js",
    "revision": "9239cb592628f3c85dbd962aeda02dfe"
  },
  {
    "url": "assets/js/35.11a76fb6.js",
    "revision": "9e5274c2d89479c6c407d95c9d3acac6"
  },
  {
    "url": "assets/js/36.36b5e027.js",
    "revision": "1d29aa46c4f7642f21f786079e2596a3"
  },
  {
    "url": "assets/js/37.ee31b1dc.js",
    "revision": "04a821a0ca927b0c8869035a97026065"
  },
  {
    "url": "assets/js/38.207dae3c.js",
    "revision": "570e0991f0ce4d29c581b7c94460061a"
  },
  {
    "url": "assets/js/39.457d501b.js",
    "revision": "67acbc3669ee9060f020d7a5f72adafe"
  },
  {
    "url": "assets/js/4.df045853.js",
    "revision": "4c50e5be6dd646665b5c9d5929136dcd"
  },
  {
    "url": "assets/js/40.02c23056.js",
    "revision": "2f72536104087435f4d95e89df83cfd5"
  },
  {
    "url": "assets/js/41.d0ac344d.js",
    "revision": "0140228fef462bcb766c1b2f7a401b64"
  },
  {
    "url": "assets/js/42.c5f93eab.js",
    "revision": "9cc9a4ee8aa1aaeb7d382faf6cafb163"
  },
  {
    "url": "assets/js/43.1de79f3c.js",
    "revision": "42766a9c8a13ccabb794553bf9855697"
  },
  {
    "url": "assets/js/44.7178831e.js",
    "revision": "868bba9a615a412ae8a97b0603602b43"
  },
  {
    "url": "assets/js/45.d4ed2f84.js",
    "revision": "696ffe26665c7bb06bb3077c1550a633"
  },
  {
    "url": "assets/js/46.31c62489.js",
    "revision": "29763efea44e93049cf6ddb2a6b5adde"
  },
  {
    "url": "assets/js/47.22f4aa10.js",
    "revision": "e34e90f300f4007f9242b24d6101b634"
  },
  {
    "url": "assets/js/48.f4bbacf1.js",
    "revision": "7e4bd9da8b67c2fa701d3c93107228ba"
  },
  {
    "url": "assets/js/49.570b36f2.js",
    "revision": "e841b741f29cbaeface1ecd6814d5158"
  },
  {
    "url": "assets/js/5.78746ba9.js",
    "revision": "d4a483456b5104dd3c61fa64406c9b54"
  },
  {
    "url": "assets/js/50.07b3eefb.js",
    "revision": "b8f035a7055f31395fcc4801b167ea76"
  },
  {
    "url": "assets/js/51.7e8cd02a.js",
    "revision": "a8b9018c4a06e4384c59ada566cb55f4"
  },
  {
    "url": "assets/js/52.5696dd7f.js",
    "revision": "11a4a0a60151154296ce6b4f2dcf47b7"
  },
  {
    "url": "assets/js/53.54455e08.js",
    "revision": "76434fcaca9ddf903fdf5ba11df2db97"
  },
  {
    "url": "assets/js/54.1ad557bd.js",
    "revision": "30dd2416901f99530bee28f5dc80f78d"
  },
  {
    "url": "assets/js/6.b7c0aa03.js",
    "revision": "b671daaf4199ac52d78bbedc2bfde744"
  },
  {
    "url": "assets/js/7.644b1309.js",
    "revision": "225393956b337dd1ecf033e0c57c91dc"
  },
  {
    "url": "assets/js/8.d5c2409f.js",
    "revision": "24a5d717618d0e13e232fa236d60a250"
  },
  {
    "url": "assets/js/9.fe9f3d62.js",
    "revision": "3ae228fa690a6d709bc1a140ec411748"
  },
  {
    "url": "assets/js/app.39f2c6fa.js",
    "revision": "ef40c578f56bd22d210bad8755e869ed"
  },
  {
    "url": "assets/js/vendors~docsearch.0ade3b4a.js",
    "revision": "62c4c1f51a74f1f95a5a539aa3d0f93c"
  },
  {
    "url": "assets/js/vuejs-paginate.dbe911f4.js",
    "revision": "7f951b612890a473944bb228dfb049d4"
  },
  {
    "url": "categories/ChatGPT/index.html",
    "revision": "59c999c33eac8b1d6d2758670608b1b1"
  },
  {
    "url": "categories/claude/index.html",
    "revision": "51cb1e3c54fab905292353d6361b7db5"
  },
  {
    "url": "categories/index.html",
    "revision": "6d774a6d35322adae65aa0b975aa1695"
  },
  {
    "url": "categories/midjourney/index.html",
    "revision": "97727c5cf1e279010eec5c164e187a77"
  },
  {
    "url": "categories/onlyfans/index.html",
    "revision": "09cfe935d9921eef27c4a22889341c46"
  },
  {
    "url": "categories/WildCard/index.html",
    "revision": "f5814fff8c0c569fab1f41e6f28d6db8"
  },
  {
    "url": "chatGPT/chatgpt-rival-claude.html",
    "revision": "4edc05f935ef7232965d02a2b43b17e8"
  },
  {
    "url": "chatGPT/chatgpt.html",
    "revision": "93a06090e210dea0d29b0fcf6380a247"
  },
  {
    "url": "chatGPT/chatgpt5.html",
    "revision": "c7e023ac8a89d75da8de0da1ef1ceeb9"
  },
  {
    "url": "chatGPT/how-to-buy-gpt.html",
    "revision": "807b133c58eb677de365d01e721aca49"
  },
  {
    "url": "chatGPT/how-to-register-gpt.html",
    "revision": "79cd13811b638f6c37b0c249520e3dd2"
  },
  {
    "url": "chatGPT/how-to-solve-chatgpt-infor.html",
    "revision": "3bac24077bfd26c0e4116cadd79e81be"
  },
  {
    "url": "chatGPT/index.html",
    "revision": "7074f336f00520fc96a22d7fc27889e3"
  },
  {
    "url": "icon512_maskable.png",
    "revision": "5a66d85526bb4b2cd5a4b896d1722bec"
  },
  {
    "url": "icon512_rounded.png",
    "revision": "e1e58708a00163c1eeb6dd1c5a75888a"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "eb9aaa7ec05095e85233dc2d5a6103e0"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "d66087a31ec47252de304a6faf4f775c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "660049627622a5336d7f1fe4d226dc6b"
  },
  {
    "url": "index.html",
    "revision": "bddc5d8e4f82bd8bc6e2f41553088b2c"
  },
  {
    "url": "index.js",
    "revision": "d12e25e75ee6fbb583322f2c63530758"
  },
  {
    "url": "onlyfans/index.html",
    "revision": "444b5d4245eee66e2d9babfc059f8bda"
  },
  {
    "url": "sw.js",
    "revision": "499b65f3a976d2455a9b01816cc5e557"
  },
  {
    "url": "tag/ChatGPT Plus/index.html",
    "revision": "800f2a54d9af4dc242e5ee1208806ab8"
  },
  {
    "url": "tag/ChatGPT/index.html",
    "revision": "f15f14373699e720b8188dfec7662930"
  },
  {
    "url": "tag/claude3/index.html",
    "revision": "29f6c0242f3eddca8839b711a88a0a86"
  },
  {
    "url": "tag/index.html",
    "revision": "c67171670acd7806a8a95a78b06e6618"
  },
  {
    "url": "tag/midjourney/index.html",
    "revision": "6e691131be6d58354f29a36a745ec29a"
  },
  {
    "url": "tag/onlyfans/index.html",
    "revision": "918ed933aa822bfd4b57eb9be083bf78"
  },
  {
    "url": "tag/WildCard/index.html",
    "revision": "e3cf95563144e289cca863f6f12d82ce"
  },
  {
    "url": "tag/虚拟信用卡/index.html",
    "revision": "26bf8eac5b4f52e00866dcc28b01f811"
  },
  {
    "url": "timeline/index.html",
    "revision": "70f47594f27bddfd9d766099cf1439db"
  },
  {
    "url": "WildCard/index.html",
    "revision": "14b4d45c66b5d2de8c84e740307331e1"
  },
  {
    "url": "WildCard/something-about-wildcard.html",
    "revision": "c7f870c13b6b57e52b5ec128e625edde"
  },
  {
    "url": "WildCard/wildcard-subscribe-midjourney.html",
    "revision": "e86e356b8433c81a9750d6a972ae0b9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

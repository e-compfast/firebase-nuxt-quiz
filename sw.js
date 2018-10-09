importScripts('/firebase-nuxt-quiz/static/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/firebase-nuxt-quiz/static/app.db45462886a38b70a3c1.js",
    "revision": "0d86ffbdb4aedd09c894e5120f2af760"
  },
  {
    "url": "/firebase-nuxt-quiz/static/layouts/default.ea51cb69252f45388b2a.js",
    "revision": "48583a0c51f8605de595b64eb4c887cb"
  },
  {
    "url": "/firebase-nuxt-quiz/static/manifest.70f7497eae5a1a500fc0.js",
    "revision": "f0adabc3d344eadec4f9d14681a350ee"
  },
  {
    "url": "/firebase-nuxt-quiz/static/pages/auth.82d8d97a66a829dee799.js",
    "revision": "3efbccf5b8c30bead17aa9bfced749ef"
  },
  {
    "url": "/firebase-nuxt-quiz/static/pages/index.cf2349c4dd5e3b470f36.js",
    "revision": "6d81f9c90828265f8e5c990855d3827d"
  },
  {
    "url": "/firebase-nuxt-quiz/static/pages/pick-quiz/index.ae4c6a9ec856371c730e.js",
    "revision": "78db021bdc818a8d5e3051b735201365"
  },
  {
    "url": "/firebase-nuxt-quiz/static/pages/quiz/_quizname.f703ab7239d24a1afe26.js",
    "revision": "8bc2d21e43b32ba08f4faa70277b7fe0"
  },
  {
    "url": "/firebase-nuxt-quiz/static/pages/quiz/index.8b280bf49c5f82db849d.js",
    "revision": "067994f15c08df63eb647778e6f94300"
  },
  {
    "url": "/firebase-nuxt-quiz/static/vendor.0d3048b754e7e8b1ae16.js",
    "revision": "4d53dfe7fee5cfb3d2b2bcdbf428c0cc"
  }
], {
  "cacheId": "firebase-nuxt-quiz",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['https://fonts.googleapis.com/css?family=Lora|Ubuntu', 'https://fonts.gstatic.com/s/lora/v12/0QIvMX1D_JOuMwr7Iw.woff2', 'https://fonts.gstatic.com/s/ubuntu/v12/4iCs6KVjbNBYlgoKfw72.woff2', '/go.png', '/gui.png', '/php.png', '/reactivity.png', '/vue.png'])

workbox.precaching.precacheAndRoute(['/index.html'])

workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/firebase-nuxt-quiz/static/.*'), workbox.strategies.cacheFirst({}), 'GET')



// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/index.html'))
})



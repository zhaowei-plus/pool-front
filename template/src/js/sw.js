var cacheStorageKey = 'minimal-pwa-3';

var cacheList = [
  '/',
  "index.html",
  "main.css",
  "e.png",
  "pwa-fonts.png"
]

// 当浏览器解析完sw文件时，serviceworker内部触发install事件
self.addEventListener('install', function(e) {
  console.log('Cache event!')
  // 打开一个缓存空间，将相关需要缓存的资源添加到缓存里面
  e.waitUntil(
    caches.open(cacheStorageKey).then(function(cache) {
      console.log('Adding to Cache:', cacheList)
      return cache.addAll(cacheList)
    })
  )
})
var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/icon-store-512.png'
];

self.addEventListener('install',(e)=>{
  console.log('[Service Worker] Install');
  e.waitUntil(
      caches.open(cacheName).then((cache)=>{
          console.log('[Service Worker] Caching all files...');
          return cache.addAll(cacheFiles);
      })
    
  )
});

self.addEventListener('fetch',(e)=>{
    e.respondWith(
        //checkif the cache has the file
        caches.match(e.request).then(function(res){
            console.log('[Service Worker] fetchinng resource:'+ e.request.url)
            //res is the matchinng file if it exists in the cache
            return res
        })
    )
})
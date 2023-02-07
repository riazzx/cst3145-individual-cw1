var cacheName = "petstore-v1"
var cacheFiles = [
    'checkout.html',
    'products.js',
    'petstore.webmanifest',
    'images/animal.png',
    'images/product.png',
    'images/product2.png',
    'images/product3.png',
    'images/product4.jpg',
    'images/product5.jpg',
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install')
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files')
            return cache.addAll(cacheFiles)
        })
    )
})

self.addEventListener('fetch', (e) => {
    console.log('[Service Worker] Fetch resource' + e.request.url)
})
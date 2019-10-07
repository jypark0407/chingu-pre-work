self.addEventListener("install", async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    console.log('install event')
});

self.addEventListener("fetch", async event => {
    console.log('fetch event')
});

const cacheName = 'pwa-conf-v1';
const StaticAssets = [
    './',
    './index.html',
    './app.js',
    './style.css'
];

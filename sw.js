importScripts('https://cdn.westfultonhighschool.tk/js/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       'https://cdn.westfultonhighschool.tk/css/all.css',
       'https://cdn.westfultonhighschool.tk/js/all.js',
       '/sounds/airhorn.mp3'
     ]);
   })
 );
});
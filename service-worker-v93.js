/* Valuebet V93: installation support only. No fetch handler, so API calls always use the network. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(event){
  event.waitUntil((async function(){
    const keys=await caches.keys();
    await Promise.all(keys.filter(function(key){ return /^valuebet-|^vbt-/i.test(key); }).map(function(key){ return caches.delete(key); }));
    await self.clients.claim();
  })());
});

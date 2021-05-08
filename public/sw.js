//test ว่า install สำเร็จมั้ย
self.addEventListener("install", (event) => {
    console.log("SW is installing v1.2")
    //add things to cache
    event.waitUntil(
        caches.open('chatapp-v1.2')
            .then((cache) => { return cache.addAll(['/', '/index.html']) }
            ))
})

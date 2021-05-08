self.addEventListener("install", (event) => {
    //test ว่า install สำเร็จมั้ย
    console.log("SW is installing v1.2");
    //add things to cache
    event.waitUntil(
        caches.open('chatapp-v1.2')
            .then((cache) => { return cache.addAll(['/', '/index.html']) }
            ))
})

self.addEventListener("fetch", (event) => {
    caches.match(event.request.url) //see if cache matches with the request
        .then((res) => {
            if (res) {
                console.log("Intercepted with cache", res);
                return res //make cache work
            }

            return fetch(event.request); //if cache not match, use network
        })
})

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const options = {
        body: data.body,
        icon: data.icon,
        badge: data.badge
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

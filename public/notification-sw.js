/* eslint-disable prettier/prettier */
// public/notification-sw.js

self.addEventListener('push', function(event) {
    const data = event.data.json();
    const title = data.title;
    const options = {
      body: data.body,
      icon: '/notification-icon.png' // Replace with your notification icon
    };
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  });

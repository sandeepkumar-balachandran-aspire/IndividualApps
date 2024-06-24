/* eslint-disable prettier/prettier */
// public/notification-sw.js

self.addEventListener('push', function(event) {
  const data = event.data.json();
  const title = data.title || 'Default Title';
  const options = {
    body: data.body || 'Default Body',
    icon: '/notification-icon.png' // Replace with your notification icon
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
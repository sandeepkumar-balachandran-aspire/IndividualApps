/* eslint-disable prettier/prettier */
// src/notificationHub.js

const PUBLIC_VAPID_KEY = 'BEvv2vZPM0sgU7wIfC_7iqBurfxACETk1VEWojOVSzUHzubBnarXjVVvAV2NKkga3mTJXv80RI6v7KjXdjwbZCo'; // Your VAPID public key from Azure Notification Hub

// src/notificationHub.js

export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.register('/notification-sw.js');
    console.log('Service Worker registered:', registration);
    return registration;
  } else {
    console.error('Service Worker is not supported in this browser.');
  }
};

export const requestNotificationPermission = async (registration) => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });

    const subscriptionObject = {
      endpoint: subscription.endpoint,
      keys: {
        p256dh: arrayBufferToBase64(subscription.getKey('p256dh')),
        auth: arrayBufferToBase64(subscription.getKey('auth'))
      }
    };
    console.log('Push subscription:', subscriptionObject);
    return subscriptionObject;
  } else {
    console.error('Notification permission denied.');
  }
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return new Uint8Array(rawData.split('').map((char) => char.charCodeAt(0)));
};

const arrayBufferToBase64 = (buffer) => {
  const binary = String.fromCharCode.apply(null, new Uint8Array(buffer));
  return btoa(binary);
};
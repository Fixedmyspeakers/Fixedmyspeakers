import { getMessaging, getToken } from "firebase/messaging";

// Initialize Firebase App first...

const messaging = getMessaging();

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    navigator.serviceWorker.ready.then((registration) => {
      getToken(messaging, {
        vapidKey: "BPKg-ZUxoKIoLaWU_SAAAFNfuF99elQc-AXoeNIV8z2qoGjJGGj7SemR1Plbr4nXxeP82PrbwjcWefQuMQF7xWw",
        serviceWorkerRegistration: registration,
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          // Send this token to your server or save it
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.error('An error occurred while retrieving token. ', err);
      });
    });
  } else {
    console.log('Notification permission denied');
  }
});
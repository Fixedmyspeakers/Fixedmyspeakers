// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDpIY1tJ9hJQ_Dmnz6HEBu1-gkyhMbl7D8",
  authDomain: "speakercleanerapp.firebaseapp.com",
  projectId: "speakercleanerapp",
  storageBucket: "speakercleanerapp.firebasestorage.app",
  messagingSenderId: "757487409389",
  appId: "1:757487409389:web:15a6b21a17a973dace14e4",
  measurementId: "G-GCR370HQ7B"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // optional icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
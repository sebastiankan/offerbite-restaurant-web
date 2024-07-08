importScripts("https://www.gstatic.com/firebasejs/10.11.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyDJJ-bPhzxQlHsQ8u4BTv8AuIyhS99FS0A",
    authDomain: "offerbite-restaurant.firebaseapp.com",
    projectId: "offerbite-restaurant",
    storageBucket: "offerbite-restaurant.appspot.com",
    messagingSenderId: "103013827054",
    appId: "1:103013827054:web:51336faec6768910f28eff",
    measurementId: "G-NGP86HY40N"
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
    console.log("onBackgroundMessage", m);
});
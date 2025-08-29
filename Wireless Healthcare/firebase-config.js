// firebase-config.js (Compat style)
const firebaseConfig = {
  apiKey: "AIzaSyAr7ZxKVWHtzTKa6ImWbNCIfjmnIbqqFpM",
  authDomain: "wirelesshealthcare-a9812.firebaseapp.com",
  projectId: "wirelesshealthcare-a9812",
  storageBucket: "wirelesshealthcare-a9812.appspot.com", // ✅ fixed here
  messagingSenderId: "14017133915",
  appId: "1:14017133915:web:7c9735999bc5bb1e3eee7e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

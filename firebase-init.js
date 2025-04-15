// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// Optional: Add auth, firestore, etc.
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCM7XYdsPJUxAae4jsJn2BHIbwmaeHdqtQ",
  authDomain: "annita-application.firebaseapp.com",
  projectId: "annita-application",
  storageBucket: "annita-application.firebasestorage.app",
  messagingSenderId: "677427562349",
  appId: "1:677427562349:web:651fb356c6d26ccf4afc64",
  measurementId: "G-783ZEKXQ6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export initialized services
export const auth = getAuth(app);
export const db = getFirestore(app);

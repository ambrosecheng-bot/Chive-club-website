// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMRSzAyIbs5qZr-o4qJwWGDwGAHD9Co0",
  authDomain: "chive-club-database.firebaseapp.com",
  projectId: "chive-club-database",
  storageBucket: "chive-club-database.firebasestorage.app",
  messagingSenderId: "571081958328",
  appId: "1:571081958328:web:0e9dd2009adf6276c5254d",
  measurementId: "G-XP6H8490X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

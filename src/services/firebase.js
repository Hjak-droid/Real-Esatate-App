// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7FoXqLoFF2IVtJQeQzbTEnOJG6hUwNWc",
  authDomain: "real-estate-app-99c4e.firebaseapp.com",
  projectId: "real-estate-app-99c4e",
  storageBucket: "real-estate-app-99c4e.firebasestorage.app",
  messagingSenderId: "412781075285",
  appId: "1:412781075285:web:256b5acc0574b60a566ddc",
  measurementId: "G-T69W6J5ZXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
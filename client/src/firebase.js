// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a949e.firebaseapp.com",
  projectId: "mern-estate-a949e",
  storageBucket: "mern-estate-a949e.appspot.com",
  messagingSenderId: "849928111104",
  appId: "1:849928111104:web:fd6d36a45b68c94ae704e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

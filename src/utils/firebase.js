// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-fbff3.firebaseapp.com",
  projectId: "netflixgpt-fbff3",
  storageBucket: "netflixgpt-fbff3.firebasestorage.app",
  messagingSenderId: "518735065094",
  appId: "1:518735065094:web:5fe156ccaf5ce0b8e49387",
  measurementId: "G-6L2D6PZGN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxOKAJ1TiBtCbCtOd9gtnefa5coUUAYT8",
  authDomain: "inventory-62234.firebaseapp.com",
  projectId: "inventory-62234",
  storageBucket: "inventory-62234.appspot.com",
  messagingSenderId: "30137799361",
  appId: "1:30137799361:web:e0d12a104a0c6cc181fa40",
  measurementId: "G-F3TJ2LPHS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
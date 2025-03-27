// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsnVWjbKFD-NiSw_Ly2VNUOLj7vGaoUI",
  authDomain: "healthysmile-2024.firebaseapp.com",
  projectId: "healthysmile-2024",
  storageBucket: "healthysmile-2024.firebasestorage.app",
  messagingSenderId: "1013067253187",
  appId: "1:1013067253187:web:b71167678ecf408258a976",
  measurementId: "G-JMBZR0KY18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
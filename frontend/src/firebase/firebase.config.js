// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm5CFzkrgrb4syL4iE9DZ96fnI6hS_c1s",
  authDomain: "mern-book-inventory-f5b3b.firebaseapp.com",
  projectId: "mern-book-inventory-f5b3b",
  storageBucket: "mern-book-inventory-f5b3b.appspot.com",
  messagingSenderId: "494150353968",
  appId: "1:494150353968:web:c088b68857ab3088d719f5",
  measurementId: "G-97XJERDN6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
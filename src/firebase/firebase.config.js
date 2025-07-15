// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN3JqzjjFGsjUSFkHTVMv71TUeKnGVo-U",
  authDomain: "books-aaedf.firebaseapp.com",
  projectId: "books-aaedf",
  storageBucket: "books-aaedf.firebasestorage.app",
  messagingSenderId: "701614533382",
  appId: "1:701614533382:web:8ae41127f59cff3bf4cc87"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

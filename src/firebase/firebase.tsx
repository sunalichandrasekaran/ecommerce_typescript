// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvCbjs1cGVFY42zLtJHV50i5ggPbo6xHw",
  authDomain: "typescript-ecommerce-2c382.firebaseapp.com",
  projectId: "typescript-ecommerce-2c382",
  storageBucket: "typescript-ecommerce-2c382.appspot.com",
  messagingSenderId: "1021703674215",
  appId: "1:1021703674215:web:d6b6813665f1f67d2877c2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

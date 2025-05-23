// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWqH7LaAjHyvFQQGrl7CrbwuYVJId0xow",
  authDomain: "productscart-e9d22.firebaseapp.com",
  projectId: "productscart-e9d22",
  storageBucket: "productscart-e9d22.firebasestorage.app",
  messagingSenderId: "430632283367",
  appId: "1:430632283367:web:ead61f3c92cb549febc642",
  measurementId: "G-T0NZ5C59KK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export default app;

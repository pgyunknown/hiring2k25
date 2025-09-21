// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkWiUMEeF9WAdJIPxC1Ii1yAb-ix-NRo4",
  authDomain: "audtions-website.firebaseapp.com",
  databaseURL: "https://audtions-website-default-rtdb.firebaseio.com",
  projectId: "audtions-website",
  storageBucket: "audtions-website.firebasestorage.app",
  messagingSenderId: "263415406624",
  appId: "1:263415406624:web:8ec594dfaf160c63b39c45",
  measurementId: "G-JK3LQV24F1",
  databaseURL: "https://audtions-website-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
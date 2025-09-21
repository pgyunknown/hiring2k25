// src/firebase.js
// import { initializeApp } from "fire";

const firebaseConfig = {
  apiKey: "AIzaSyAkWiUMEeF9WAdJIPxC1Ii1yAb-ix-NRo4",
  authDomain: "audtions-website.firebaseapp.com",
  databaseURL: "https://audtions-website-default-rtdb.firebaseio.com",
  projectId: "audtions-website",
  storageBucket: "audtions-website.firebasestorage.app",
  messagingSenderId: "263415406624",
  appId: "1:263415406624:web:8ec594dfaf160c63b39c45",
  measurementId: "G-JK3LQV24F1",
};

const app = initializeApp(firebaseConfig);

export { app };

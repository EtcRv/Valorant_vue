import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnHRCgFL4iWTHR5SfsZdc_iYemxIJlSlE",
  authDomain: "valorant-ad27c.firebaseapp.com",
  databaseURL:
    "https://valorant-ad27c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "valorant-ad27c",
  storageBucket: "valorant-ad27c.appspot.com",
  messagingSenderId: "449455780097",
  appId: "1:449455780097:web:20a821b69a2a5acd526b00",
  measurementId: "G-L3SJ7EYCE3",
};

export const firebaseApp = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4s1I4M5Bie7Vg_t-Q21tz4tc8wFT4nUw",
  authDomain: "to-dos-ef115.firebaseapp.com",
  databaseURL: "https://to-dos-ef115-default-rtdb.firebaseio.com",
  projectId: "to-dos-ef115",
  storageBucket: "to-dos-ef115.appspot.com",
  messagingSenderId: "568418143675",
  appId: "1:568418143675:web:1e829ddcac44e46f0f489e",
  measurementId: "G-JFZQY68HYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

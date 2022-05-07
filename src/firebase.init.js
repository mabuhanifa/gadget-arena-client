// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaVY8GuX6QUUSqd1Lqj55exVbHiHIzPiU",
  authDomain: "mern-assignment-01.firebaseapp.com",
  projectId: "mern-assignment-01",
  storageBucket: "mern-assignment-01.appspot.com",
  messagingSenderId: "381949505270",
  appId: "1:381949505270:web:54a59465c64b5fc47906d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
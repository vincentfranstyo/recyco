import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyAItJeVK7kUKkYMNfQihEzU2FnZsUYiND0",
  authDomain: "recyco-ppam.firebaseapp.com",
  projectId: "recyco-ppam",
  storageBucket: "recyco-ppam.appspot.com",
  messagingSenderId: "865396782019",
  appId: "1:865396782019:web:ffc3d1ff1921fc7e434376",
  measurementId: "G-2WH8ZFT45K"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAItJeVK7kUKkYMNfQihEzU2FnZsUYiND0",
  authDomain: "recyco-ppam.firebaseapp.com",
  projectId: "recyco-ppam",
  storageBucket: "recyco-ppam.appspot.com",
  messagingSenderId: "865396782019",
  appId: "1:865396782019:web:ffc3d1ff1921fc7e434376",
  measurementId: "G-2WH8ZFT45K"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const FIRESTORE = getFirestore(FIREBASE_APP);

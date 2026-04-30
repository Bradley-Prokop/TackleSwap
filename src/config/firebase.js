// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGGqACzLW_AzZaN0wrb_S_EGrcj3qvUog",
  authDomain: "tackle-swap-3a8d9.firebaseapp.com",
  projectId: "tackle-swap-3a8d9",
  storageBucket: "tackle-swap-3a8d9.firebasestorage.app",
  messagingSenderId: "721592703255",
  appId: "1:721592703255:web:cbcaa26013994dbbfe3f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize FireStore
export const db = getFirestore(app);
//Initialize Auth
export const auth = getAuth(app);


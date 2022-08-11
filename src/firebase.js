// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOHXCWa2d6wlIH-66uRfEQIjMfS4ND_Sk",
  authDomain: "disney-clone-f4aeb.firebaseapp.com",
  projectId: "disney-clone-f4aeb",
  storageBucket: "disney-clone-f4aeb.appspot.com",
  messagingSenderId: "275486830296",
  appId: "1:275486830296:web:c1e6a7c1e0be582686f1ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider(auth);
export const storage = getStorage(app);

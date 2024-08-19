// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hackathon-research-hub.firebaseapp.com",
  projectId: "hackathon-research-hub",
  storageBucket: "hackathon-research-hub.appspot.com",
  messagingSenderId: "68417000893",
  appId: "1:68417000893:web:0bff4064668bb949f56ed4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
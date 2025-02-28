import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaR206rGqiSyRJdSSaZ_eGZvzaij4pc-0",
  authDomain: "blogs-495d5.firebaseapp.com",
  projectId: "blogs-495d5",
  storageBucket: "blogs-495d5.firebasestorage.app",
  messagingSenderId: "313610416793",
  appId: "1:313610416793:web:c0669cefdc66b8dc577e08",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

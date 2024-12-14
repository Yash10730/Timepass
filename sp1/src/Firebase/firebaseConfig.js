// firebaseConfig.jsx
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration for your app
const firebaseConfig = {
  apiKey: "AIzaSyC2nBPL-LCpSh9SDo65pjV3kc-IXdaRwNY",
  authDomain: "campusfood-f3a7f.firebaseapp.com",
  projectId: "campusfood-f3a7f",
  storageBucket: "campusfood-f3a7f.appspot.com",
  messagingSenderId: "756507932817",
  appId: "1:756507932817:web:87ab4f27a1566e68562730",
  measurementId: "G-9PBDWYRW81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);  

// Export auth object to use Firebase authentication elsewhere in the app
export { auth };
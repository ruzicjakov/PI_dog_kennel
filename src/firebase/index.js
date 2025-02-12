// Import Firebase SDK components
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGvWycN3B8Ab4KnXTLxAjum--t89Mxi9o",
  authDomain: "dog-kennel-13896.firebaseapp.com",
  projectId: "dog-kennel-13896",
  storageBucket: "dog-kennel-13896.firebasestorage.app",
  messagingSenderId: "1001427345023",
  appId: "1:1001427345023:web:cf7930056bf34056a4e94a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth };

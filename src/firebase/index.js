// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export {db};
// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpR0RrbOAtKyQZRf3_FB76wU9Bj5OpU08",
  authDomain: "chulha-ghar.firebaseapp.com",
  projectId: "chulha-ghar",
  storageBucket: "chulha-ghar.firebasestorage.app",
  messagingSenderId: "222955793442",
  appId: "1:222955793442:web:cea96b443e963a07d1ee7b",
  measurementId: "G-FM1ERDMTX0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, collection, getDocs, addDoc, doc, setDoc, deleteDoc };

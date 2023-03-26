import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp2q660fRxpFXq5fNeSJSKJGE14ATX4jw",
  authDomain: "chat-22508.firebaseapp.com",
  projectId: "chat-22508",
  storageBucket: "chat-22508.appspot.com",
  messagingSenderId: "484855750002",
  appId: "1:484855750002:web:1ae507392ceb2cd07e51eb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
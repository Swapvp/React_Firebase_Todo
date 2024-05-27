import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG1kwwxC1K2VAc0wjPEBv0XKzJ8QwaoKM",
  authDomain: "react-firebase-todo-9697a.firebaseapp.com",
  projectId: "react-firebase-todo-9697a",
  storageBucket: "react-firebase-todo-9697a.appspot.com",
  messagingSenderId: "798602917012",
  appId: "1:798602917012:web:8ebd0642a3be070cd73081",
  measurementId: "G-0RL1Y8EP83",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

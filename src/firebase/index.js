// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh4QQG6uO-I4DDRM4_FcTAQ_FT9FShnfA",
  authDomain: "sepe-copao-ifc.firebaseapp.com",
  databaseURL: "https://sepe-copao-ifc-default-rtdb.firebaseio.com",
  projectId: "sepe-copao-ifc",
  storageBucket: "sepe-copao-ifc.appspot.com",
  messagingSenderId: "621681579668",
  appId: "1:621681579668:web:246a3aa2f906a744844681",
  measurementId: "G-92609F190W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
};
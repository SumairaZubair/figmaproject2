// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9UtJX5ht5wl0zuma3ysZTEXqFoS1iA8",
  authDomain: "cottage-auth.firebaseapp.com",
  projectId: "cottage-auth",
  storageBucket: "cottage-auth.appspot.com",
  messagingSenderId: "355701978328",
  appId: "1:355701978328:web:3261cb735d45763eb793ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// export const firestore = firebase.firestore
export {app,auth};


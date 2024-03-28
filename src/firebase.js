// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // Import firestore if you're using it

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsUo4pDd1HtHlZ3z5lS8hnhFJcSPv143A",
  authDomain: "clone-c303f.firebaseapp.com",
  projectId: "clone-c303f",
  storageBucket: "clone-c303f.appspot.com",
  messagingSenderId: "285981407146",
  appId: "1:285981407146:web:c63cdc427e655af2f05dd3",
  measurementId: "G-9LZ57EZ95Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); // Create Google Auth Provider instance

export { db, auth, googleAuthProvider };

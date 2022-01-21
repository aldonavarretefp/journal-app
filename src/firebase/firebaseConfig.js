
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsE_ZvmIfPZyvAQEBqBJBzGsE7ByThtX8",
    authDomain: "react-app-journal-459fc.firebaseapp.com",
    projectId: "react-app-journal-459fc",
    storageBucket: "react-app-journal-459fc.appspot.com",
    messagingSenderId: "835019481420",
    appId: "1:835019481420:web:87e5637e711a1d77bd6fe9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};
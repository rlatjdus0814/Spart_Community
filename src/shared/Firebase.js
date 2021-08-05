import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAi2iBzNiGlRk2et-9SMPunlFpHC3721fA",
  authDomain: "image-community-512aa.firebaseapp.com",
  projectId: "image-community-512aa",
  storageBucket: "image-community-512aa.appspot.com",
  messagingSenderId: "580111465685",
  appId: "1:580111465685:web:242a62cffdcf4c5ebd765c",
  measurementId: "G-B3RYB6TN1H"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();

export {auth, apiKey, firestore};
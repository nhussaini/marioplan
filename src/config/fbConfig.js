import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyD_u6Dm7h2qSNqvw088jfXX_ggPC_W9f_s",
    authDomain: "marioplan-68c96.firebaseapp.com",
    databaseURL: "https://marioplan-68c96.firebaseio.com",
    projectId: "marioplan-68c96",
    storageBucket: "marioplan-68c96.appspot.com",
    messagingSenderId: "19934766431",
    appId: "1:19934766431:web:f1f43c9efb451e376f02ea",
    measurementId: "G-7H46HJ3XFF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;
  //firebase.analytics();
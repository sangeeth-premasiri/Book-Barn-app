// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCY_8WQ0JFbucUTIW8xDcq86IqIM-kLVnw",
    authDomain: "book-barn.firebaseapp.com",
    databaseURL: "https://book-barn.firebaseio.com",
    projectId: "book-barn",
    storageBucket: "book-barn.appspot.com",
    messagingSenderId: "760248784451",
    appId: "1:760248784451:web:c39c99375fc6356b2ca6f6",
    measurementId: "G-2R7XRFHSMR"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
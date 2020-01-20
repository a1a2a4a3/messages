import firebase from 'firebase/app';
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCr8B6t4GvWg8iZaI-s3gNTmOa2qPQZR8M",
  authDomain: "messages-3a849.firebaseapp.com",
  databaseURL: "https://messages-3a849.firebaseio.com",
  projectId: "messages-3a849",
  storageBucket: "messages-3a849.appspot.com",
  messagingSenderId: "735236987017",
  appId: "1:735236987017:web:c2bfe78e8986e8c6f14e58",
  measurementId: "G-RKGWHCRRDV"
});

export default firebase.firestore()
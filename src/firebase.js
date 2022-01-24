import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAv-DUZiFVeBzDzPBA6Uduph-KQG5-q97M",
  authDomain: "e-commerce-b99ca.firebaseapp.com",
  projectId: "e-commerce-b99ca",
  storageBucket: "e-commerce-b99ca.appspot.com",
  messagingSenderId: "869353573919",
  appId: "1:869353573919:web:4b223c67130bc4fb894f2a",
  measurementId: "G-SPT4RQHGHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

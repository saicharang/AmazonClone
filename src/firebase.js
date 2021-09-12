import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEP4DUHzFSKQeWE2bMcKkTl1yAqIqwafY",
  authDomain: "clone-9055c.firebaseapp.com",
  databaseURL: "https://clone-9055c.firebaseio.com",
  projectId: "clone-9055c",
  storageBucket: "clone-9055c.appspot.com",
  messagingSenderId: "729125731604",
  appId: "1:729125731604:web:0528aecc8368cce0bc5601",
  measurementId: "G-PMK33WQMRN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

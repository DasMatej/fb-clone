// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDHZyzWzoCV3mCf50T9n0y7HRkKmmo4rwU",
    authDomain: "facebook-clone-91059.firebaseapp.com",
    projectId: "facebook-clone-91059",
    storageBucket: "facebook-clone-91059.appspot.com",
    messagingSenderId: "990752412107",
    appId: "1:990752412107:web:cfe159a342cd2ccd3aa64e",
    measurementId: "G-33CQFJL3CC"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;


import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9sGYImQHCAsqO2CqEReyhfsDnUZEwx78",
    authDomain: "crwn-db-afe2b.firebaseapp.com",
    databaseURL: "https://crwn-db-afe2b.firebaseio.com",
    projectId: "crwn-db-afe2b",
    storageBucket: "crwn-db-afe2b.appspot.com",
    messagingSenderId: "574365617218",
    appId: "1:574365617218:web:d26e6e01b3bc783348f1db",
    measurementId: "G-F7RCL706QS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
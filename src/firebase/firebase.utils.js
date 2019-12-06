import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAPaVSu-tVXlZyr0bOM6CCIqOZGgk2j-Gk",
    authDomain: "crwn-db-808f1.firebaseapp.com",
    databaseURL: "https://crwn-db-808f1.firebaseio.com",
    projectId: "crwn-db-808f1",
    storageBucket: "crwn-db-808f1.appspot.com",
    messagingSenderId: "732886263247",
    appId: "1:732886263247:web:a994d05ba1bbbb976d9eba",
    measurementId: "G-60C72PJ0XH"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC_xC77bLPwYbIpp6_RxpydlYTcW4oC0aM",
    authDomain: "ecomdb-b4844.firebaseapp.com",
    projectId: "ecomdb-b4844",
    storageBucket: "ecomdb-b4844.appspot.com",
    messagingSenderId: "2900269689",
    appId: "1:2900269689:web:9d7ee1e75e9af338de92a8",
    measurementId: "G-XLQF9HFT7S"
  };

  firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
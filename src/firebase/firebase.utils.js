import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDUZxeslIjTa-gisYe0yjntCpIIX0CFvTg",
  authDomain: "crown-db-4d6ff.firebaseapp.com",
  databaseURL: "https://crown-db-4d6ff.firebaseio.com",
  projectId: "crown-db-4d6ff",
  storageBucket: "crown-db-4d6ff.appspot.com",
  messagingSenderId: "967709818600",
  appId: "1:967709818600:web:4f710836bc3e166dcc935d",
  measurementId: "G-GRFGDG7WYN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDkCxLVoGObEPlNm8ygzEznUdLTKiOGoFg',
  authDomain: 'lala-lee-blog.firebaseapp.com',
  databaseURL: 'https://lala-lee-blog.firebaseio.com',
  projectId: 'lala-lee-blog',
  storageBucket: 'lala-lee-blog.appspot.com',
  messagingSenderId: '665454467795',
  appId: '1:665454467795:web:c2f834cfa6c572027f9226',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

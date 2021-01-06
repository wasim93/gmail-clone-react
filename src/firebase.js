import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCe_DD65MiefMCZ0LWTQKfDWNCxyZ2zIHg',
  authDomain: 'clone-78756.firebaseapp.com',
  projectId: 'clone-78756',
  storageBucket: 'clone-78756.appspot.com',
  messagingSenderId: '501734731127',
  appId: '1:501734731127:web:dcfe24d3800d182ec38572',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

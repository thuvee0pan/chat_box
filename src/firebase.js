import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsR5qACa7F3QFzHUkxDAQH7swkzvui8YE",
  authDomain: "lucifer-dev-ea911.firebaseapp.com",
  databaseURL: "https://lucifer-dev-ea911.firebaseio.com",
  projectId: "lucifer-dev-ea911",
  storageBucket: "lucifer-dev-ea911.appspot.com",
  messagingSenderId: "828807022062",
  appId: "1:828807022062:web:49fde60bb121f9cf3cbaff",
  measurementId: "G-0KYNTZE1QF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

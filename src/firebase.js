import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZ74GzJatLbzfdHdrqzX90gbXy0pVFGtY",
  authDomain: "whatsapp-clone-c57de.firebaseapp.com",
  projectId: "whatsapp-clone-c57de",
  storageBucket: "whatsapp-clone-c57de.appspot.com",
  messagingSenderId: "754277755178",
  appId: "1:754277755178:web:235b7a0646dfff42f11653",
  measurementId: "G-F398VDQ4D4",
};
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;

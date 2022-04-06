import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyCaTbGmJXbaOxBm06D4OrvO9KsdKE0Ghx0",
    authDomain: "neuroconnect-38b8b.firebaseapp.com",
    projectId: "neuroconnect-38b8b",
    storageBucket: "neuroconnect-38b8b.appspot.com",
    messagingSenderId: "359700849768",
    appId: "1:359700849768:web:21de1555e1f801efbac7dd",
    measurementId: "G-1E0ZW4MXHS"
})
export const auth = app.auth()
export const db = getFirestore();
export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBh-3k7HUGrvYKmiHjno1BPI5YIoJ2Mu0s',
  authDomain: 'tan-patisserie.firebaseapp.com',
  projectId: 'tan-patisserie',
  storageBucket: 'tan-patisserie.appspot.com',
  messagingSenderId: '138130441308',
  appId: '1:138130441308:web:c574711d29fbafdb1f9299',
  databaseURL: 'https://tan-patisserie-default-rtdb.asia-southeast1.firebasedatabase.app'
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(appFirebase);

export default database
// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth,signInWithEmailAndPassword,signOut} from "firebase/auth"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD79cnW3ll1hxPgkWUnLFHlEnNRQMG0d4w",
  authDomain: "esp-firebase-demo-aab41.firebaseapp.com",
  databaseURL: "https://esp-firebase-demo-aab41-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esp-firebase-demo-aab41",
  storageBucket: "esp-firebase-demo-aab41.appspot.com",
  messagingSenderId: "966782043727",
  appId: "1:966782043727:web:ea6cbd107e8b3a014d4c3a",
  measurementId: "G-VRPQZY4SLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const login = async (email,password) =>{
  try {
      await signInWithEmailAndPassword(auth,email,password)

  } catch (error) {
      console.error(error)
      alert(error.message)
  }
}

const logOut = ()=>{
  signOut(auth)
}

export {login,logOut}

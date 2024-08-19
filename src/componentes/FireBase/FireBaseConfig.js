// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GithubAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMLM-3xgQH8-Fkaw4dpIBOa1RUlVyKUic",
  authDomain: "test2-4ee44.firebaseapp.com",
  projectId: "test2-4ee44",
  storageBucket: "test2-4ee44.appspot.com",
  messagingSenderId: "741440732701",
  appId: "1:741440732701:web:ae44a50396122a4d7d50f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GithubAuthProvider();

export {auth, provider}
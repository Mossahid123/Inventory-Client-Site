// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZUCqyQP7Gy7ZIwulcGQ1g6-LZc_Ahzb4",
  authDomain: "assingment-11-hussain.firebaseapp.com",
  projectId: "assingment-11-hussain",
  storageBucket: "assingment-11-hussain.appspot.com",
  messagingSenderId: "198555301380",
  appId: "1:198555301380:web:584f09000db6ea5ea76751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default(auth);


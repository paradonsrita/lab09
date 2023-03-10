// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6AYF2_E7Tit0dOUrXiPlqMnJ5G10lLCg",
  authDomain: "lab09-e5ddf.firebaseapp.com",
  projectId: "lab09-e5ddf",
  storageBucket: "lab09-e5ddf.appspot.com",
  messagingSenderId: "151824082132",
  appId: "1:151824082132:web:d8d2feb69c330017b40741",
  measurementId: "G-YCFN21J7MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {app, analytics};
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxynsh6jZVj-34qluHTb_OjwWBpqgHWOM",
  authDomain: "simple-notes-firebase-c9ad9.firebaseapp.com",
  projectId: "simple-notes-firebase-c9ad9",
  storageBucket: "simple-notes-firebase-c9ad9.appspot.com",
  messagingSenderId: "476575360600",
  appId: "1:476575360600:web:082dceb27f7c05275d0c2d",
  measurementId: "G-TML76F97KJ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default auth;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_projectId",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "youd_messagingSenderId",
  appId: "your_appId",
  measurementId: "your_measurementId",
  databaseURL:
    "your_databaseURL",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getDatabase(app);
// const analytics = getAnalytics(app);

export default auth;

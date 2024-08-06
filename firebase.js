// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjgu3C6XZFWTk7AzS-fMg8sPKKh0Ic6YM",
  authDomain: "spacex-901a0.firebaseapp.com",
  projectId: "spacex-901a0",
  storageBucket: "spacex-901a0.appspot.com",
  messagingSenderId: "492785737145",
  appId: "1:492785737145:web:ba65ea9af53f397c9eaa68",
  measurementId: "G-CKM2V06EXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
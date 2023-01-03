// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXEU-oUNSbuyP-ZupzRIozefBnbWoqG1U",
  authDomain: "przybornik-af985.firebaseapp.com",
  projectId: "przybornik-af985",
  storageBucket: "przybornik-af985.appspot.com",
  messagingSenderId: "67341035879",
  appId: "1:67341035879:web:c5ba8ffcf0d87eda4d67c2",
  measurementId: "G-HZSRZB6XFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics
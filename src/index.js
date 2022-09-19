// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDEr3oKezXcerc2JdDxsK5ll9RrQWsdh0",
  authDomain: "rikkeichat-c799e.firebaseapp.com",
  projectId: "rikkeichat-c799e",
  storageBucket: "rikkeichat-c799e.appspot.com",
  messagingSenderId: "848490086102",
  appId: "1:848490086102:web:a868f9df43faf383b09377",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// setActiveScreen("loginPage");
// setActiveScreen("chatPage");

setActiveScreen("registerPage");
// setActiveScreen("resetPass");

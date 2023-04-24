// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZmMbTQ3RWK1X9SacJ3-QxdoIlmNm_NEA",
  authDomain: "loafir.firebaseapp.com",
  projectId: "loafir",
  storageBucket: "loafir.appspot.com",
  messagingSenderId: "501420589929",
  appId: "1:501420589929:web:dccb2a9914de6f21fe33f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
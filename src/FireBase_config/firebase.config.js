// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQJyGjmAlkw88ySGOWp46twt_4af05AWs",
    authDomain: "b9-a9-real-estate-27f5a.firebaseapp.com",
    projectId: "b9-a9-real-estate-27f5a",
    storageBucket: "b9-a9-real-estate-27f5a.appspot.com",
    messagingSenderId: "993201751207",
    appId: "1:993201751207:web:05e8e57b2349de2f80c782"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTCb5EP3qBZ0Q6HJLdJHbcFDj9PfVmUVw",
  authDomain: "rudalph-portfolio-website.firebaseapp.com",
  projectId: "rudalph-portfolio-website",
  storageBucket: "rudalph-portfolio-website.appspot.com",
  messagingSenderId: "234908438785",
  appId: "1:234908438785:web:b0b9765a00722171758b00",
  measurementId: "G-3WRN9CCML4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

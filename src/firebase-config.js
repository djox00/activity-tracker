import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBndUOOhw1UUgSsZ_IvOKPwbdpSoNzY1vc",
  authDomain: "activity-tracker-cdb6d.firebaseapp.com",
  projectId: "activity-tracker-cdb6d",
  storageBucket: "activity-tracker-cdb6d.appspot.com",
  messagingSenderId: "1088981649719",
  appId: "1:1088981649719:web:e155a74a35f4f53500f2b2",
  measurementId: "G-N6VPKPZVD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
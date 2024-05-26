// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1wvSgCiR-HlIcOup4gKFFn2HDBCUqr_M",
  authDomain: "jesuscanhelpministry.firebaseapp.com",
  projectId: "jesuscanhelpministry",
  storageBucket: "jesuscanhelpministry.appspot.com",
  messagingSenderId: "216429274187",
  appId: "1:216429274187:web:8f238d46089544cbe599ce",
  measurementId: "G-377MNBHV6P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp
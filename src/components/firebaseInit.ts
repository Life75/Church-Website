import {initializeApp} from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGLmQ7jN8JMhAitP7bQSlcoYCU-GjrI1U",
    authDomain: "vuefs-prod-74bfe.firebaseapp.com",
    projectId: "vuefs-prod-74bfe",
    storageBucket: "vuefs-prod-74bfe.appspot.com",
    messagingSenderId: "484642853077",
    appId: "1:484642853077:web:9e9b215c3a73ff13b9125c",
    measurementId: "G-JZMDSHPRG5"
  };
  
  // Initialize Firebase

const initApp = initializeApp(firebaseConfig);


export default initApp 

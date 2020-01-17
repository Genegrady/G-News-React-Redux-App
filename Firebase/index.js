import firebase from "firebase/app";
import "firebase/storage";
 
 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmvLQTdYNg4Yzqr6U2ZffxywugzysZziE",
    authDomain: "g-news-image-uploader.firebaseapp.com",
    databaseURL: "https://g-news-image-uploader.firebaseio.com",
    projectId: "g-news-image-uploader",
    storageBucket: "g-news-image-uploader.appspot.com",
    messagingSenderId: "878375642688",
    appId: "1:878375642688:web:1e082f33a7ca211954a1a5",
    measurementId: "G-R715NCNSDX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const storage = firebase.storage()
export  {
   storage, firebase as default
 }
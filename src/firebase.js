import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoszdXRDYSSu4XxbEeCU4jvd5QFzU0urQ",
  authDomain: "myflix-cd750.firebaseapp.com",
  databaseURL: "https://myflix-cd750.firebaseio.com",
  projectId: "myflix-cd750",
  storageBucket: "myflix-cd750.appspot.com",
  messagingSenderId: "632415789315",
  appId: "1:632415789315:web:7db4029a05c1db5e8cc936",
  measurementId: "G-E3JM2H6TRS",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const facebookLoginProvider = new firebase.auth.FacebookAuthProvider();

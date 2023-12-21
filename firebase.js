// Import the functions you need from the SDKs you need
// import firebase from 'firebase'
import firebase from 'firebase/app'
import firestore from 'firebase/app'

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB7nvKnDwYAGRDKDpW0ig6HVm4_Xw2fgA",
  authDomain: "insta-clone-react-native-2b6ee.firebaseapp.com",
  projectId: "insta-clone-react-native-2b6ee",
  storageBucket: "insta-clone-react-native-2b6ee.appspot.com",
  messagingSenderId: "1054162152102",
  appId: "1:1054162152102:web:31e06e493e23fb04cd6267",
  measurementId: "G-FNGHDMDN1X"
};

// Initialize Firebase
!firebaseConfig.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore();

export { firebase, db }
// export { firebase };

// const analytics = getAnalytics(app);



// To be pasted in firebase rules

// rules_version = '2';
// service cloud.firestore {
// 	match /databases/{database}/documents {
// 	function userIsAuthenticated () {
// 		return request. auth!= null;
//   }

// 	// security rule for group collection ('posts')
// 	match /{path=**}/posts/{postId} {
// 		allow read, write: if userIsAuthenticated() ;
//   }
// 	match /users/ {userId} {
// 		allow read, write: if userIsAuthenticated() ;
//     }
//   }
// }


// https://www.youtube.com/watch?v=UbixZZDjrdU&t=2810s
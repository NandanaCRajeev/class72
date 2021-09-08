import firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyDmx7OBL6gGPNo6TD1HXx0O9g8MGnfhPg4",
  authDomain: "wilyapp-a400b.firebaseapp.com",
  databaseURL: "https://wilyapp-a400b.firebaseio.com",
  projectId: "wilyapp-a400b",
  storageBucket: "wilyapp-a400b.appspot.com",
  messagingSenderId: "283752969653",
  appId: "1:283752969653:web:576952001df9529c9595fc"
}; 
 
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
 

  export default firebase.firestore();

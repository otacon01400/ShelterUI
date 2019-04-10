import firebase from "firebase/app";
import "firebase/firestore";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAq7w95Z5PLm5JV9-rFNxMRF4yqmY9hYZo",
    authDomain: "shelter-af808.firebaseapp.com",
    databaseURL: "https://shelter-af808.firebaseio.com",
    projectId: "shelter-af808",
    storageBucket: "shelter-af808.appspot.com",
    messagingSenderId: "950018103796"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjHGSoBGHjoCAIz77s8ocbGvwjV5Bpg5c",
    authDomain: "instagram-clone-2af67.firebaseapp.com",
    databaseURL: "https://instagram-clone-2af67.firebaseio.com",
    projectId: "instagram-clone-2af67",
    storageBucket: "instagram-clone-2af67.appspot.com",
    messagingSenderId: "504706464831",
    appId: "1:504706464831:web:03653ce99255c84ec48c8a",
    measurementId: "G-ECKYL3X7EP"

});
const db= firebaseApp.firestore();
const auth=firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};
  //export default firebaseConfig;
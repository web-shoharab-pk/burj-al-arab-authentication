import firebase from "firebase/app"
 
 const firebaseConfig = {
  apiKey: "AIzaSyCc2mqN4cuVchIRUB9PdghuFSLwA8qeYjE",
  authDomain: "burj-al-arab-practice-4b15f.firebaseapp.com",
  projectId: "burj-al-arab-practice-4b15f",
  storageBucket: "burj-al-arab-practice-4b15f.appspot.com",
  messagingSenderId: "148887052597",
  appId: "1:148887052597:web:3a8c4ff220e4aa4d106c7c"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export default firebaseConfig;
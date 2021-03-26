import firebase from 'firebase/app'; 
import "firebase/auth";
import React, { useContext } from 'react';
import  { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleGoogleSignIn = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                // The signed-in user info.
                const {displayName, email} = result.user;
                const signInUser = {name: displayName, email}
                // console.log( signInUser );
                setLoggedInUser(signInUser);
             
                // ...
                storeAuthToken();
            }).catch((error) => {
                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log( errorMessage);
            });

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function(idToken) {
                // Send token to your backend via HTTPS
                sessionStorage.setItem('token', idToken)
                history.replace(from);
                console.log(idToken);
              }).catch(function(error) {
                // Handle error
                console.log(error);
              });
        }

    }
    return (
        <div>
            <h1>This is Login: {loggedInUser.name}</h1>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>

        </div>
    );
};

export default Login;
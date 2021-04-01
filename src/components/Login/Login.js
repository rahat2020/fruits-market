import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import './Login.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
    })
    const handleGoogleSign = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const { displayName, photoURL, email } = res.user
                const signedInUser = ({
                    isSignedIn: true,
                    name: displayName,
                    photo: photoURL,
                    email: email
                })
                setUser(signedInUser);
                console.log(signedInUser);


            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;

                console.log(errorCode, errorMessage, email);
            });
    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
            }
            setUser(signedOutUser);
            console.log('Sign-out successful')
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    return (
        <div className="div_style">
            <h3>Before you go there, first you need to login or sign up</h3>
            <br />
            {
                user.isSignedIn ? <button onClick={handleSignOut}>sign out google</button> : <button onClick={handleGoogleSign}>sign with google</button>

            }
            <br/>
            {
                user.isSignedIn &&
                <div className="div_style">
                    <h4>welcome, to your account: {user.name}</h4>
                    <h5> your email: {user.email}</h5>
                </div>
            }
        </div>
    );
};

export default Login;
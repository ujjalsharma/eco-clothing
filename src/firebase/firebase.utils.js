import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"

const config = {
    apiKey: "AIzaSyBZ9KznkYTT5CgyvoxRRsptSdz1jEmRVsY",
    authDomain: "eco-clothing-db.firebaseapp.com",
    projectId: "eco-clothing-db",
    storageBucket: "eco-clothing-db.appspot.com",
    messagingSenderId: "423608052504",
    appId: "1:423608052504:web:6285f2c21db265f7d3cc6d",
    measurementId: "G-61TEL32E8Z"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message);

        }

    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




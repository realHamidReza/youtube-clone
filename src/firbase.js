import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBMjsEk76J23aNo-po6To3w0xQWU-Urp3Y",
    authDomain: "hamid-yt-clone.firebaseapp.com",
    projectId: "hamid-yt-clone",
    storageBucket: "hamid-yt-clone.appspot.com",
    messagingSenderId: "742811603783",
    appId: "1:742811603783:web:7d0c2db6bd5e7830d13262",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();

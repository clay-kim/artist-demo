
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCFNFtFqzStCEZ90ToUlSR9aqPc4KCHsjQ",
    authDomain: "gcclayart.firebaseapp.com",
    databaseURL: "https://gcclayart-default-rtdb.firebaseio.com",
    projectId: "gcclayart",
    storageBucket: "gcclayart.appspot.com",
    messagingSenderId: "735152865932",
    appId: "1:735152865932:web:6ab5f6f97447ea25cc71a9",
    measurementId: "G-3N1YH05DS5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);


export {projectStorage, projectFirestore} ;
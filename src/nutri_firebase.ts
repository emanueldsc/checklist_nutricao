import firebase from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCZ1dgiBtahBdrCMoGC3TpNzr8jFMSvB9I",
    authDomain: "aprendendo-firebase-70197.firebaseapp.com",
    databaseURL: "https://aprendendo-firebase-70197.firebaseio.com",
    projectId: "aprendendo-firebase",
    storageBucket: "aprendendo-firebase.appspot.com",
    messagingSenderId: "267145041525",
    appId: "1:267145041525:web:8d96d2bda06905cbe34a3c",
    measurementId: "G-P39XTJFHTT"
};

// // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export { fb };
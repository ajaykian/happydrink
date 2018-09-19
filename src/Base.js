import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBO7CiJev8j1i8kNn2akOR-zf9cn9fR5l8",
    authDomain: "happybar-daa9d.firebaseapp.com",
    databaseURL:"https://happybar-daa9d.firebaseio.com",
    storageBucket: "happybar-daa9d.appspot.com",
    messagingSenderId: "270075088680",
});

export default app;
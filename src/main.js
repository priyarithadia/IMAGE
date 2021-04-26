//import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import { createApp } from 'vue'


export const eventBus = createApp(App)



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA-1LJaoPNylIo5iVaTjckbBKaDLRHB8ag",
    authDomain: "image-8ba81.firebaseapp.com",
    databaseURL: "https://image-8ba81-default-rtdb.firebaseio.com",
    projectId: "image-8ba81",
    storageBucket: "image-8ba81.appspot.com",
    messagingSenderId: "29050457852",
    appId: "1:29050457852:web:f85879448f9dfb9d5d9179",
    measurementId: "G-BS9DG3N5HE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  


createApp(App).mount('#app')
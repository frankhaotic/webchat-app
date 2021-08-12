import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDjL4jhnFWfCqQkv_2OlrAxdTjuunUNtis',
    authDomain: 'webchat-319a1.firebaseapp.com',
    projectId: 'webchat-319a1',
    storageBucket: 'webchat-319a1.appspot.com',
    messagingSenderId: '6353551138',
    appId: '1:6353551138:web:cbee0f39073c9d5038ef7b',
  })
  .auth()

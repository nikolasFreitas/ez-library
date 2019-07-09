import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDR_dve9HorNyOu4mIHSyjHUo7EQzpDFPo',
  authDomain: 'library-69dac.firebaseapp.com',
  databaseURL: process.env.REACT_APP_FIREBASE_URL,
  projectId: 'library-69dac',
  storageBucket: '',
  messagingSenderId: '15293707504',
  appId: '1:15293707504:web:7e49fb7417105962',
};

firebase.initializeApp(firebaseConfig);

export const firebaseDb = firebase.database();

export const firebaseAuth = '72DPpwauP7fMUouoM1eObFePKJR3UBt5ca3aj2E4';

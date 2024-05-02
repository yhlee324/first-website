// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBIxUJJFMn-iEURxu852Z5VpxGnhEg79XE',
  authDomain: 'website-fadbf.firebaseapp.com',
  databaseURL: 'https://website-fadbf-default-rtdb.firebaseio.com',
  projectId: 'website-fadbf',
  storageBucket: 'website-fadbf.appspot.com',
  messagingSenderId: '443536432414',
  appId: '1:443536432414:web:462535fb7c3e7b6c9d3d0f',
  measurementId: 'G-1SWB58JR03',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

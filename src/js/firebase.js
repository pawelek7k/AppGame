// import { getAnalytics } from "firebase/analytics";
global.process = require('process');
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Notify } from 'notiflix';
const firebaseConfig = {
  apiKey: 'AIzaSyBFTleaabEETsFQRavrze5fpw5vtJK-FIY',
  authDomain: 'appgame-7b22b.firebaseapp.com',
  projectId: 'appgame-7b22b',
  storageBucket: 'appgame-7b22b.appspot.com',
  messagingSenderId: '55180818662',
  appId: '1:55180818662:web:bf20405c5c03c79a0e2327',
  measurementId: 'G-GSFXDHQHQ4',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

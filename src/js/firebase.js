// import { getAnalytics } from "firebase/analytics";
global.process = require('process');
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const emailInput = document.querySelector('#email-singup');
const signUpBtn = document.querySelector('.sing-up');
const passwordInput = document.querySelector('#password-singup');
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

signUpBtn.addEventListener('click', e => {
  e.preventDefault();
  signUpBtn.disabled = true;

  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(userCredential => {
      const user = userCredential.user;
      console.log('User registered:', user);
    })
    .catch(error => {
      const errorMessage = error.message;
      console.error('Registration error:', errorMessage);
    });
});

// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
global.process = require('process');

const emailInput = document.querySelector('#email-singup');
const signUpBtn = document.querySelector('.sing-up');
const passwordInput = document.querySelector('#password-singup');

const logInBtn = document.querySelector('.log-in');
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

const isInputValue = () => {
  if (!passwordInput.value.trim() || !emailInput.value.trim()) {
    signUpBtn.disabled = true;
  } else {
    signUpBtn.disabled = false;
  }
};

emailInput.addEventListener('input', isInputValue);
passwordInput.addEventListener('input', isInputValue);

isInputValue();

signUpBtn.addEventListener('click', e => {
  e.preventDefault();
  signUpBtn.disabled = true;
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      const errorMessage = error.message;
    });
});

//login

logInBtn.addEventListener('click', e => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(userCredential => {
      (user = userCredential.user),
        document
          .querySelector('.login-container')
          .classList.toggle('is-hidden');
      Notify.success(`Hi, ${user.emailInput.split('@')[0]}, you are sign in!`);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.warning(`Wrong email or password!`);
    });
});

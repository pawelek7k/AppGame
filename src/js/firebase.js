// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Notiflix from 'notiflix';
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

const checkIfUserIsLoggedIn = () => {
  const user = auth.currentUser;
  if (user) {
    console.log('User is already logged in:', user);
  }
};

emailInput.addEventListener('input', isInputValue);
passwordInput.addEventListener('input', isInputValue);

isInputValue();
checkIfUserIsLoggedIn();

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

const loginDelay = 3000;

logInBtn.addEventListener('click', e => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
    .then(userCredential => {
      const user = userCredential.user;
      document.querySelector('.login-container').classList.toggle('is-hidden');
      Notiflix.Notify.success(
        `Hi, ${user.email.split('@')[0]}, you are signed in!`
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(`Wrong email or password!`);

      setTimeout(() => {
        emailInput.value = '';
        passwordInput.value = '';
      }, loginDelay);
    });
});

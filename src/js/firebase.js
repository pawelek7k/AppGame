import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import Notiflix from 'notiflix';
global.process = require('process');

const emailInput = document.querySelector('#email-singup');
const signUpBtn = document.querySelector('.sing-up');
const passwordInput = document.querySelector('#password-singup');
const logInBtn = document.querySelector('.log-in');
const logOutBtn = document.querySelector('.log-out');

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
  signUpBtn.disabled = !passwordInput.value.trim() || !emailInput.value.trim();
};

const checkIfUserIsLoggedIn = () => {
  const user = auth.currentUser;
  if (user) {
    console.log('User is already logged in:', user);
  }
};

const loginDelay = 3000;

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

logInBtn.addEventListener('click', e => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    Notiflix.Notify.warning('Please fill in all fields.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      document.querySelector('.login-container').classList.toggle('is-hidden');
      Notiflix.Notify.success(
        `Hi, ${user.email.split('@')[0]}, you are signed in!`
      );
    })
    .catch(error => {
      Notiflix.Notify.failure('Wrong email or password!');
      setTimeout(() => {
        emailInput.value = '';
        passwordInput.value = '';
      }, loginDelay);
    });
});

const hideAuthButtons = () => {
  const user = auth.currentUser;
  const authButtons = document.querySelectorAll('.buttons-register button');
  if (user) {
    authButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else {
    authButtons.forEach(button => {
      button.style.display = 'block';
    });
  }
};

hideAuthButtons();

auth.onAuthStateChanged(user => {
  hideAuthButtons();
});

logOutBtn.addEventListener('click', e => {
  e.preventDefault();
  signOut(auth)
    .then(() => {
      Notiflix.Notify.info(`Goodbye, you are logged out!`);
    })
    .catch(e => {
      Notiflix.Notify.warning(`Goodbye, you are logged out!`);
    });
});

const loginContainer = document.querySelector('.login-container');

const loginBtn = document.querySelector(
  '.buttons-register  button:nth-of-type(1)'
);

loginBtn.addEventListener('click', e => {
  e.preventDefault();
  loginContainer.style.display = 'block';
});

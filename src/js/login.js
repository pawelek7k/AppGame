const loginContainer = document.querySelector('.login-container');
const loginBtn = document.querySelector(
  '.buttons-register button:nth-of-type(1)'
);
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', e => {
  e.preventDefault();
  loginBtn.style.color = 'rgb(0, 255, 213)';
  loginContainer.style.display = 'block';
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  loginBtn.style.color = '';
  loginContainer.style.display = 'none';
});

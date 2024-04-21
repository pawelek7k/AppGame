const loginContainer = document.querySelector('.login-container');
const loginBtn = document.querySelector(
  '.buttons-register li:nth-of-type(1) button'
);
const closeBtn = document.querySelector('.close-btn');

export function closeLoginContainer() {
  loginBtn.style.color = '';
  loginContainer.style.display = 'none';
}

loginBtn.addEventListener('click', e => {
  e.preventDefault();
  loginBtn.style.color = 'rgb(0, 255, 213)';
  loginContainer.style.display = 'block';
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  closeLoginContainer();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLoginContainer();
  }
});

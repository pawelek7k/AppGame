const singUpContainer = document.querySelector('.singup-container');
const singUpBtn = document.querySelector(
  '.buttons-register li:nth-of-type(2) button'
);
const closeBtn = document.querySelector('.close-btn');

function closeSingUpContainer() {
  singUpBtn.style.color = '';
  singUpContainer.style.display = 'none';
}

singUpBtn.addEventListener('click', e => {
  e.preventDefault();
  singUpBtn.style.color = 'rgb(0, 255, 213)';
  singUpContainer.style.display = 'block';
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  closeSingUpContainer();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeSingUpContainer();
  }
});

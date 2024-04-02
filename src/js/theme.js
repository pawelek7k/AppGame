const checkbox = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {
  body.classList.toggle('light-theme');
});

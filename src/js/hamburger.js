const hamburger = document.querySelector('.hamburger-checbox');
const hamburgerContainer = document.querySelector('.btns-and-theme-hamb');
hamburger.addEventListener('change', () => {
  hamburgerContainer.classList.toggle('show-menu');
});

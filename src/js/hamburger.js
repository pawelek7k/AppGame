const hamburger = document.querySelector('.hamburger-checbox');
const hamburgerContainer = document.querySelector('.btns-and-theme-hamb');
hamburger.addEventListener('change', () => {
  if (hamburger.checked) {
    hamburgerContainer.classList.add('show-menu');
  } else {
    hamburgerContainer.classList.remove('show-menu');
  }
});

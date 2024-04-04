const hamburger = document.querySelector('.hamburger');
const hamburgerContainer = document.querySelector('.btns-and-theme-hamb');

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.add('show-menu');
});

// hamburger.addEventListener('change', () => {
//   if (!hamburger.checked) {
//     hamburgerContainer.classList.remove('show-menu');
//   }
// });

const hamburgerBtn = document.querySelector('.hamburger-input');
hamburgerBtn.checked = false;
const navbarList = document.querySelector('.navbar-list');
const header = document.querySelector('.header');

hamburgerBtn.addEventListener('click', e => {
  navbarList.style.opacity = 1;

  if (hamburgerBtn.checked == false) {
    navbarList.style.opacity = 0;
  }
});

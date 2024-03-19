const hamburgerBtn = document.querySelector('.hamburger-input');
hamburgerBtn.checked = false;
const navbarList = document.querySelector('.navbar-list');
const header = document.querySelector('.header');
const navbarMenu = document.querySelector('.navbar-menu');

hamburgerBtn.addEventListener('click', e => {
  navbarList.style.opacity = 1;
  navbarMenu.classList.add('active');

  if (hamburgerBtn.checked == false) {
    navbarList.style.opacity = 0;
    navbarMenu.classList.remove('active');
  }
});

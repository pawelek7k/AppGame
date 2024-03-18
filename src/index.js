// // document.addEventListener('DOMContentLoaded', function () {
// //   const hamburger = document.querySelector('.hamburger');
// //   const menu = document.querySelector('.menu');

// //   hamburger.addEventListener('click', function () {
// //     this.classList.toggle('open');
// //     menu.classList.toggle('show');
// //   });
// // });

const hamburgerBtn = document.querySelector('.hamburger-input');
hamburgerBtn.checked = false;
const navbarList = document.querySelector('.navbar-header');
const header = document.querySelector('.header');

hamburgerBtn.addEventListener('click', e => {
  navbarList.classList.add('active');

  if (hamburgerBtn.checked == false) {
    navbarList.classList.remove('active');
  }
});

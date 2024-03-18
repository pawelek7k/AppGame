// // document.addEventListener('DOMContentLoaded', function () {
// //   const hamburger = document.querySelector('.hamburger');
// //   const menu = document.querySelector('.menu');

// //   hamburger.addEventListener('click', function () {
// //     this.classList.toggle('open');
// //     menu.classList.toggle('show');
// //   });
// // });

// const hamburgerBtn = document.querySelector('.hamburger-btn');
// const navbarList = document.querySelector('.navbar-list');

// hamburgerBtn.addEventListener('click', e => {
//   e.preventDefault();
//   navbarList.classList.toggle('show');
//   if (navbarList.classList.contains('show')) {
//     const listItems = navbarList.querySelectorAll('li');
//     let delay = 0;
//     listItems.forEach((item, index) => {
//       item.style.transitionDelay = `${delay}s`;
//       item.classList.toggle('show');
//       delay += 0.1;
//     });
//   } else {
//     navbarList.querySelectorAll('li').forEach(item => {
//       item.classList.remove('show');
//     });
//   }
// });

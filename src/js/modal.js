const modalDetails = document.querySelector('#modalDetailsCard');
const buttonDetails = document.querySelector('.view-details-btn');

buttonsDetails.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    modalDetails.style.display = 'block';
  });
});

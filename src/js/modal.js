const modalDetails = document.querySelector('#modalDetailsCard');
const buttonDetails = document.querySelector('.view-details-btn');

buttonDetails.addEventListener('click', e => {
  e.preventDefault();
  modalDetails.style.display = 'block';
});

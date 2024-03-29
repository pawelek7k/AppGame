const modalDetails = document.querySelector('#modalDetailsCard');
const buttonsDetails = document.querySelectorAll('.view-details-btn');

buttonsDetails.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    modalDetails.style.display = 'block';
    console.log('dupa');
  });
});

const closeButton = modalDetails.querySelector('.close');
modalDetails.addEventListener('click', e => {
  if (e.target === modalDetails || e.target === closeButton) {
    modalDetails.style.display = 'none';
  }
});

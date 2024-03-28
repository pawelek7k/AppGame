const modalDetails = document.querySelector('#modalDetailsCard');
const buttonsDetails = document.querySelectorAll('.view-details-btn');

buttonsDetails.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    modalDetails.style.display = 'block';
  });
});

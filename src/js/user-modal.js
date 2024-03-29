const userModal = document.querySelector('#userModal');
const userIcon = document.querySelector('.user-icon');

userIcon.addEventListener('click', e => {
  userModal.style.display = 'block';
});

const closeButton = userModal.querySelector('.user-modal-close');
closeButton.addEventListener('click', e => {
  userModal.style.display = 'none';
});

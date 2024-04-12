const userModal = document.querySelector('#userModal');
const userIcon = document.querySelector('.user-icon');
const userProfileHtml = document.querySelector('.user-profile');

const userProfileLogOut = `
            <h2 class="user-name">Profile</h2>
            <p class="user-email">Email: johndoe@example.com</p>
            <p class="user-age">Age: 30</p>
            <p class="user-location">Location: New York, USA</p>
            <p class="user-interests">Interests: Traveling, Photography, Reading</p>`;

const userProgileLogIn = ``;

userIcon.addEventListener('click', e => {
  userModal.style.display = 'block';
  // userProfileHtml.innerHTML = userProfileLogOut;
});

const closeButton = userModal.querySelector('.user-modal-close');
closeButton.addEventListener('click', e => {
  userModal.style.display = 'none';
});

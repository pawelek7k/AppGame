const userModal = document.querySelector('#userModal');
const userIcon = document.querySelector('.user-icon');
const userProfileHtml = document.querySelector('.user-profile');

const userProfileLogOut = `
            <h2 class="user-name">Profile</h2>
            <p class="user-email">Email: johndoe@example.com</p>
            <p class="user-age">Age: 30</p>
            <p class="user-location">Location: New York, USA</p>
            <p class="user-interests">Interests: Traveling, Photography, Reading</p>`;

const userProgileLogIn = ` <div class="background-image">
<label for="backgroundImgInput">
    <div class="bg-image"></div>
    <!-- <img src='./images/bg.jpg' alt="Background Image" id="backgroundImg" /> -->
</label>
<input type="file" id="backgroundImgInput" style="display: none;">
</div>

<div class="container-user-icon">
<label for="profilePicInput">
    <img src="./images/ProfileUser.png" alt="User Icon" id="userIcon" />
</label>
<input type="file" id="profilePicInput" style="display: none;">
</div>

<p class="nickname">AppGamesNickname</p>
<ul>
<li><button>My WishList</button></li>
<li><button>My Games</button></li>
</ul>
<ul class="user-informations">
<li>
    <p>Join date:</p>
</li>
<li>
    <p>
        <span id="copyButton">Copy your ID</span>
    </p>

</li>
</ul>
</div>`;

userIcon.addEventListener('click', e => {
  userModal.style.display = 'block';
  // userProfileHtml.innerHTML = userProgileLogIn;
});

const closeButton = userModal.querySelector('.user-modal-close');
closeButton.addEventListener('click', e => {
  userModal.style.display = 'none';
});

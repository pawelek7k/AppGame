const profilePicInput = document.getElementById('profilePicInput');
const userIcon = document.getElementById('userIcon');
const backgroundImg = document.querySelector('.background-image');
let isInputClicked = false;

const openProfilePicInput = () => {
  if (!isInputClicked) {
    profilePicInput.click();
    isInputClicked = true;
  }
};

const openBackgroundImgInput = () => {
  if (!isInputClicked) {
    backgroundImg.click();
    isInputClicked = true;
  }
};

userIcon.addEventListener('click', openProfilePicInput);
backgroundImg.addEventListener('click', openBackgroundImgInput);

profilePicInput.addEventListener('change', e => {
  const file = e.target.files[0];

  if (file) {
    const imgUrl = URL.createObjectURL(file);

    userIcon.src = imgUrl;
    userIcon.style.borderRadius = '50%';
  }

  isInputClicked = false;
});

backgroundImg.addEventListener('change', e => {
  const file = e.target.files[0];

  if (file) {
    const imgUrl = URL.createObjectURL(file);

    backgroundImg.style.backgroundImage = `url(${imgUrl})`;
  }

  isInputClicked = false;
});

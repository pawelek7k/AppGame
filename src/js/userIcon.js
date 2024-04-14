const profilePicInput = document.getElementById('profilePicInput');
const userIcon = document.getElementById('userIcon');
let isInputClicked = false;

userIcon.addEventListener('click', () => {
  if (!isInputClicked) {
    profilePicInput.click();
    isInputClicked = true;
  }
});

profilePicInput.addEventListener('change', e => {
  const file = e.target.files[0];

  if (file) {
    const imgUrl = URL.createObjectURL(file);

    userIcon.src = imgUrl;
    userIcon.style.borderRadius = '50%';
  }

  isInputClicked = false;
});

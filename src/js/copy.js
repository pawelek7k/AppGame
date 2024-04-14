import Notiflix from 'notiflix';

const copyButton = document.getElementById('copyButton');

copyButton.addEventListener('click', () => {
  var textToCopy = 'Some ID';
  copyText(textToCopy);
});

function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      Notiflix.Notify.info('Copy your ID');
    })
    .catch(err => {
      alert('An error occurred while copying the ID.');
    });
}

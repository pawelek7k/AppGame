import _ from 'lodash';
import Notiflix from 'notiflix';

const copyButton = document.getElementById('copyButton');

const debouncedCopyText = _.debounce(copyText, 500);

copyButton.addEventListener('click', () => {
  var textToCopy = 'Some ID';
  debouncedCopyText(textToCopy);
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

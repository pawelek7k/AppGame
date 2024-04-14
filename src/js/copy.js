const copyButton = document.getElementById('copyButton');
const tooltip = document.querySelector('.tooltip-user-modal');

copyButton.addEventListener('click', function () {
  var textToCopy = 'Some ID';
  copyText(textToCopy);
  tooltip.style.display = 'block';
});

function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Copy text:', text);
    })
    .catch(err => {
      console.error('Error while copying:', err);
      alert('An error occurred while copying the ID.');
    });
}

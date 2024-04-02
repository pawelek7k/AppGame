const checkbox = document.querySelector('.switch input[type="checkbox"]');
const body = document.querySelector('body');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  body.classList.toggle('light-theme');
  if (checkbox.checked) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.removeItem('theme');
  }
});

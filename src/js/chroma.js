const imgContainers = document.querySelectorAll('.cards-home-movie-image');

imgContainers.forEach(imgContainer => {
  const backgroundColor = window.getComputedStyle(imgContainer).backgroundColor;

  const brightness = chroma(backgroundColor).luminance();

  const textElement = imgContainer.querySelector('.text-element');
  if (brightness < 0.5) {
    textElement.style.color = 'black';
  } else {
    textElement.style.color = 'white';
  }
});

import { fetchGenres } from './render-cards';

export async function generateGenresOptions() {
  const genres = await fetchGenres();

  const selectHtml = document.querySelector('#genre-select');

  selectHtml.innerHTML = '';

  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre.id;
    option.textContent = genre.name;
    selectHtml.appendChild(option);
  });
}

generateGenresOptions();

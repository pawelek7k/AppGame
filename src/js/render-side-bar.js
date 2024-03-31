import { fetchGenres } from './render-cards';

export async function generateGenresOptions() {
  const genres = await fetchGenres();

  const selectHtml = document.querySelector('#genre-list');

  genres.forEach(genre => {
    const listItem = document.createElement('li');
    listItem.dataset.value = genre.id;
    listItem.textContent = genre.name;
    selectHtml.appendChild(listItem);
  });
}

generateGenresOptions();

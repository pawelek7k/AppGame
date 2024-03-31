import { fetchGenres } from './render-cards';

export async function generateGenresOptions() {
  const genres = await fetchGenres();

  const selectHtml = document.querySelector('#genre-list');

  genres.forEach(genre => {
    const listItem = document.createElement('li');
    const spanItem = document.createElement('span');
    listItem.dataset.value = genre.id;
    spanItem.textContent = genre.name;
    selectHtml.appendChild(listItem);
    listItem.appendChild(spanItem);
  });
}

generateGenresOptions();

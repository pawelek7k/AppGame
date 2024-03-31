import { fetchGenres } from './render-cards';

async function generateGenresOptions() {
  const genres = await fetchGenres();

  const selectHtml = document.querySelector('#genre-select');

  selectHtml.innerHTML = '';
}

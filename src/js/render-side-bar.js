import { fetchGenres, renderGames } from './render-cards';
import { heading } from './search';

export async function fetchGamesByGenre(genreId) {
  const API_KEY = '8b50ecc01425485f9653061e73d88e87';
  const url = new URL(`https://api.rawg.io/api/games`);
  url.searchParams.append('key', API_KEY);
  url.searchParams.append('genres', genreId);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games for genre:', error);
  }
}

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

    listItem.addEventListener('click', async () => {
      const genreId = listItem.dataset.value;
      heading.innerHTML = `${genre.name}`;
      const games = await fetchGamesByGenre(genreId);
      renderGames(games);
    });
  });
}

generateGenresOptions();

import Notiflix from 'notiflix';
import { API_KEY, list } from './render-cards';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
let currentPage = 1;
const perPage = 40;

import { renderGames } from './render-cards';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  list.innerHTML = '';
  const inputValue = searchInput.value.trim();

  if (!inputValue) return;

  try {
    const data = await getGames(inputValue, currentPage);
    console.log(data);
    if (!data.results.length) {
      Notiflix.Notify.info('No games found');
      return;
    }

    renderGames(data.results);
    handlePagination(data.count);
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Failed to fetch games');
  }
});

async function getGames(name, page) {
  const searchParams = new URLSearchParams({
    search: name,
    page_size: perPage,
    key: API_KEY,
    image_type: 'photo',
    safesearch: true,
    page: page,
  });
  const response = await fetch(
    `https://api.rawg.io/api/games?${searchParams.toString()}`
  );

  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

function handlePagination(totalResults) {
  list.innerHTML = '';
  const totalPages = Math.ceil(totalResults / perPage);

  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination');

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', async () => {
      currentPage = i;
      const inputValue = searchInput.value.trim();
      const data = await getGames(inputValue, currentPage);
      list.innerHTML = '';
      renderGames(data.results);
    });
    paginationContainer.appendChild(pageButton);
  }

  list.innerHTML = paginationContainer;
}

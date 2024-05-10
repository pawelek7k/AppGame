import Notiflix from 'notiflix';
import { nextPageBtn, prevPageBtn } from './pagination';
import { API_KEY, list, loader, renderGames } from './render-cards';
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
export const heading = document.querySelector('.hero-heading');
let currentPage = 1;
const perPage = 40;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  list.innerHTML = '';
  prevPageBtn.style.display = 'none';
  nextPageBtn.style.display = 'none';
  loader.style.display = 'block';
  heading.innerHTML = '';
  const inputValue = searchInput.value.trim();

  if (!inputValue) return;

  try {
    const data = await getGames(inputValue, currentPage);
    heading.innerHTML = `search for : ${inputValue}`;
    loader.style.display = 'none';

    if (!data.results.length) {
      Notiflix.Notify.info('No games found');
      prevPageBtn.style.display = 'none';
      nextPageBtn.style.display = 'none';
      heading.innerHTML = 'No games found';
      return;
    }
    prevPageBtn.style.display = 'block';
    nextPageBtn.style.display = 'block';

    renderGames(data.results);
  } catch (error) {
    console.error(error);
    Notiflix.Notify.failure('Failed to fetch games');
  }
  searchForm.reset();
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

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

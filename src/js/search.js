// import Notiflix from 'notiflix';
// import { API_KEY, renderGames } from './render-cards';

// const searchForm = document.querySelector('#search-form');
// const searchInput = document.querySelector('#search-input');
// let currentPage = 1;
// const perPage = 40;

// searchForm.addEventListener('submit', async event => {
//   event.preventDefault();
//   const inputValue = searchInput.value.trim();

//   if (!inputValue) return;

//   try {
//     const data = await getGames(inputValue, currentPage);
//     console.log(data);
//     if (!data.results.length) {
//       Notiflix.Notify.info('No games found');
//       return;
//     }
//     renderGames(data.results);
//   } catch (error) {
//     console.error(error);
//     Notiflix.Notify.failure('Failed to fetch games');
//   }
// });

// async function getGames(name, page) {
//   const searchParams = new URLSearchParams({
//     search: name,
//     page_size: perPage,
//     key: API_KEY,
//     image_type: 'photo',
//     safesearch: true,
//     page: page,
//   });
//   const response = await fetch(
//     `https://api.rawg.io/api/games?${searchParams.toString()}`
//   );
//   console.log(response);
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response.json();
// }

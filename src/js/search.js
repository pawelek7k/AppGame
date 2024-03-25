// import Notiflix from 'notiflix';
// import { API_KEY, list } from './render-cards';

// const searchForm = document.querySelector('#search-form');
// const searchInput = document.querySelector('#search-input');
// let currentPage = 1;
// const perPage = 40;

// import { renderGames } from './render-cards';

// searchForm.addEventListener('submit', async event => {
//   event.preventDefault();
//   list.innerHTML = '';
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

// function renderSearchGames(games) {
//   return games.map({
//     id,
//       name,
//       background_image,
//       genres: gameGenres,
//       tags,
//       rating,
//       added,
//       released,
//       parent_platforms: gamePlatforms,
//   }) => {
//     return `<li class="card-container" data-id="${id}">
//     <div class="first-content-card" data-id="${id}" data-title="${name}" data-original_title="${name}">
//     <div class="img-content">
//       <img class="cards-home-game-image" width="310" height="170" src="${background_image}" alt="Poster ${name}" />
//       <div>
//       <div class="stats-cards">
//       <p class="cards-home-game-rating">${rating}</p>
//       <p class="cards-home-game-added">+ ${added}</p>
//       </div>
//       <span class="cards-home-game-title">${name.toUpperCase()}</span>

//       </div>
//     </div>
// </div>
//     <div class="second-content-card">
//       <div class="cards-home-game-genres">
//       <p>Genres:</p> <p>${genreNames.join(', ')}</p></div>
//       <div class="cards-home-game-genres">
//       <p>Release date:</p> <p>${released}</p></div>
//       <div class="cards-home-game-genres">
//       <p>Platfotm:</p> <p>${platformList}</p></div>
//       <button class="view-details-btn" data-id="${id}">View Details</button>

//     </div>
// </li>`
//   }
// }

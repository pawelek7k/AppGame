import prevPageBtn from './pagination';

export const API_KEY = '4688c8e2a1b74736a6eaf922561496b4';
export let page = 1;
const baseUrl = 'https://api.rawg.io/api/';
export const list = document.querySelector('.main-gallery');

export async function fetchPopularGames(page) {
  const url = new URL('games', baseUrl);
  url.searchParams.append('ordering', '-rating');
  url.searchParams.append('key', API_KEY);
  url.searchParams.append('page', page);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular games:', error);
  }
}

export async function fetchGameById(id) {
  const url = new URL(`games/${id}`, baseUrl);
  url.searchParams.append('key', API_KEY);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching game with id ${id}:`, error);
  }
}

export async function fetchGenres() {
  const url = new URL('https://api.rawg.io/api/genres');
  url.searchParams.append('key', API_KEY);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching genres:', error);
  }
}

export async function renderGames(games) {
  list.innerHTML = '';

  for (const game of games) {
    const {
      id,
      name,
      background_image,
      genres: gameGenres,
      tags,
      rating,
      added,
      released,
      parent_platforms,
      short_screenshots,
    } = game;

    const containsNSFW = tags.some(tag => tag.name.toLowerCase() === 'nsfw');

    if (containsNSFW) {
      continue;
    }

    const img = new Image();
    img.src = background_image;

    img.onload = async function () {
      if (this.naturalWidth >= this.naturalHeight) {
        const genreNames = gameGenres.map(genre => genre.name);
        const tagNames = tags.map(tag => tag.name);
        const platformNames = parent_platforms
          .map(parent_platform => parent_platform.platform.name)
          .slice(0, 2);

        const listItem = `
          <li class="card-container" data-id="${id}">
            <div class="first-content-card" data-id="${id}" data-title="${name}" data-original_title="${name}">
              <div class="img-content">
                  <img class="cards-home-game-image" width="310" height="170" src="${background_image}" alt="Poster ${name}" />
                <div>
                <div class="stats-cards">
                <p class="cards-home-game-rating">${rating}</p>
                <p class="cards-home-game-added">+ ${added}</p>
                </div>
                <span class="cards-home-game-title">${name.toUpperCase()}</span>
                </div>
              </div>
            </div>
            <div class="second-content-card">
            ${
              genreNames.length > 0
                ? `<div class="cards-home-game-genres"><span>Genres:</span> ${genreNames.join(
                    ', '
                  )}</div>`
                : ''
            }
            ${
              released
                ? `<div class="cards-home-game-genres"><span>Release date:</span> ${released}</div>`
                : ''
            }
            ${
              platformNames.length > 0
                ? `<div class="cards-home-game-genres"><span>Platforms:</span> ${platformNames.join(
                    ', '
                  )}</div>`
                : ''
            }
              <button class="view-details-btn" data-id="${id}">View Details</button>
            </div>
          </li>
        `;

        list.insertAdjacentHTML('beforeend', listItem);

        document
          .querySelector(`[data-id="${id}"] .view-details-btn`)
          .addEventListener('click', async function () {
            showModal(game);
          });
      }
    };
  }
}

function showModal(game) {
  const screenshots = game.short_screenshots.slice(0, 6);
  const screenshotsHtml = screenshots
    .map(
      (screenshot, index) =>
        `<img src="${screenshot.image}" alt="Screenshot ${
          index + 1
        }" width="300" />`
    )
    .join('');

  const modalContent = `
  <div class="modal-content" style="background-image: url(${
    game.background_image
  }); background-repeat: no-repeat; background-size: cover;">
    <div class="gradient-overlay"></div>
    <div class="follow-us"><span>Follow us!</span></div>
    <span class="close">&times;</span>

    <div class="container-modal-div">
      <div class="screenshots-modal">

        ${screenshotsHtml}

      </div>
      <div class="stats-modal">
      <h2>${game.name}</h2>
        <ul class="buttons-modal">
          <li>
            <button>
              Add to <span>Wishlist</span>
              <span class="stat-modal-btn">${game.added}</span>
            </button>
          </li>
          <li><button>Add to my <span>games</span></button></li>
        </ul>
        <div class="stats-modal-styles">
          <p>Rating: <span>${game.rating}</span></p>
          <p>Added: <span>${game.added}</span></p>
        </div>
        ${
          game.genres.length > 0
            ? `
          <p>Genres: <span>${game.genres
            .map(genre => genre.name)
            .join(', ')}</span></p>
        `
            : ''
        }
        ${
          game.tags.length > 0
            ? `
          <p>Tags: <span>${game.tags.map(tag => tag.name).join(', ')}</span></p>
        `
            : ''
        }

        <p class="view-more-screenshots"><span class="effect">see screenshots</span> </p>
      </div>
    </div>
  </div>
`;

  document.querySelector('.modal').innerHTML = modalContent;
  document.querySelector('.modal').style.display = 'block';

  const closeModalButton = document.querySelector('.modal-content .close');
  closeModalButton.addEventListener('click', closeModal);
}

function closeModal() {
  document.querySelector('.modal').style.display = 'none';
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

fetchPopularGames(page)
  .then(res => res.results)
  .then(renderGames)
  .catch(error => console.error('Error fetching popular games:', error));

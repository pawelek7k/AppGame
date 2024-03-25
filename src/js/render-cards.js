export const API_KEY = '4688c8e2a1b74736a6eaf922561496b4';
const baseUrl = 'https://api.rawg.io/api/';
export const list = document.querySelector('.main-gallery');
const footer = document.querySelector('.footer');
const spinner = document.querySelector('.spinner');

async function fetchPopularGames(page) {
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

async function fetchGenres() {
  const url = new URL('https://api.rawg.io/api/genres');
  url.searchParams.append('key', API_KEY);

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
  }
}
spinner.style.display = 'block';

export async function renderGames() {
  const popularGames = await fetchPopularGames(1);
  const genres = await fetchGenres();

  list.innerHTML = '';

  popularGames.results.forEach(async game => {
    const {
      id,
      name,
      background_image,
      genres: gameGenres,
      tags,
      rating,
      added,
      released,
      parent_platforms: gamePlatforms,
    } = game;

    const img = new Image();
    img.src = background_image;

    img.onload = function () {
      if (this.naturalWidth >= this.naturalHeight) {
        const genreNames = gameGenres.map(genre => genre.name);
        const tagNames = tags.map(tag => tag.name);

        const platformNames = gamePlatforms.map(platform => platform.name);
        const platformList = platformNames.join(', ');

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
        <div class="cards-home-game-genres">
        <p>Genres:</p> <p>${genreNames.join(', ')}</p></div>
        <div class="cards-home-game-genres">
        <p>Release date:</p> <p>${released}</p></div>
        <div class="cards-home-game-genres">
        <p>Platfotm:</p> <p>${platformList}</p></div>
        <button class="view-details-btn" data-id="${id}">View Details</button>

      </div>
</li>
`;

        list.insertAdjacentHTML('beforeend', listItem);
      }
    };
  });
  spinner.style.display = 'none';
  footer.style.display = 'block';
}

renderGames();

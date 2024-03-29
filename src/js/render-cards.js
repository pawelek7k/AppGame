export const API_KEY = '4688c8e2a1b74736a6eaf922561496b4';
const baseUrl = 'https://api.rawg.io/api/';
export const list = document.querySelector('.main-gallery');
const footer = document.querySelector('.footer');
const spinner = document.querySelector('.spinner');
const heroHeading = document.querySelector('.hero-heading');

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

        const platformNames = gamePlatforms
          .map(gamePlatform => gamePlatform.platform.name)
          .slice(0, 2);
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
              ${
                genres !== ''
                  ? `<div class="cards-home-game-genres">
                <p>Genres:</p> <p>${genreNames.join(', ')}</p>
              </div>`
                  : ''
              }
              ${
                released
                  ? `<div class="cards-home-game-genres">
                <p>Release date:</p> <p>${released}</p>
              </div>`
                  : ''
              }
              ${
                platformList
                  ? `<div class="cards-home-game-genres">
                <p>Platform:</p> <p>${platformList}</p>
              </div>`
                  : ''
              }
              <button class="view-details-btn" data-id="${id}">View Details</button>
            </div>
          </li>
        `;

        list.insertAdjacentHTML('beforeend', listItem);
      }
    };
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', async function () {
        const gameId = this.getAttribute('data-id');
        const game = games.find(game => game.id === parseInt(gameId));
        if (game) {
          showModal(game);
        }
      });
    });
  });
  spinner.style.display = 'none';
  footer.style.display = 'block';
  heroHeading.style.display = 'block';
}

function showModal(game) {
  // Stworzenie treści modalu z informacjami o grze
  const modalContent = `
<div class="modal-content">
  <span class="close" onclick="closeModal()">&times;</span>
  <h2>${game.name}</h2>
  <img src="${game.background_image}" width="300" alt="Poster ${game.name}" />
  <p>Rating: ${game.rating}</p>
  <p>Genres: ${game.genres.map(genre => genre.name).join(', ')}</p>
  <p>Tags: ${game.tags.map(tag => tag.name).join(', ')}</p>
  <p>Added: ${game.added}</p>
  <div class="slider" id="slider-${game.id}">
      ${game.short_screenshots
        .map(
          screenshot =>
            `<img src="${screenshot.image}" alt="Screenshot" width="300" />`
        )
        .join('')}
  </div>
</div>
`;

  // Ustawienie treści modalu
  document.querySelector('.modal').innerHTML = modalContent;
  // Wyświetlenie modala
  document.querySelector('.modal').style.display = 'block';
}

// Funkcja zamykająca modal
function closeModal() {
  document.querySelector('.modal').style.display = 'none';
}

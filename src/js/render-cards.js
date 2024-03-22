const API_KEY = '4688c8e2a1b74736a6eaf922561496b4';
const baseUrl = 'https://api.rawg.io/api/';
const list = document.querySelector('.main-gallery');

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

async function renderGames() {
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
    } = game;

    const img = new Image();
    img.src = background_image;
    console.log(game);

    img.onload = function () {
      if (
        this.naturalWidth >= this.naturalHeight ||
        Math.abs(this.naturalWidth - this.naturalHeight) < 50
      ) {
        const genreNames = gameGenres.map(genre => genre.name);
        const tagNames = tags.map(tag => tag.name);

        const listItem = `
<li class="card-container" data-id="${id}">
      <div class="first-content-card" data-id="${id}" data-title="${name}" data-original_title="${name}">
      <div class="img-content">
        <img class="cards-home-movie-image" width="350" height="200" src="${background_image}" alt="Poster ${name}" />
        <div>
        <div class="stats-cards">
        <p class="cards-home-movie-genres">${rating}</p>
        <p class="cards-home-movie-genres">+ ${added}</p>
        </div>
        <span class="cards-home-movie-title">${name.toUpperCase()}</span>

        </div>
      </div>
  </div>
      <div class="second-content-card">
        <p class="cards-home-movie-genres">Genres: ${genreNames.join(', ')}</p>
        <p class="cards-home-movie-tags">Tags: ${tagNames.join(', ')}</p>

      </div>
</li>
`;

        list.insertAdjacentHTML('beforeend', listItem);
      }
    };
  });
}

renderGames();